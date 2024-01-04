import React, {  useEffect, useState } from 'react'
import NetInfo from '@react-native-community/netinfo'

import { Platform, View, Text } from 'react-native'
import ImageLoad from './src/utils/ImageLoad.js'
import { store, persistor } from './src/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import ThemeStyle, { appTextStyle } from './src/Theme/Theme'
import { NativeBaseProvider } from "native-base";
import AppNavigator from './src/Navigation/AppNavigator.js'

const ConnectedApp = () => {
  

  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NativeBaseProvider>
          <AppNavigator />
          </NativeBaseProvider>
        </PersistGate>
      </Provider>
  )
}

const NoConnection = () => {
  
  return (
    
    <View style={{ flex: 1, backgroundColor: ThemeStyle.backgroundColor }}>
      {Platform.OS === 'ios' ? (
        <View style={{ height: 36, backgroundColor: '#51688F' }} />
      ) : null}

      <View
        style={{
          flex: 1,
          backgroundColor: ThemeStyle.backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 170
        }}
      >
        <ImageLoad
          key={'key'}
          style={{ width: 200, height: 200 }}
          loadingStyle={{ size: 'large', color: ThemeStyle.primary }}
          placeholderSource={require('./src/assets/images/wifi.png')}
          placeholderStyle={{ width: 200, height: 300 }}
          source={require('./src/assets/images/wifi.png')}
        />
        <Text style={{
          fontSize: 22,
          fontFamily: appTextStyle.fontFamily
        }}>
          No internet! {'\n'}
          Please check your network settings.{'\n'}
         
        </Text>
  
      </View>
    </View>
  )
}
const App = () => {

  // Use state hook to store the connection status
  const [isConnected, setIsConnected] = useState(true);

   // Use effect hook to subscribe to the connection change event
   useEffect(() => {
    // Create a subscription object
    const subscription = NetInfo.addEventListener(state => {
      // Update the connection status
      setIsConnected(state.isConnected);
    });

    // Return a cleanup function to unsubscribe from the event
    return () => {
      subscription.remove();
    };
  }, []);



  return (
    <>
    {isConnected ? (
        <ConnectedApp />
      ) : (
        <NoConnection />
      )}
    </>


  )
        
}

export default App

