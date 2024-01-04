import React from 'react'
import { View } from 'react-native'

const HomeScreen = () => {
  return (
    <View>
    <Text>Home Screen</Text>
    <Button
      title="Go to Category"
      onPress={() => navigation.navigate('Category')}
    />
  </View>
  )
}

export default HomeScreen