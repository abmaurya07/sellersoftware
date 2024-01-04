import { createSlice } from '@reduxjs/toolkit';
import { appDarkTheme, appLightTheme, appTextStyle } from '../../Theme/Theme';
import { 
  fetchTopSellerProducts, 
  fetchFeaturedProducts,
  fetchOnSaleProducts,
  fetchProducts,
  fetchRelatedProducts,
  fetchCartRelatedProducts
} from './productsActions';

const initialState = {
  products: {
    items: [],
    status: 'idle'
  },
  relatedProducts: {
      items: [],
      status: 'idle'
    }
  ,
  cartRelatedProducts: {
    items: [],
    status: 'idle'
  },
  topSellerProducts: {
    items: [],
    status: 'idle'
  },
  featuredProducts: {
    items: [],
    status: 'idle'
  },
  onSaleProducts: {
    items: [],
    status: 'idle'
  }

}

const productSlice = createSlice({
  name: 'products',
  initialState,

    extraReducers: builder => {
      builder
        .addCase(fetchTopSellerProducts.pending, (state) => {
          state.topSellerProducts.status = 'loading';
        })
        .addCase(fetchTopSellerProducts.fulfilled, (state, action) => 
        {
          action.payload.forEach(element => {
            state.topSellerProducts.items = [...state.topSellerProducts.items, element]
          })
          state.topSellerProducts.status = 'succeeded';
        })
        .addCase(fetchTopSellerProducts.rejected, (state, action) => {
          state.topSellerProducts.status = 'failed';
        })
        .addCase(fetchFeaturedProducts.pending, (state) => {
          state.featuredProducts.status = 'loading';
        })
        .addCase(fetchFeaturedProducts.fulfilled, (state, action) => 
        {
          action.payload.forEach(element => {
            state.featuredProducts.items = [...state.featuredProducts.items, element]
          })
          state.featuredProducts.status = 'succeeded';
        })
        .addCase(fetchFeaturedProducts.rejected, (state, action) => {
          state.featuredProducts.status = 'failed';
        })
        .addCase(fetchOnSaleProducts.pending, (state) => { 
          state.onSaleProducts.status = 'loading';
        })
        .addCase(fetchOnSaleProducts.fulfilled, (state, action) => {
          action.payload.forEach(element => {
            state.onSaleProducts.items = [...state.onSaleProducts.items, element]
          })
          state.onSaleProducts.status = 'succeeded';
        })
        .addCase(fetchOnSaleProducts.rejected, (state, action) => {
          state.onSaleProducts.status = 'failed';
        })
        .addCase(fetchProducts.pending, (state) => {
          state.products.status = 'loading';
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          action.payload.forEach(element => {
            state.products.items = [...state.products.items, element]
          })
          state.products.status = 'succeeded';
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.products.status = 'failed';
        })
        .addCase(fetchRelatedProducts.pending, (state) => {
          state.relatedProducts.status = 'loading';
        })
        .addCase(fetchRelatedProducts.fulfilled, (state, action) => {
          action.payload.forEach(element => {
            state.relatedProducts.items = [...state.relatedProducts.items, element]
          })
          state.relatedProducts.status = 'succeeded';
        })
        .addCase(fetchRelatedProducts.rejected, (state, action) => {
          state.relatedProducts.status = 'failed';
        })
        .addCase(fetchCartRelatedProducts.pending, (state) => {
          state.cartRelatedProducts.status = 'loading';
        })
        .addCase(fetchCartRelatedProducts.fulfilled, (state, action) => {
          action.payload.forEach(element => {
            state.cartRelatedProducts.items = [...state.cartRelatedProducts.items, element]
          })
          state.cartRelatedProducts.status = 'succeeded';
        })
        .addCase(fetchCartRelatedProducts.rejected, (state, action) => {
          state.cartRelatedProducts.status = 'failed';
        })




    }

});



export default productSlice.reducer;
