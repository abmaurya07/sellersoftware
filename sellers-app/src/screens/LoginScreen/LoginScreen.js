// LoginScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
// Redux hooks and methods for state management
import {useDispatch, useSelector} from 'react-redux';

// Actions for fetching data from API
import {signIn} from 'store/UserData/userActions'


// Selectors to retrieve data from Redux store
import { getUser } from 'store/GetStateData/data';

const LoginScreen = () => {
  const [username, setUsername] = useState(''); 
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

  const {data, sessionId, status} = useSelector(getUser);

  const handleLogin = () => {
    dispatch(signIn(username, password));
  };

  

  return (
    <View>
      <TextInput 
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />

      <Text>Session Id: {sessionId}</Text>
    </View>
  );
}

export default LoginScreen
