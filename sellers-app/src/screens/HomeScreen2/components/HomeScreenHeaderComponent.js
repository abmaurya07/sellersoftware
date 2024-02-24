
import React from 'react';
import { View, TouchableOpacity,Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from 'assets/images/FavIcon.png'
import brandingStyles from 'clientBrandingStyles'
import homeScreenStyles from '../HomeScreenStyles'
import { useSelector } from 'react-redux';
import { getStoreDetails } from 'store/GetStateData/data';

const HomeScreenHeaderComponent = ({navigation}) => {

   const {storeName} = useSelector(getStoreDetails)
   console.log('storename', storeName)
    return (
      <View style={[brandingStyles.homeHeader,homeScreenStyles.header]}>
      <View style={homeScreenStyles.leftHeader}>
      
       <Text style={homeScreenStyles.title}> {storeName}</Text>
     
      </View>
      <View style={homeScreenStyles.rightHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
          <Icon name="heart-outline" bold size={20} style={[homeScreenStyles.icon, brandingStyles.homeIcon]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Icon name="notifications-outline" size={20}  style={[homeScreenStyles.icon, brandingStyles.homeIcon]} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Icon name="cart-outline" size={20} color="#fff" style={[homeScreenStyles.icon, brandingStyles.homeIcon]}/>
        </TouchableOpacity>
      </View>
    </View>
    )
  }

  export default HomeScreenHeaderComponent;