import {createAsyncThunk} from '@reduxjs/toolkit';
import {wooAPI} from '../../api/api';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const response = await wooAPI.get('products/categories', {
      lang: 'en',
      currency: 'INR',
      page: 1,
      per_page: 50,
      status: 'publish'
    })
    return response.data;
  },
);