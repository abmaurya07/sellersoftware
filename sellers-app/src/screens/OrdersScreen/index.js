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
  RefreshControl,
} from 'react-native';


// Stylesheets

// Redux hooks and methods for state management
import {useDispatch, useSelector} from 'react-redux';

// Actions for fetching data from API
import {fetchAllOrders} from 'store/OrdersData/ordersActions';

// Selectors to retrieve data from Redux store
import {getOrders} from 'store/GetStateData/data';
import { FlatList } from 'react-native';
import { getProducts } from '../../store/GetStateData/data';




// Temporary imports during development


const OrderScreen = ({navigation}) => {
  const {items, status}= useSelector(getOrders);
  const [loadMore, setLoadMore] = useState(false)
  console.log('status', status)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllOrders());
  }, [dispatch]);

  const tonRefresh = () => {
    dispatch(fetchAllOrders());

  }

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('OrderDetails', {order: item})}>
      <View style={{padding: 10}}>
        <Text>Date: {item.date_created}</Text>  
        <Text>Customer: {item.billing.first_name} {item.billing.last_name}</Text>
        <Text>Order #: {item.id}</Text>
      </View>
    </TouchableOpacity>
  );
  
  
  
  
  if (status === 'loading') {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (status === 'failed') {
    return (
      <View>
                <RefreshControl
          onRefresh={tonRefresh}
        />
        <Text>Error Fetching Data</Text>
      </View>
    );
  }

  if (status === 'succeeded') {
  return (
     <FlatList
      data={items}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      refreshControl={
        <RefreshControl
          refreshing={status === 'loading'}
          onRefresh={tonRefresh}
        />
      }

    />
  );
  }
};

export default OrderScreen;
