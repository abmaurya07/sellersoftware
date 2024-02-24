import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import {fetchProducts} from 'store/ProductsData/productsActions'
import { getProducts } from 'store/GetStateData/data';
import { useDispatch, useSelector } from 'react-redux';
import ProductLists from './ProductsComponent';

// Stylesheets
import styles from './TabsStyles';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('products');
 const {items, status} = useSelector(getProducts)

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <Tab title="Products" active={activeTab === 'products'} onPress={() => setActiveTab('products')} />
        <Tab title="Deals" active={activeTab === 'deals'} onPress={() => setActiveTab('deals')} />
        <Tab title="Wishlist" active={activeTab === 'wishlist'} onPress={() => setActiveTab('wishlist')} />
      </View>
      <ScrollView style={styles.contentContainer}>
        {activeTab === 'products' && <ProductLists />}
        {activeTab === 'deals' && <Text>Current deals and offers...</Text>}
        {activeTab === 'wishlist' && <Text>Items in your wishlist...</Text>}
      </ScrollView>
    </View>
  );
};

const Tab = ({ title, active, onPress }) => (
  <TouchableOpacity style={[styles.tab, active && styles.activeTab]} onPress={onPress}>
    <Text style={[styles.tabText, active && styles.activeTabText]}>{title}</Text>
  </TouchableOpacity>
);



export default TabsComponent;
