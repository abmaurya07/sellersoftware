//Actions
import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../api/api';

export const fetchAppSettingsFromPlugin = createAsyncThunk(
  'appSettingsFromPlugin/fetchAppSettingsFromPlugin',
  async () => {
    const response = await fetch(
      `${api.url}/wp-json/api/tc_settings/app_all_settings`,
    ).then((response) => response.json());
    console.log('App Settings From Plugin ->', response.data);
    return response.data;
  },
);


export const fetchAboutUsSettingDataFromPlugin = createAsyncThunk(
  'appSettingsFromPlugin/fetchAboutUsSettingDataFromPlugin',
  async (_, {getState}) => {
    const state = getState();
    const url = `${api.url}/wp-json/wp/v2/pages/`
    
     const settings = state.appSettingsFromPlugin.items.settings

     if(Object.keys(settings).length === 0) {
      await fetch(
        `${api.url}/wp-json/api/tc_settings/app_all_settings`,
      ).then((response) => response.json()).then((data) => {
        settings = data.data
     }
      )
    }

  
    if (settings.about_page_id !== undefined) {
      const ids = settings.about_page_id + ',' +
      settings.refund_page_id + ',' +
      settings.terms_page_id + ',' +
      settings.privacy_page_id

      url = url + '?include=' + ids
    }


    const response = await fetch(
      url,
    ).then((response) => response.json());
    console.log('About Us Settings From Plugin ->', response.data);
    return response.data;
  }
)
