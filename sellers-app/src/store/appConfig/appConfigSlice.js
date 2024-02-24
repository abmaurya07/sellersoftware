import { createSlice } from '@reduxjs/toolkit';
import themeStyle, { appDarkTheme, appLightTheme, appTextStyle } from '../../Theme/Theme';
import { getLanguage } from '../../Languages/Languages';
import { I18nManager } from 'react-native';

const initialState = {
    storeName: 'Shoe Collection', 
    counter: 0,
    isloading: true,
    themeStyle: appTextStyle.isDarkMode ? appDarkTheme : appLightTheme,
    appTextStyle: appTextStyle,
    appDarkTheme: appDarkTheme,
    appLightTheme: appLightTheme,
    isDarkMode: appTextStyle.isDarkMode,
    showIntro: true,
    languageJson: getLanguage(themeStyle.languageCode),
    appInProduction: themeStyle.appInProduction,
    currencyPos: I18nManager.isRTL ? 'right' : 'left',
    languageDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
    languageCode: I18nManager.isRTL ? themeStyle.rtllanguageCode : themeStyle.ltrlanguageCode,
    currency: themeStyle.defaultCurrency,
    currencyCode: themeStyle.currencyCode,
    currencySymbol: themeStyle.defaultCurrencySymbol,
    decimals: themeStyle.priceDecimals,
    cartProducts: null
  }

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,



});



export default appConfigSlice.reducer;
