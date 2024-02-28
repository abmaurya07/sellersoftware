import {createAsyncThunk} from '@reduxjs/toolkit';
import {wooAPI} from '../../api/api';




export const fetchAllOrders = createAsyncThunk(
  'orders/fetchAllOrders',
  async (page = 1, {getState}) => {
        // Access the current state to get the languageId
        const state = getState();
        const languageId = state.appConfig.languageCode;
        const currencyId = state.appConfig.currencyCode;
    console.log('state', page)

    const response = await wooAPI.get('orders', {
        lang: languageId,
        currency: currencyId,
        page: page,
    })
    console.log('response', response[0].line_items)
    return response;
  }
) 

