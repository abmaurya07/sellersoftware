import React from "react"

import ContentLoader, { Rect } from "react-content-loader/native"
import {View, Dimensions, StyleSheet } from "react-native"

const BannerImageSkeleton = (props) => {
    const WIDTH = Dimensions.get('window').width
    const HEIGHT = Dimensions.get('window').height 

    // console.log('WIDHT +++++++++++++____>', WIDTH)
return (

<ContentLoader 
    speed={2}
    width={'100%'}
    height={"100%"}
    backgroundColor="#292929"
    foregroundColor="#9e9e9e"
    {...props}
  >
    <Rect x="-240" y="-61" rx="2" ry="2" width="604" height="604" />
  </ContentLoader>
)
}

export default BannerImageSkeleton


const styles = StyleSheet.create({
    container: {
        height: 200,
        borderRadius: 5,  
        width: 360,
        backgroundColor:'red',
        padding: 'none'
      },
})