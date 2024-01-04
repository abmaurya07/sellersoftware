import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import WishListScreen from '../screens/WishListScreen';
import UserScreen from '../screens/UserScreen';
import ThemedIcon from '../components/ThemedIcon';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


const AppNavigator = () => {


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={ ({route}) => ({

           headerShown: false,
           tabBarIcon: ({focused, color}) => {
             if (route.name === 'Home') {
              return (<ThemedIcon iconName="home-outline" color={color} />)
             } else if (route.name === 'Category') {
               return (<ThemedIcon iconName="grid-outline" color={color} />)
             } else if (route.name === 'Wishlist') {
               return (<ThemedIcon iconName="heart-outline" color={color} />)
             } else if (route.name === 'User') {
               return (<ThemedIcon iconName="settings-outline" color={color} />)
             }

           }

        })

        }
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        
        <Tab.Screen name="Category" component={CategoryScreen} />
        <Tab.Screen name="Wishlist" component={WishListScreen} />
        <Tab.Screen name="User" component={UserScreen} />
     
      </Tab.Navigator>
      </NavigationContainer>

  )

}




// function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default AppNavigator;



