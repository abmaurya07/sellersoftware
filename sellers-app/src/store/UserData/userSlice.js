import { createSlice } from '@reduxjs/toolkit';
import { signIn, signOut } from './userActions';
import { appDarkTheme, appLightTheme, appTextStyle } from '../../Theme/Theme';

const initialState = {
    data: {},
    sessionId: '',
    status: 'idle' // additional state
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    signOut: (state) => {
      state.data = {};
      state.sessionId = '';
  },
  },

    extraReducers: builder => {
      builder
        .addCase(signIn.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(signIn.fulfilled, (state, action) => 
        {
          // console.log('action.payload', action.payload);
          state.data = action.payload.res;
          state.sessionId= action.payload.cookie;
          state.status = 'succeeded';
        })
        .addCase(signIn.rejected, (state, action) => {
          console.log(action)
          state.status = 'failed';
        })
    }

});



export default userSlice.reducer;
