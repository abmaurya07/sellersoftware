import { createSlice } from '@reduxjs/toolkit';
import { 
  fetchAllOrders
} from './ordersActions';

const initialState = {
 
    items: [],
    status: 'idle',


}

const orderSlice = createSlice({
  name: 'orders',
  initialState,

    extraReducers: builder => {
      builder
        .addCase(fetchAllOrders.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchAllOrders.fulfilled, (state, action) => {
         
          const Orders = action.payload
        
         console.log('Products-> ', Orders)
   
         state.status = 'succeeded';
         state.items = [...state.items, ...Orders]
        })
        .addCase(fetchAllOrders.rejected, (state, action) => {
          state.status = 'failed';
        })
    }

});



export default orderSlice.reducer;
