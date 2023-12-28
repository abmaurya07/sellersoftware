// src/store.js

import { configureStore } from '@reduxjs/toolkit';

import postsReducer from './features/posts/postsSlice';
import bannerReducer from './features/BannerData/bannerSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    banners: bannerReducer
  }
});


