import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories } from './categoryActions';
import { appDarkTheme, appLightTheme, appTextStyle } from '../../Theme/Theme';

const initialState = {
    items: [],
    sortCategory: []
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
          state.items = action.payload;
          for (const value of action.payload) {
            value.name = removeHtmlEntites(value.name)
    
            if (value.parent === 0) { state.sortCategory.push(value) }
          }
          state.status = 'succeeded';
        })
        .addCase(fetchCategories.rejected, (state, action) => {
          state.status = 'failed';
        });
    }

});



export default categorySlice.reducer;
