// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function WishlistScreen({ navigation }) {
  return (
    <View>
      <Text>Wishlist Screen</Text>
      <Button
        title="Go to User"
        onPress={() => navigation.navigate('User')}
      />
    </View>
  );
}

export default WishlistScreen;
