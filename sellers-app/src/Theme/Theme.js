import { Dimensions } from 'react-native'
const WIDTH = Dimensions.get('window').width
// set card width according to your requirement
const cardWidth = WIDTH * 0.3991
export default {
  /// /////////////////////////////



  // please reset app cache after changing these five values

  defaultCurrencySymbol: '₹',
  currencyCode: 'INR',
  priceDecimals: 2,
  // by default language for ltr
  ltrlanguageCode: 'en',
  // by default language for rtl
  rtllanguageCode: 'ar',

  yourVendorUserNameString: '',
  yourVendorPasswordString: '',

  oneSignalAppIdForAndroid: '286029f0-bb19-4f78-8931-6bfedd1417ae',
  webClientIdForGoogleSign: '53449655792-vgqpr4lnruns91m1psanhuei28klg8kj.apps.googleusercontent.com',
  /// //// navigation
  newProductDuration: 20,
  languageCode: 'EN',
  homeTitle: 'Octus Store',
  perPageNumber: 10,

  // Banners props
  autoplay: true,
  autoplayDelay: 2,
  autoplayLoop: true,
  appInProduction: false,

  /// //////// cartWidth
  singleRowCardWidth: cardWidth,
  twoRowCardWIdth: 0.465,
  barStyle: 'light-content' // dark-content, default
}

export const appTextStyle = {
  smallSize: 11,
  mediumSize: 12,
  largeSize: 14,
  customRadius: 19,
  fontFamily: 'Montserrat-Regular',
  isDarkMode: false
}

export const appConfigStyle = { // dont change its value on run time
  cardsColor: false,
  settingsPageColor: false,
  headerMenuImage: false,
  headerSearchBar: false,
  introStyle: 1,
  headerColor: true,
  bottomNavText: false
}
export const appLightTheme = {
  StatusBarColor: '#0478ed',
  barStyle: 'light-content',
  primary: '#0478ed',
  secondry: '#ffc854',
  primaryLight: '#f1f3f2',
  primaryBackgroundColor: '#ffffff',
  secondryBackgroundColor: '#f1f1f1', // backgroundcolor black
  textColor: '#444444',
  cardTextColor: appConfigStyle.cardsColor ? '#000000' : '#444444',
  textTintColor: '#ffffff',
  iconPrimaryColor: '#9ba5a7',
  iconSecondryColor: '#000000'
}
export const appDarkTheme = {
  StatusBarColor: '#0478ed',
  barStyle: 'light-content',
  primary: '#0478ed',
  primaryLight: '#f1f3f2',
  secondry: '#ffc854',
  cardTextColor: appConfigStyle.cardsColor ? '#000000' : '#ffffff',
  primaryBackgroundColor: '#252525', //
  secondryBackgroundColor: '#252525', // backgroundcolor white
  textColor: '#ffffff',
  textTintColor: '#ffffff',
  iconPrimaryColor: '#9ba5a7',
  iconSecondryColor: '#ffffff'
}
