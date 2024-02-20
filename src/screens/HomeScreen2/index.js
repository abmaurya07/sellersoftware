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
  ScrollView,
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
  HomeScreenHeaderComponent,
  Banner,
  StoreDetailsComponent,
  TabSectionComponent,
  CategoriesComponent
} from './components';

// Temporary imports during development
import Logo from 'assets/images/Logo.png';
// import TearCarousel from '../../components/Carousels/Tear';

const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';


  // console.log('Categories --->', Categories.status);

  return (
    <View style={[homeScreenStyles.container, brandingStyles.container]}>
      <ScrollView>

      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={brandingStyles.homeHeader.backgroundColor}
      />

      <HomeScreenHeaderComponent navigation={navigation} />
    <StoreDetailsComponent
           profileImageUrl="https://app.sellerssoftware.com/wp-content/uploads/2018/05/ground_idaho_03.jpg"
           followersCount="1.2M"
           bio="🌟 Aspiring influencer | 📸 Photography lover | 🌍 Travel enthusiast"
           />
     
       <CategoriesComponent />
      <TabSectionComponent />
</ ScrollView>
    </View>
  );
};

export default HomeScreen;
