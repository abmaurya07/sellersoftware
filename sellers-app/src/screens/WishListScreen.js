// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function WishlistScreen({ navigation }) {
  return (
    <View>
      <Text styles= {styles.title}>Wishlist Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default WishlistScreen;

const styles = StyleSheet.create({  
  title: {
      fontSize: 24, 
      fontWeight: 'bold',
      color: '#000',
  }
})