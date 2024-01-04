import React from 'react';
import { View, Text } from 'react-native';

function CategoryScreen() {
  return (
    <View>
      <Text>Category Screen</Text>
      <Button
        title="Go to User"
        onPress={() => navigation.navigate('User')}
      />
    </View>
  );
}

export default CategoryScreen;