import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts } from './postsActions';
const initialState = {
  items: [],
  status: 'idle' // additional state
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,

    extraReducers: builder => {
      builder
        .addCase(fetchPosts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
          state.items = action.payload;
          state.status = 'succeeded';
        })
        .addCase(fetchPosts.rejected, (state, action) => {
          state.status = 'failed';
        });
    }

});



export default postsSlice.reducer;
