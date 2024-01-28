import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../api/api';
// console.log('api', api);
export const fetchBanners = createAsyncThunk(
  'banners/fetchBanners',
  async () => {
    console.log('fetch banner  api --->', `${api.url}/wp-json/api/tc_settings/app_all_banners`)
    const response = await fetch(
      `${api.url}/wp-json/api/tc_settings/app_all_banners`,
    ).then((response) => response.json());
    // console.log('response', response.data);
    return response.data;
  },
);
