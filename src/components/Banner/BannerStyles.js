import { StyleSheet, Dimensions } from "react-native"

export const WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: Dimensions.get('window').height * 0.23,
      width: WIDTH * 0.92,
      alignSelf: 'center',
      backgroundColor: 'transparent'
    },
    imageStyle: {
      //  width: PixelRatio.getPixelSizeForLayoutSize(197),
      height: Dimensions.get('window').height * 0.23,
      width: WIDTH * 0.921,
      borderRadius: appTextStyle.customRadius - 7
    },
    loaderTitleStyle: {
      height: 190,
      width: WIDTH * 0.94,
      alignSelf: 'center',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10
    },
    bannerOnePagination: {
      width: 8,
      height: 8,
      marginLeft: 3,
      marginRight: 3,
      marginBottom: -5
    },
    bannerTwoPagination: {
      width: 15,
      borderRadius: 5 / 2,
      height: 7,
      marginLeft: 3,
      marginRight: 3,
      marginBottom: -5
    },
    bannerThreePaginationItem: {
      width: 8,
      height: 8,
      margin: 1,
      marginLeft: 3,
      marginRight: 3
    },
    bannerThreePagination: { flexDirection: 'row', marginBottom: -20 },
    bannerFourPaginationItem: { width: 6, height: 15, margin: 2 },
    bannerFourPagination: {
      flexDirection: 'column-reverse',
      width: 15,
      right: 5,
      top: 22
    }
  })

  export default styles