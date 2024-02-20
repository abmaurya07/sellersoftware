import {createAsyncThunk} from '@reduxjs/toolkit';
import {wooAPI} from '../../api/api';

export const fetchTopSellerProducts = createAsyncThunk(
  'products/fetchTopSellerProducts',
  async (_, {getState}) => {
        // Access the current state to get the languageId
        const state = getState();
        const languageId = state.appConfig.languageCode;
        const currencyId = state.appConfig.currencyCode;
    const response = await wooAPI.get('products/', {
        lang: languageId,
        currency: currencyId,
        status: 'publish'
    })
    return response.data;
  },
);

export const fetchFeaturedProducts = createAsyncThunk(
  'products/fetchFeaturedProducts',
  async (_, {getState}) => {
        // Access the current state to get the languageId
        const state = getState();
        const languageId = state.appConfig.languageCode;
        const currencyId = state.appConfig.currencyCode;
    const response = await wooAPI.get('products/', {
        lang: languageId,
        currency: currencyId,
        status: 'publish',
        featured: true
    })      
    return response.data;
  }
)


export const fetchOnSaleProducts = createAsyncThunk(
  'products/fetchOnSaleProducts',
  async (_, {getState}) => {

        // Access the current state to get the languageId
        const state = getState();
        const languageId = state.appConfig.languageCode;
        const currencyId = state.appConfig.currencyCode;
    const response = await wooAPI.get('products/', {
        lang: languageId,
        currency: currencyId,
        status: 'publish',
        on_sale: true
    })
    return response.data;
  }
)

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (page =1, {getState}) => {
        // Access the current state to get the languageId
        const state = getState();
        const languageId = state.appConfig.languageCode;
        const currencyId = state.appConfig.currencyCode;
    console.log('state', page)

    const response = await wooAPI.get('products/', {
        lang: languageId,
        currency: currencyId,
        status: 'publish',
        page: page,
        category: ''
    })
    console.log('response', response)
    return response;
  }
) 

export const fetchRelatedProducts = createAsyncThunk(
  'products/fetchRelatedProducts',
  async (_, {getState}) => {
    // Access the current state to get the languageId
    const state = getState();
    const languageId = state.appConfig.languageCode;
    const currencyId = state.appConfig.currencyCode;
    console.log('state', state)
      const response = await wooAPI.get('products/', {
        lang: languageId,
        currency: currencyId,
        page: 1,
        per_page: 10,
        include: relatedIdsArray,
        status: 'publish'
      })
      return response.data;
  }
)

export const fetchCartRelatedProducts = createAsyncThunk(
  'products/fetchCartRelatedProducts',
  async () => {
      const response = await wooAPI.get('products/', {
        lang: languageCode,
        currency: currencyCode,
        per_page: 10,
        // include: relatedIdsArray,
        status: 'publish'
      })

      return response.data;
  }
)