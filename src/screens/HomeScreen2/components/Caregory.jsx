import React, { useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../features/CategoriesData/categoryActions';
import { getCategories } from '../../../features/GetStateData/data';

const CategoryComponent = ({ navigation }) => {
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
      // Set horizontal prop to true to enable horizontal scrolling
      <View>
      <ScrollView style={styles.container} horizontal={true}>
        <View style={styles.categoryContainer}>
          {items.map((category, index) => (
            <View key={category.id} style={styles.categoryItem}>
              {category.image && (
                <Image
                  source={{ uri: category.image.src }}
                  style={styles.categoryImage}
                />
              )}
              {/* <Text style={styles.categoryText}>{category.name}</Text> */}
            </View>
          ))}
        </View>
      </ScrollView>
      </View>
    );
  }

  // If none of the above, return null
  return null;
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    
  },
  categoryItem: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 1,
    margin: 10,
    borderRadius: 100,
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  categoryText: {
    textAlign: 'center',
    color: '#333',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
});

export default CategoryComponent;
