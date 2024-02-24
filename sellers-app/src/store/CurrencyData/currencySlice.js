import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './currencyActions';
import { appDarkTheme, appLightTheme, appTextStyle } from '../../Theme/Theme';

const initialState = {
    items: [],
    status: 'idle' // additional state
}

const currencySlice = createSlice({
  name: 'currency',
  initialState,

    extraReducers: builder => {
      builder
        .addCase(fetchCurrency.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchCurrency.fulfilled, (state, action) => 
        {
          // console.log('action.payload', action.payload);
          state.items = action.payload; 
          state.status = 'succeeded';
        })
        .addCase(fetchCurrency.rejected, (state, action) => {
          state.status = 'failed';
        });
    }

});



export default currencySlice.reducer;
