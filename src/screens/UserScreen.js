// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function UserScreen({ navigation }) {
  return (
    <View>
      <Text>User Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default UserScreen;
