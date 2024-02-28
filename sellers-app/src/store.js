// Import Redux Persist and AsyncStorage
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// Import your reducers
import { configureStore } from '@reduxjs/toolkit';
import bannerReducer from 'store/BannerData/bannerSlice';
import appConfigReducer from 'store/appConfig/appConfigSlice';
import categoryReducer from 'store/CategoriesData/categorySlice';
import productReducer from 'store/ProductsData/productsSlice';
import currencyReducer from 'store/CurrencyData/currencySlice';
import userReducer from 'store/UserData/userSlice';
import ordersReducer from 'store/OrdersData/ordersSlice';
import appSettingsFromPluginReducer from 'store/AppSettingsFromPlugin/appSettingsFromPluginSlice';

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
    'storename',
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
  whitelist: ['items'], // only persist the banners state

}

const productPersistConfig = {
  key: 'products',
  storage: AsyncStorage,
  whitelist: [
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

const ordersPersistConfig = {
  key: 'orders',
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

const persistedOrdersReducer = persistReducer(
  ordersPersistConfig,
  ordersReducer
)

const store = configureStore({
  reducer: {
    banners: persistedBannerReducer,
    appConfig: persistedAppConfigReducer,
    categories: persistedCategoryReducer,
    products: persistedProductReducer,
    currency: persistedCurrencyReducer,
    user: persistedUserReducer,
    appSettingsFromPlugin: persistedAppSettingsFromPluginReducer,
    orders: persistedOrdersReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    {
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

});
// Create a persistor using the store
const persistor = persistStore(store);
// Export the store and the persistor
export { store, persistor };



