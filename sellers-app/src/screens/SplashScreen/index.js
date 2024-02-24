// SplashScreen.js
import React from 'react';
import { View, Image } from 'react-native';
import whiteLogo from 'assets/images/whiteLogo.png'
import styles from './SplashScreenStyles';
const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={whiteLogo} // Replace with client's splash image
        style={styles.logo}
      />
   
    </View>
  );
};

export default SplashScreen;
