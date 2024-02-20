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
import homeScreenStyles from './HomeScreenStyles';
import brandingStyles from 'clientBrandingStyles';

// Redux hooks and methods for state management
import {useDispatch, useSelector} from 'react-redux';

// Actions for fetching data from API
import {fetchCategories} from 'store/CategoriesData/categoryActions';

// Selectors to retrieve data from Redux store
import {getCategories} from 'store/GetStateData/data';

// Components for rendering UI
import 
{
  HomeScreenHeader,
  Banner
} from './components';

// Temporary imports during development
import Logo from 'assets/images/Logo.png';
// import TearCarousel from '../../components/Carousels/Tear';

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const Categories = useSelector(getCategories);
  const [imgSrc, setImgSrc] = useState(Logo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    setTimeout(() => setImgSrc(Logo), 2000);
  }, [dispatch]);

  const total = [1,2]
  // console.log('Categories --->', Categories.status);

  return (
    <View style={[homeScreenStyles.container, brandingStyles.container]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={brandingStyles.homeHeader.backgroundColor}
      />
      <HomeScreenHeader />

        <Banner imgSrc={imgSrc} />
    
    {/* <TearCarousel /> */}

      <Text>Abhishek</Text>
    </View>
  );
};

export default HomeScreen;
