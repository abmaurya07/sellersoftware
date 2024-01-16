import React, { useEffect, useState } from 'react';
import {View, Image, StyleSheet, ActivityIndicator, Dimensions, Text} from 'react-native';
import BannerImageSkeleton from '../../../Skeletons/BannerImageSkeleton';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getBanners } from '../../../features/GetStateData/data';
import { fetchBanners } from '../../../features/BannerData/bannersActions';

//Temporary imports during developement
import Logo from 'assets/images/Logo.png';
import WhiteLogo from 'assets/images/whiteLogo.png';
import FavIcon from 'assets/images/FavIcon.png';

const WIDTH = Dimensions.get('window').width

const BannerCarousel = () => {


  const dispatch = useDispatch()
  const {bannerItem, status} = useSelector(getBanners);



  useEffect(( ) => {
    dispatch(fetchBanners());
  }, [])
console.log('status ------------->>>>----------->>', status)


//dummy data 

const dummyBannerItem = [Logo, WhiteLogo, FavIcon]


const [activeSlide, setActiveSlide] = useState(0);

const renderItem = ({ item }) => (
  <View>
    <Text>{item}</Text>
  </View>
);
  return (
<View style={styles.carouselContainer}>
{
  status === 'loading'?
  <BannerImageSkeleton /> :
  1 == 2?
  <Text> Failed fetching</Text> :
 true?
   (
    <>
     <Carousel
        data={dummyBannerItem}
        renderItem={BannerImageComponent}
        sliderWidth={WIDTH}
        itemWidth={300}

        onSnapToItem={(index) => setActiveSlide(index)}
      
          useScrollView={true}  
      />

<Pagination
              dotsLength={dummyBannerItem.length}
              activeDotIndex={activeSlide}
              containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
      {/* <Pagination
        dotsLength={dummyBannerItem.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      /> */}
    </>
   )
 : null
}
  
      
    </View>
  )
 } 

export default BannerCarousel;
const styles = StyleSheet.create({
  
  carouselContainer: {
    height: 200,
    backgroundColor: 'green',
    padding: 10,
  },
})

const BannerImageComponent = ({item}) => {
    const styles = BannerImageStyles
    return (
      <View style={styles.ImageContainer}>
       
               
                <Image
          source={item}
          style={styles.bannerImage}
          resizeMode={'contain'}
          onLoadEnd={() => {
            /* Handle the image load end */
          }}
         
        />
          
      </View>
    );
  };
  
  const BannerImageStyles = StyleSheet.create({
    ImageContainer: {
      height: 200,
      borderRadius: 5,  
    },
    bannerImage: {
      width: '100%',
      position: 'absolute',
    }
  });