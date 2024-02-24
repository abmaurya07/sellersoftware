// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function CartScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.title}>Cart Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
      }
});


