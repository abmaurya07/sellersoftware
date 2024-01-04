// Import Redux Persist and AsyncStorage
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Import your reducers
import { configureStore } from '@reduxjs/toolkit';
import bannerReducer from './features/BannerData/bannerSlice';
import appConfigReducer from './features/appConfig/appConfigSlice';
import categoryReducer from './features/CategoriesData/categorySlice';
import productReducer from './features/ProductsData/productsSlice';
import currencyReducer from './features/CurrencyData/currencySlice';
import userReducer from './features/UserData/userSlice';
import appSettingsFromPluginReducer from './features/AppSettingsFromPlugin/appSettingsFromPluginSlice';
// Create a persist config for the reducers
const bannersPersistConfig = {
  key: 'banners',
  storage: AsyncStorage,
  whitelist: ['banners'], // only persist the banners state
};

const appConfigPersistConfig = {
  key: 'appConfig',
  storage: AsyncStorage,
  whitelist: [
    'themeStyle',
    'appTextStyle',
    'appDarkTheme',
    'appLightTheme',
    'isDarkMode',
    'showIntro', 'languageCode', 'currencyCode', 'decimals', 'currencyPos',
    'currencySymbol', 'languageJson'], // will be persisted
}

const categoryPersistConfig = {
  key: 'categories',
  storage: AsyncStorage,
  blacklist: ['categories', 'sortCategory'] // Will not be persisted
}

const productPersistConfig = {
  key: 'products',
  storage: AsyncStorage,
  blacklist: [
    'products', 'relatedProducts', 'cartRelatedProducts',
    'topSellerProducts', 'featuredProducts', 'onSaleProducts']  // Will not be persisted
}

const currencyPersistConfig = {
  key: 'currency',
  storage: AsyncStorage,
  whitelist: ['items']
}

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  blacklist: ['sessionId']
}

const appSettingsFromPluginConfig = {
  key: 'appSettingsFromPlugin',
  storage: AsyncStorage,
  whitelist: ['items']
}



// Create a persisted reducer 
const persistedBannerReducer = persistReducer(
  bannersPersistConfig,
  bannerReducer
);

const persistedAppConfigReducer = persistReducer(
  appConfigPersistConfig,
  appConfigReducer
)

const persistedCategoryReducer = persistReducer(
  categoryPersistConfig,
  categoryReducer
)

const persistedProductReducer = persistReducer(
  productPersistConfig,
  productReducer
)

const persistedCurrencyReducer = persistReducer(
  currencyPersistConfig,
  currencyReducer
)

const persistedUserReducer = persistReducer(
  userPersistConfig,
  userReducer
)

const persistedAppSettingsFromPluginReducer = persistReducer(
  
  appSettingsFromPluginConfig,
  appSettingsFromPluginReducer
)


const store = configureStore({
  reducer: {
    banners: persistedBannerReducer,
    appConfig: persistedAppConfigReducer,
    categories: persistedCategoryReducer,
    products: persistedProductReducer,
    currency: persistedCurrencyReducer,
    user: persistedUserReducer,
    appSettingsFromPlugin: persistedAppSettingsFromPluginReducer
  }
});
// Create a persistor using the store
const persistor = persistStore(store);
// Export the store and the persistor
export { store, persistor };



