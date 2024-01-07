// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function UserScreen({ navigation }) {
  return (
    <View>
      <Text>User Screen</Text>
      <Button
        title="Go to Wishllist"
        onPress={() => navigation.navigate('Wishlist')}
      />
    </View>
  );
}

export default UserScreen;


const styles = StyleSheet.create({
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
    }
})