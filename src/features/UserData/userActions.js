import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, wooAPI} from '../../api/api';

export const signIn = createAsyncThunk(
  'user/signIn',
  async ({emailId, password}, {getState}) => {

      // Access the current state to get the languageId
      const state = getState();
      const languageId = state.appConfig.languageCode;
      const currencyId = state.appConfig.currencyCode;
    const response = await fetch(
      `${api.url}/wp-json/api/tc_user/generate_cookie/?insecure=cool`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: emailId,
          password: password,
        }),
      },
    );

    const data = await response.json();

    const userId = data.user.id;

    const res = await wooAPI.get(`customers/${userId}`, {
      lang: languageId,
      currency: currencyId,
    });

    return {
      res: res.data,
      cookie: data.cookie,
    };
  },
);


export const signUp = createAsyncThunk(
  'user/signUp',
  async ({
    firstName,
    lastName,
    username,
    emailId,
    password,
  }, {getState}) => {

  

      // Access the current state to get the languageId
      const state = getState();
      const languageId = state.appConfig.languageCode;
      const currencyId = state.appConfig.currencyCode;
      const signUpData = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      display_name: firstName + ' ' + lastName,
      email: emailId,
      password: password,
      lang: languageId,
      currency: currencyId,
      wpgdprc: 1,
      register: 'Register'

    }
    const signUpResponse = await fetch(
      `${api.url}/wp-json/api/tc_user/register/?insecure=cool`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpData),
      },
    );

    const signUpResponseData = await signUpResponse.json();

    const response = await fetch(
        `${api.url}/wp-json/api/tc_user/generate_cookie/?insecure=cool`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: emailId,
            password: password,
          }),
        },
      );
  
      const data = await response.json();
  
      const userId = data.user.id;
  
      const res = await wooAPI.get(`customers/${userId}`, {
        lang: languageId,
        currency: currencyId,
      });
  
      return {
        res: res.data,
        cookie: data.cookie,
      };




  }
)



export const signOut = () => {
  return {
    type: 'user/signOut'
  }
}


