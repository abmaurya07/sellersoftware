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



const ProductsComponent = ({ navigation }) => {
  // Use hooks for state management
  const dispatch = useDispatch();
  const { items, status } = useSelector(getProducts);
  
  // Dummy data for demo
  const dummy = [...items, ...items] 

  // State for modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch products on initial render
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])






  // Handlers
  const handleProductPress = (product) => {
    setSelectedProduct(product);
  }

  const closeProductModal = () => {
    setSelectedProduct(null);
  }

  // Conditional rendering for loading states
  if (status === 'loading') {
    return (
      <View style={styles.centered}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (status === 'failed') {
    return(
      <View style={styles.centered}>
        <Text>Error Fetching Data</Text>
      </View>
    );
  }

  if (status === 'succeeded') {
    return (
        <>
        <ProductGridComponent 
          data={dummy}
          numColumns={3} 
          onPress={handleProductPress}
        />
        <ProductModalComponent 
          product={selectedProduct}
          onClose={closeProductModal}
        />
      
      
        </>
   
    );
  }

  return null;
};





export default ProductsComponent;
