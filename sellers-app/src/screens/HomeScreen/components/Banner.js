import React, { useEffect, useState } from 'react';
import {View, Image, StyleSheet, ActivityIndicator, Dimensions, Text} from 'react-native';
import BannerImageSkeleton from '../../../Skeletons/BannerImageSkeleton';
// import Carousel, { Pagination } from 'react-native-snap-carousel';
import SimpleCarousel from '../../../components/Carousels/SimpleCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { getBanners } from 'store/GetStateData/data';
import { fetchBanners } from 'store/BannerData/bannersActions';

//Temporary imports during developement
import Logo from 'assets/images/Logo.png';
import WhiteLogo from 'assets/images/whiteLogo.png';
import FavIcon from 'assets/images/FavIcon.png';

const WIDTH = Dimensions.get('window').width

const BannerCarousel = () => {


  const dispatch = useDispatch()
  const {items, status} = useSelector(getBanners);

  console.log('bannerItem', items)

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
  <SimpleCarousel isLoading={true} />
  :
  status == 'failed'?
  <Text> Failed fetching</Text> :
 status === 'succeeded'?
    <SimpleCarousel data={items} />
 : null
}
  
      
    </View>
  )
 } 

export default BannerCarousel;
const styles = StyleSheet.create({
  
  carouselContainer: {
    height: 200,
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