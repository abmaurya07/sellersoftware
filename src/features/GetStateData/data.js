const getProducts = state =>  state.products.products.items
const getTopSellerProducts = state => state.products.topSellerProducts.items
const getAppSettingsFromPlugin = state => state.appSettingsFromPlugin.items.settings
const getCartProducts = (state) => state.cart.items
const getThemeStyle = state => state.appConfig.themeStyle
const getLanguage = state => state.appConfig.languageJson
const getAppinPro = state => state.appConfig.appInProduction
const getAllCategories = state => state.getCategories.categories
const getCategories = state => state.getCategories.sortCategory
const getBanners = state => state.bannersData.banners
const getfeaturedProductsArray = state => state.productsData.featuredProducts
const getonSaleProductsArray = state => state.productsData.onSaleProducts
const getCurrency = state => state.appConfig.currencyCode
const getLanguageCode = state => state.appConfig.languageCode
const getVendorsArray = state => state.vendorData.vendorsArray


export {
    getProducts,
    getTopSellerProducts,
    getAppSettingsFromPlugin,
    getCartProducts,
    
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

}