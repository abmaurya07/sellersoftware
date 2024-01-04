import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ThemedIcon =( {
  iconName, 
  color
} )=> {

  

  return (
    <View>
      <Ionicons
        name={iconName}
        style={{ color: color, fontSize: 20 }}
      />
    </View>
  );
};

export default ThemedIcon;