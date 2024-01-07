import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const HomeScreen = ({navigation}) => {
  return (
    <View>
    <Text styles={styles.title}>Home Screen</Text>
    <Button
      title="Go to Category"
      onPress={() => navigation.navigate('Category')}
    />
  </View>
  )
}

export default HomeScreen


const styles = StyleSheet.create({
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
    }
});