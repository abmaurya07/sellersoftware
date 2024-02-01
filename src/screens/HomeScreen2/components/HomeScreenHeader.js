
import React from 'react';
import { View, TouchableOpacity,Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from 'assets/images/FavIcon.png'
import brandingStyles from 'clientBrandingStyles'
import homeScreenStyles from '../HomeScreenStyles'
const HomeScreenHeader = ({navigation}) => {
    return (
      <View style={[brandingStyles.homeHeader,homeScreenStyles.header]}>
      <View style={homeScreenStyles.leftHeader}>
      
       <Text style={homeScreenStyles.storeName}> Shoe Collections</Text>
     
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

  export default HomeScreenHeader;