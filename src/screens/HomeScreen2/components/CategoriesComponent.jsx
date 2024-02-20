import React, { useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from 'store/CategoriesData/categoryActions';
import { getCategories } from 'store/GetStateData/data';
// Stylesheets
import styles from './CategoriesStyles';

const CategoriesComponent = ({ navigation }) => {
  const dispatch = useDispatch();
  const { items, status } = useSelector(getCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  if (status === 'loading') {
    return (
      <View style={styles.centered}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (status === 'failed') {
    return (
      <View style={styles.centered}>
        <Text>Error Fetching Data</Text>
      </View>
    );
  }

  if (status === 'succeeded') {
    return (
      <View style={styles.categoryContainer}>

      <ScrollView horizontal={true}>
          {items.map((category, index) => (
            <View key={category.id} style={styles.categoryWrapper}>
              <View style={styles.categoryItem}>
                {category.image && (
                  <Image
                    source={{ uri: category.image.src }}
                    style={styles.categoryImage}
                  />
                )}
              </View>
              <Text style={styles.categoryText}>{category.name}</Text>
            </View>
          ))}
      </ScrollView>
      </View>

    );
  }

  // If none of the above, return null
  return null;
};


export default CategoriesComponent;
