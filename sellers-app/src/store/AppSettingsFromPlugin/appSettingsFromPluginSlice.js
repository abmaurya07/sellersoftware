import { createSlice } from '@reduxjs/toolkit';
import { fetchAppSettingsFromPlugin } from './appSettingsFromPluginActions';
import themeStyle, { appDarkTheme, appLightTheme, appTextStyle } from '../../Theme/Theme';

const initialState = {
    items: {
        settings: {},
        newProductDuration: themeStyle.newProductDuration,
        aboutUs: '',
        refundPolicy: '',
        termServices: '',
        privacyPolicy: ''
    },
    status: 'idle' // additional state
}

const appSettingsFromPluginSlice = createSlice({
  name: 'appSettingsFromPlugin',
  initialState,

    extraReducers: builder => {
      builder
        .addCase(fetchAppSettingsFromPlugin.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchAppSettingsFromPlugin.fulfilled, (state, action) => 
        {
          // console.log('action.payload', action.payload);
          state.items = action.payload;
          state.newProductDuration = action.payload.new_product_duration;
          state.status = 'succeeded';
        })
        .addCase(fetchAppSettingsFromPlugin.rejected, (state, action) => {
          state.status = 'failed';
        });
    }

});



export default appSettingsFromPluginSlice.reducer;
