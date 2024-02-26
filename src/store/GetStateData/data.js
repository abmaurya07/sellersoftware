const getProducts = state =>  state.products.products
const getTopSellerProducts = state => state.products.topSellerProducts.items
const getStoreDetails = state => state.appConfig
const getAppSettingsFromPlugin = state => state.appSettingsFromPlugin.items.settings
const getCartProducts = (state) => state.cart.items
const getBanners = state => state.banners
const getThemeStyle = state => state.appConfig.themeStyle
const getLanguage = state => state.appConfig.languageJson
const getAppinPro = state => state.appConfig.appInProduction
const getAllCategories = state => state.getCategories.categories
const getCategories = state => state.categories
const getfeaturedProductsArray = state => state.productsData.featuredProducts
const getonSaleProductsArray = state => state.productsData.onSaleProducts
const getCurrency = state => state.appConfig.currencyCode
const getCurrencySymbol = state => state.appConfig.currencySymbol
const getLanguageCode = state => state.appConfig.languageCode
const getVendorsArray = state => state.vendorData.vendorsArray


export {
    getProducts,
    getTopSellerProducts,
    getAppSettingsFromPlugin,
    getCartProducts,
    getCurrencySymbol,
    getThemeStyle,
    getLanguage,
    getAppinPro,
    getAllCategories,
    getCategories,
    getBanners,
    getfeaturedProductsArray,
    getonSaleProductsArray,
    getCurrency,
    getLanguageCode,
    getVendorsArray,
    getStoreDetails

}