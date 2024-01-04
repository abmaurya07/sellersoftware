import { Dimensions, I18nManager, Platform, StyleSheet } from "react-native";

import themeStyle, { appDarkTheme, appLightTheme, appTextStyle } from '../../Theme/Theme';

export const WIDTH = Dimensions.get('window').width

export const styles = StyleSheet.create({
    loaderContainer: {
      height: Platform.OS === 'android'
        ? 260
        : 230,
      shadowOffset: { width: 1, height: 1 },
      shadowColor: '#000',
      shadowOpacity: 0.5,
      elevation: 3,
      margin: 5
    },
    titleStyle: {
      alignSelf: 'center',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 0,
      borderWidth: 0,
      flex: 1,
      height: 130
    },
    paragraphStyles: {
      paddingTop: 7,
      padding: 6,
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    separatorStyle: {
      height: 1, width: '100%', backgroundColor: '#ddd'
    },
    footerStyle: {
      marginTop: 20,
      paddingBottom: 20,
      alignItems: 'center',
      alignSelf: 'center',
      alignContent: 'center'
    },
    categoryTypeStyle: {
      padding: 10,
      alignSelf: 'flex-start'
    },
    iconTextStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 18,
      alignSelf: 'center'
    },
    activityIndicatorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    demoPanalContainer: {
      zIndex: 5,
      position: 'absolute',
      left: 20,
      bottom: 70,
      alignItems: 'center',
      height: 55,
      width: 55,
      borderRadius: 55 / 2,
      alignSelf: 'center',
      justifyContent: 'center',
      elevation: 10
    },
    demoPanal: {
      paddingTop: Platform.OS === 'ios' ? 2 : 0,
      fontSize: 22
    },
    fabStyle: {
      zIndex: 5,
      position: 'absolute',
      right: 0,
      bottom: 0,
      marginRight: 25,
      marginBottom: 70
    },
    fabView: {
      alignItems: 'center',
      height: 48,
      width: 48,
      borderRadius: 400,
      alignSelf: 'center',
      justifyContent: 'center'
    },
    fabIcon: {
      paddingTop: Platform.OS === 'ios' ? 2 : 0,
      fontSize: 22
    },
    headerListStyle: {
      marginBottom: 5
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginBottom: 16
    },
    singleBanner: {
      width: WIDTH * 0.95,
      height: 200,
      marginTop: 0,
      marginBottom: 5,
      alignSelf: 'center'
    },
    noProductView: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      marginBottom: 30,
      alignSelf: 'center'
    },
  
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    orderCardContainer: {
      flexDirection: 'row',
      width: WIDTH,
      justifyContent: 'space-between',
      padding: 10
    },
    rowData: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'center'
    },
    totalPriceView: {
      width: WIDTH,
      justifyContent: 'flex-end',
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 12
    },
    policyView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 38,
      paddingBottom: 38,
      width: WIDTH * 0.7
    },
    tabInnerContainer: {
      justifyContent: 'center', alignItems: 'center'
    },
    textInputContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      borderBottomWidth: 1
    },
    validationText: {
      marginTop: 5,
      color: 'red',
      fontSize: appTextStyle.mediumSize,
      alignSelf: 'center'
    },
    googleView: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    tabContainer: {
      justifyContent: 'space-around',
      width: '100%',
      flexDirection: 'row',
      marginVertical: 18
    },
    tabText: {
      // borderBottomWidth: 2,
      paddingBottom: 5,
      borderRadius: 12,
      paddingHorizontal: 20,
      paddingTop: 4,
      alignItems: 'center',
      justifyContent: 'center'
  
    },
    containerTextinput: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1
    },
    commentAvatar: {
      height: 45,
      width: 45,
      borderRadius: appTextStyle.customRadius - 13,
      overflow: 'hidden'
    },
    socialIcon: {
      color: '#ffffff'
    },
    textInputStyle: {
      height: 38,
      width: WIDTH * 0.9,
      textAlign: I18nManager.isRTL ? 'right' : 'left',
      paddingHorizontal: 6,
      fontSize: appTextStyle.mediumSize + 1
    },
    signBtnView: {
      marginTop: 8,
      alignItems: 'center',
      height: 38,
      width: WIDTH * 0.9,
      justifyContent: 'center',
      borderRadius: appTextStyle.customRadius - 15
    },
    screenContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    screenInnerContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    socialLoginRow: {
      flexDirection: 'row',
      width: WIDTH,
      justifyContent: 'space-evenly',
      marginBottom: 5
    },
    textInputIcon: {
      paddingHorizontal: 10,
      paddingLeft: 29,
      marginBottom: Platform.OS === 'android' ? 5 : 0
    },
    containerDevi: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '10%',
      marginBottom: '10%',
      width: '60%',
      alignSelf: 'center'
    },
    googleIcon: {
      color: '#dd4b39',
      fontSize: 40
    },
    forgotView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    forgotRow: {
      justifyContent: 'space-between',
      width: WIDTH,
      padding: Platform.OS === 'android' ? 16 : 19,
      paddingTop: 15,
      flexDirection: 'row',
      alignItems: 'center'
    },
    backIconView: {
      padding: 10,
      alignSelf: 'flex-start'
    },
    backIconStyle: {
      alignSelf: 'flex-start'
    },
    signUpView: {
      marginTop: 18,
      alignItems: 'center',
      height: 38,
      borderRadius: appTextStyle.customRadius - 15,
      justifyContent: 'center'
    },
    childContainerView: {
      flex: 1,
      height: 1
    },
    deviderText: {
      marginHorizontal: 12,
      textAlign: 'center'
    }
  })
  