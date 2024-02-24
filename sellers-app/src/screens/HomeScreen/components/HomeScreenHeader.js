
import React from 'react';
import { View, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from 'assets/images/FavIcon.png'
import brandingStyles from 'clientBrandingStyles'
import homeScreenStyles from '../HomeScreenStyles'
const HomeScreenHeader = () => {
    return (
      <View style={[brandingStyles.homeHeader,homeScreenStyles.header]}>
      <View style={homeScreenStyles.leftHeader}>
        <TouchableOpacity onPress={() => console.log('Menu clicked')}>
          <Icon name="menu-outline" size={30} style={[homeScreenStyles.icon, brandingStyles.homeIcon]} />
        </TouchableOpacity>
       
        <Image
          source={Logo} // Replace with your logo image path
          style={homeScreenStyles.logo}
        />
     
      </View>
      <View style={homeScreenStyles.rightHeader}>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Icon name="search-outline" size={20} style={[homeScreenStyles.icon, brandingStyles.homeIcon]} />
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