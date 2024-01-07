// SplashScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from '../assets/images/Logo.png'
import whiteLogo from '../assets/images/whiteLogo.png'

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={whiteLogo} // Replace with client's splash image
        style={styles.logo}
      />
      {/* <Text style={styles.title}>Welcome to My App</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Change this with client's preferred background color
  },
  logo: {
    width: '100%',
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default SplashScreen;
