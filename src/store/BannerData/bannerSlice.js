import { createSlice } from '@reduxjs/toolkit';
import { fetchBanners } from './bannersActions';
import { appDarkTheme, appLightTheme, appTextStyle } from '../../Theme/Theme';

const initialState = {
    items: [],
    status: 'idle' // additional state
}

const bannersSlice = createSlice({
  name: 'banners',
  initialState,

    extraReducers: builder => {
      builder
        .addCase(fetchBanners.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchBanners.fulfilled, (state, action) => 
        {
          // console.log('action.payload', action.payload);
          state.items = action.payload;
          state.status = 'succeeded';
        })
        .addCase(fetchBanners.rejected, (state, action) => {
          console.log('Banner Fetching API Error : ', action.error);
          state.status = 'failed';
        });
    }

});



export default bannersSlice.reducer;
