import React from 'react'
import styles, {WIDTH} from './BannerStyles'
const Banner = () => {
  const { width: windowWidth } = Dimensions.get('window');

  return (
    <View style={{ marginTop: 10 }}>
     
          <View>
            {props.settings.banner_style === '1' ? (
              <View style={[styles.container, {
                margin: 0,
                height: Dimensions.get('window').height * 0.21,
                flex: 1
              }]}>
                <SwiperFlatList
                  autoplay={theme.autoplay}
                  autoplayDelay={theme.autoplayDelay}
                  autoplayLoop={theme.autoplayLoop}
                  index={0}
                  showPagination
                  paginationDefaultColor={'rgba(0,0,0,0.2)'}
                  paginationActiveColor={props.themeStyle.primaryBackground}
                  paginationStyleItem={styles.bannerOnePagination}>
                  {bannersRender([styles.imageStyle, {
                    height: Dimensions.get('window').height * 0.21,
                    borderRadius: appTextStyle.customRadius - 4
                  }])}
                </SwiperFlatList>
              </View>
            ) : null}
            {props.settings.banner_style === '2' ? (
              <View style={[styles.container, { height: Dimensions.get('window').height * 0.2, flex: 1 }]}>
                <SwiperFlatList
                  autoplay={theme.autoplay}
                  autoplayDelay={theme.autoplayDelay}
                  autoplayLoop={theme.autoplayLoop}
                  index={0}
                  showPagination
                  paginationDefaultColor={'rgba(0,0,0,0.2)'}
                  paginationActiveColor={props.themeStyle.primaryBackground}
                  paginationStyleItem={styles.bannerTwoPagination}>
                  {bannersRender([styles.imageStyle, {
                    height: Dimensions.get('window').height * 0.2,
                    borderRadius: appTextStyle.customRadius - 4
                  }])}
                </SwiperFlatList>
              </View>
            ) : null}
            {/* ///////////////////////////////////// */}
            {props.settings.banner_style === '3' ? (
              <View style={[styles.container, {
                height: Dimensions.get('window').height * 0.24,
                width: WIDTH,
                flex: 1
              }]}>
                <SwiperFlatList
                  autoplay={theme.autoplay}
                  autoplayDelay={theme.autoplayDelay}
                  autoplayLoop={theme.autoplayLoop}
                  index={0}
                  showPagination
                  paginationDefaultColor={'rgba(0,0,0,0.2)'}
                  paginationActiveColor={this.props.themeStyle.primaryBackground}
                  paginationStyleItem={styles.bannerTwoPagination}>
                  {this.bannersRender([styles.imageStyle, {
                    height: Dimensions.get('window').height * 0.24,
                    borderRadius: appTextStyle.customRadius - 4,
                    width: WIDTH
                  }])}
                </SwiperFlatList>
              </View>
              // <View style={(styles.container, { marginBottom: 26, flex: 1 })}>
              //   <SwiperFlatList
              //     autoplay={theme.autoplay}
              //     autoplayDelay={theme.autoplayDelay}
              //     autoplayLoop={theme.autoplayLoop}
              //     index={0}
              //     showPagination
              //     paginationActiveColor={this.props.themeStyle.primaryBackground}
              //     paginationDefaultColor={'rgba(0,0,0,0.2)'}
              //     paginationStyleItem={styles.bannerThreePaginationItem}
              //     paginationStyle={styles.bannerThreePagination}>
              //     {this.bannersRender([styles.imageStyle, {
              //       height: Dimensions.get('window').height * 0.23
              //     }])}
              //   </SwiperFlatList>
              // </View>
            ) : null}
            {props.settings.banner_style === '4' ? (
              <View style={styles.container}>
                <SwiperFlatList
                  autoplay={theme.autoplay}
                  autoplayDelay={theme.autoplayDelay}
                  autoplayLoop={theme.autoplayLoop}
                  paginationActiveColor={props.themeStyle.primaryBackground}
                  paginationDefaultColor={'rgba(0,0,0,0.2)'}
                  index={0}
                  showPagination
                  paginationStyleItem={styles.bannerFourPaginationItem}
                  paginationStyle={styles.bannerFourPagination}>
                  {bannersRender([styles.imageStyle, {
                    height: Dimensions.get('window').height * 0.23
                  }])}
                </SwiperFlatList>
              </View>
            ) : null}
          </View>
      
      </View>
  )
}

export default Banner