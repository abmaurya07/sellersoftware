import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Button, useColorScheme, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Logo from '../assets/images/FavIcon.png'
import brandingStyles from '../Theme/ClientBrandingStyles'
import homeScreenStyles from './HomeScreenStyles'
const HomeScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';
console.log('DAAAAAAAAAAAAAAAAARKKKKKKKKKKKKKKKKKKKKKKKKKKKKK MODEEEEEEEEEEEEEEEEEEE+_______________________------------------>',isDarkMode)
  return (
    
    <View style={[homeScreenStyles.container, brandingStyles.container]}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor={brandingStyles.homeHeader.backgroundColor} />
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
      <View style={homeScreenStyles.searchContainer}>
        <TextInput
          placeholder="Search for t-shirts..."
          style={homeScreenStyles.searchInput}
        />
        <TouchableOpacity onPress={() => console.log('Search')}>
          <Icon name="search" size={25} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={homeScreenStyles.title}>Home Screen</Text>
      <Button
        title="Go to Category"
        onPress={() => navigation.navigate('Category')}
      />
    </View>
  );
};

export default HomeScreen;

