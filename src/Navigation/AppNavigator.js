import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen, HomeScreen2} from 'screens'
import CategoryScreen from '../screens/CategoryScreen';
import WishListScreen from '../screens/WishListScreen';
import UserScreen from '../screens/UserScreen';
import CartScreen from '../screens/CartScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const renderTabBarIcon = (route, color) => {
    let iconSize = 24; // default icon size
    switch (route.name) {
      case 'Home':
        return <Ionicons name="home-outline" color={color} size={iconSize} />;
      case 'Categories':
        return <Ionicons name="apps-outline" color={color} size={iconSize} />;
      case 'Wishlist':
        return <Ionicons name="heart-outline" color={color} size={iconSize} />;
      case 'Me':
        return <Ionicons name="person-outline" color={color} size={iconSize} />;
      case 'Cart':
        return <Ionicons name="cart-outline" color={color} size={iconSize} />;
      default:
        return null;
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color }) => renderTabBarIcon(route, color),

          tabBarIconStyle: {marginBottom: 0},
          tabBarLabelStyle: {
            fontSize: 10, // Adjust label font size if needed
            paddingTop: 0,
          },

          tabBarItemStyle: {
            padding: 4,
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'grey',
          tabBarLabelStyle: {
            fontWeight: 'bold',
          }
        })}
>
        <Tab.Screen name="Home" component={HomeScreen2} />
        <Tab.Screen name="Categories" component={CategoryScreen} />
        <Tab.Screen name="Wishlist" component={WishListScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Me" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
