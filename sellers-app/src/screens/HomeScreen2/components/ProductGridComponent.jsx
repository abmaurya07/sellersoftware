import React from 'react';

// React Native components for building UI
import {
  TouchableOpacity,
  Image,
  FlatList,
  Text,
} from 'react-native';

// Stylesheets
import styles from './ProductGridStyles'

// Component for Rendering UI

 const ProductGridItem = ({ item, onPress }) =>{
  return (
    <TouchableOpacity 
    style={styles.gridItem} 
    onPress={() => onPress(item)}
  >
    {
  item.images.length > 0 ? 
    <Image  
      source={{uri: item.images[0].src}}
      style={styles.productImage}
      alt='Product Image here'
    />
  :
    <Text>No image available</Text>  
}
  </TouchableOpacity>
  );
}



const ProductGridComponent = ({ data, numColumns, onPress }) => {
  
  //Render Methods
   const renderProductItem = ({ item }) => (
    <ProductGridItem 
        item={item}
        onPress={onPress}  
      />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderProductItem}  
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
    />
  );

}

export default ProductGridComponent;
