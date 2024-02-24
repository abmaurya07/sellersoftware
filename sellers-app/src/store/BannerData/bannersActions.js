import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../api/api';

//--------------#1-----------------------

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

// ----------------#2-------------------
// export const fetchBanners = createAsyncThunk(
//   'banners/fetchBanners',
//   async () => {
//     try {
//       const response = await fetch(`${api.url}/wp-json/api/tc_settings/app_all_banners`);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const contentType = response.headers.get('content-type');
//       if (!contentType || !contentType.includes('application/json')) {
//         throw new TypeError('Received non-JSON response');
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error('Error fetching banners:', error);
//       // Handle the error appropriately
//       throw error;
//     }
//   },
// );
