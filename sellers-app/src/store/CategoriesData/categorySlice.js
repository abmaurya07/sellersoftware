import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './categoryActions';
import { appDarkTheme, appLightTheme, appTextStyle } from '../../Theme/Theme';
import { removeHtmlEntities } from '../../utils/removeHtmlEntities';

const initialState = {
    items: [],
    status: 'idle',
  }

const categorySlice = createSlice({
  name: 'categories',
  initialState,

    extraReducers: builder => {
      builder
        .addCase(fetchCategories.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchCategories.fulfilled, (state, action) => 
        {
           console.log('is it fulfilled?', action.payload)
           const categories = action.payload
           .filter(category => category.name !== 'Uncategorized') // Filter out 'Uncategorized'
           .map(category => ({
             id: category.id,
             name: category.name,
             image: category.image,
           }));
         
          console.log('Categories-> ', categories)
    
          state.status = 'succeeded';
          state.items = categories
        })
        .addCase(fetchCategories.rejected, (state, action) => {
          console.log('is it rejected?')

          console.log('action', action)
          state.status = 'failed';
        });
    }

});



export default categorySlice.reducer;
