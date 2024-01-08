import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, Button, useColorScheme, StatusBar } from 'react-native';
import brandingStyles from 'clientBrandingStyles'
import homeScreenStyles from './HomeScreenStyles'
import HomeScreenHeader from './components/HomeScreenHeader'

const HomeScreen = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    
    <View style={[homeScreenStyles.container, brandingStyles.container]}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor={brandingStyles.homeHeader.backgroundColor} />
      <HomeScreenHeader />

      <Text>Abhishek</Text>
    </View>
  );
};

export default HomeScreen;

