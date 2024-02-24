import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

//StyleSheets
import styles from './StoreDetailsStyles'
const StoreDetailsComponent = ({ profileImageUrl, followersCount, bio }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <Image source={{ uri: profileImageUrl }} style={styles.profileImage} />
        <View style={styles.statsContainer}>
          <Text style={styles.statsCount}>{followersCount}</Text>
          <Text style={styles.statsLabel}>Followers</Text>
        </View>
      </View>
      <Text style={styles.bio}>{bio}</Text>
    </View>
  );
};



export default StoreDetailsComponent;
