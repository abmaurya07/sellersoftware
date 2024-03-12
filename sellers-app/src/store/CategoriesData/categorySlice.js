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

          const data = action.payload
           
         const categories = data.name.map((name, index) => {

          const image = 'https:' + data.image[index].replace(/["']/g, "");
            return {
              id: index,
              name, 
              image: image
            };
          });

          console.log('categories', categories)

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
