import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import FastImage from 'react-native-fast-image'; // Make sure to install this package
import BlastedImage from 'react-native-blasted-image';

import BannerImageSkeleton from '../../Skeletons/BannerImageSkeleton';

const { width: windowWidth } = Dimensions.get('window');

const itemHorizontalPadding = 5; // Adjust this value as needed
const itemWidth = windowWidth - 2 
const sliderWidth = windowWidth;

const SimpleCarousel = ({data, isLoading}) => {

    const loadingData = [1,2,3]

    console.log('Carousel Data ---->', data)
  return (

      <Carousel
      style={{borderColor:'red', borderWidth:2}}
        width={sliderWidth}
        data={isLoading ? loadingData : data}
        autoPlay
        autoFillData
        autoPlayInterval={3000}
        pagingEnabled={true}
        itemWidth={itemWidth + 2 * itemHorizontalPadding}
        
        renderItem={({ item }) => (
            <>
        {
            isLoading ?<View 
            style={styles.container}
            >
<BannerImageSkeleton />
            </View>  :
             <View style={[styles.imageContainer]}>
     
            {/* <FastImage
              source={{ uri: item.banners_image }}
              style={styles.image}
              // resizeMode={FastImage.resizeMode.cover}
              
            /> */}
            <BlastedImage 
  source={{ uri: item.banners_image }} 
  resizeMode="contain"
  style={styles.image}

/>
            </View>
         }
         </>
        )}
      />

  );
};

// Todo
// 1. Style in separate
// 2. Border Round
// 3. Pagination Bullet
const styles = StyleSheet.create({


  image: {
    height: 200,
    width: itemWidth,
    overflow: "hidden",
    borderRadius: 25,
    margin: "auto",
    
    // borderTopLeftRadius: 10,
    // borderBottomRightRadius: 10,
    // flex: 1
    

  },
  imageContainer: {
    width: itemWidth,
    height:200,
    overflow: 'contain',    
    borderRadius: 20,
    // borderColor: 'red',
    // borderWidth: 2

  },
  container: {
    paddingTop: 10
  },

});



export default SimpleCarousel;
