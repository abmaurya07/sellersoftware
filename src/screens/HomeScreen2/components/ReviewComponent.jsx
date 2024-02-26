import React, { useEffect, useState } from 'react';

// React Native components for building UI
import { 
  View, 
  StyleSheet, 
  Text, 
  ScrollView, 
  Image, 
  FlatList, 
  Modal, 
  TouchableOpacity 
} from 'react-native';

// Stylesheets
import styles from './ProductsStyles'

// Redux hooks and methods for state management
import {useDispatch, useSelector} from 'react-redux';

// Actions for fetching data from API
import {fetchProducts} from 'store/ProductsData/productsActions'
// Selectors to retrieve data from Redux store
import { getProducts } from 'store/GetStateData/data';

// Component for Rendering UI
import {ProductGridComponent, ProductModalComponent} from './'
import { wooAPI } from '../../../api/api';



const ReviewComponent = ({ navigation, productId  }) => {
1//   const { items, status } = useSelector(getProducts);
const getReviews = async () => {
const response = await fetch(wooAPI.get('products/reviews',{product: productId}))

    const reviews = response.data
    setReviews(reviews)
  }
  // Dummy data for demo
  const dummy = [...items, ...items] 

  // State for Reviews

  const [reviews, setReviews] = useState([]);

  // Fetch products on initial render
  useEffect(() => {
    getReviews();
  }, [])






  // Handlers
  const handleProductPress = (product) => {
    setSelectedProduct(product);
  }

  const closeProductModal = () => {
    setSelectedProduct(null);
  }

  // Conditional rendering for loading states
  if (reviews.length === 0) {
    return (
      <View style={styles.centered}>
        <Text>No reviews!</Text>
      </View>
    );
  }

// 

  if (reviews.length > 0) {
    return (
        <>

       <Text> Reviews arrived.</Text>
      
        </>
   
    );
  }

};





export default ReviewComponent;
