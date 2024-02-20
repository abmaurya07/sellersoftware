import React, { useState } from 'react';

// React Native components for building UI
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from 'react-native';

// Stylesheets
import styles from './ProductModalStyles';
import Carousel from 'react-native-reanimated-carousel';

// Redux hooks and methods for state management
import {useSelector} from 'react-redux';



// Selectors to retrieve data from Redux store
import {getStoreDetails} from 'store/GetStateData/data';

// Component for Rendering UI
import PaginationItem from 'components/PaginationItem';
import { useSharedValue } from 'react-native-reanimated';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DoubleClick from 'react-native-double-tap';

const ProductModal = ({product, onClose}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const progressValue = useSharedValue(0);
  const {storeName} = useSelector(getStoreDetails)
  const [showHeart, setShowHeart] = useState(false);

  const handleDoubleTap = () => {
    console.log('cliccked')
    setShowHeart(true);
    setTimeout(() => {
      setShowHeart(false);
    }, 1000); // Hide the heart icon after 1 second
  };

  if (!product) return null;
  const images = product.images

  //render method
  const renderDots = () => {
    return (
      <View style={styles.dotContainer}>
        {images.map((_, index) => (
          <View
          key={index}
          style={[
            styles.dot
          ]}
        >
          <PaginationItem
          backgroundColor={'#111'}
          animValue={progressValue}
          index={index}
          key={index}
          isRotate={false}
          length={images.length}
        />
        </View>
        ))}
      </View>
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={product !== null}
      onRequestClose={onClose}>
        <View style={styles.backdrop}>
      <View style={styles.modalView}>
      

    <View style={styles.storeInfo}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <Image source={{ uri: 'https://app.sellerssoftware.com/wp-content/uploads/2018/05/ground_idaho_03.jpg' }} style={styles.storeImage} />

    <Text style={styles.storeName}>{storeName}</Text>
    </View>
{/* Cross Icon  */}
<Entypo name="cross" size={18} color="#000" onPress={onClose}/>

  
    </View>
      <Carousel
        loop
        width={320} // Set the width of the carousel
        height={320} // Set the height of the carousel
        autoPlay={false}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        
        data={images}
        onSnapToItem={(index) => setActiveIndex(index)}
        renderItem={({ item }) => {
          return (
          <DoubleClick singleTap={() => null} doubleTap={handleDoubleTap} delay={100}>
            <Image source={{uri : item.src}} style={styles.image} />
            {showHeart && (
          <MaterialCommunityIcons
            name="heart"
            size={100}
            color="red"
            style={styles.heartIcon}
          />
        )}
          </DoubleClick>
          
          )
        }}
      />



      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', width:'100%'}}>

      <MaterialCommunityIcons name="cards-heart-outline" size={18} color="#000" />
      {renderDots()}
      <Text>Abhis</Text>
      </View>

        <Text style={styles.modalText}>{product?.price}</Text>
        
        <Text style={styles.modalText}>{product?.regular_price}</Text>
        
        <Text style={styles.modalText}>{product?.sale_price}</Text>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => handleAddToCart(product)}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text>Close,</Text>
        </TouchableOpacity>
      </View>
      </View>
    </Modal>
  );
};

export default ProductModal;
