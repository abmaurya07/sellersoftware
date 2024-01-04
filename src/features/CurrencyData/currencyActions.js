import { createAsyncThunk } from '@reduxjs/toolkit';
import {api} from '../../api/api';



export const fetchCurrency = createAsyncThunk(
    'currency/fetchCurrency',
    async () => {
      const response = await fetch(
        `${api.url}/wp-json/api/tc_settings/app_all_currencies`,
      ).then((response) => response.json());
      console.log('response', response.data);
      return response.data;
    },
  );