import React, {useEffect, useState} from 'react';

// React Native components for building UI
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
  useColorScheme,
  StatusBar,
} from 'react-native';

// Stylesheets
import brandingStyles from 'clientBrandingStyles';
import homeScreenStyles from './HomeScreenStyles';

// Redux hooks and methods for state management
import {useDispatch, useSelector} from 'react-redux';

// Actions for fetching data from API
import {fetchCategories} from '../../features/CategoriesData/categoryActions';

// Selectors to retrieve data from Redux store
import {getCategories} from '../../features/GetStateData/data';

// Components for rendering UI
import {HomeScreenHeader, Banner} from './components';

// Temporary imports during development
import Logo from 'assets/images/Logo.png';

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const Categories = useSelector(getCategories);
  const [imgSrc, setImgSrc] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    setTimeout(() => setImgSrc(Logo), 2000);
  }, [dispatch]);

  const total = [1,2]
  console.log('Categories --->', Categories.status);

  return (
    <View style={[homeScreenStyles.container, brandingStyles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={brandingStyles.homeHeader.backgroundColor}
      />
      <HomeScreenHeader />

        <Banner imgSrc={imgSrc} />
    
   

      <Text>Abhishek</Text>
    </View>
  );
};

export default HomeScreen;
