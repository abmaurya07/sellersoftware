import { createSlice } from '@reduxjs/toolkit';
import { appDarkTheme, appLightTheme, appTextStyle } from '../../Theme/Theme';

const initialState = {
   
    items: [],
    quantity: 0,
    coupons: [],
    subtotal: 0,
    discount: 0,
    shipping: 0,
    tax: 0,
    total: 0
    
  }

const cartSlice = createSlice({
  name: 'cart',
  initialState,

});



export default cartSlice.reducer;
