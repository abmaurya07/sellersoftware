import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function CategoryScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.title}>Category Screen</Text>
      <Button
        title="Go to User"
        onPress={() => navigation.navigate('User')}
      />
    </View>
  );
}

export default CategoryScreen;

const styles = StyleSheet.create({
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
    }
});