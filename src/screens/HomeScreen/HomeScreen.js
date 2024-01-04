import React, { Component, useState } from 'react'
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Platform,
  PixelRatio,
  StyleSheet,
  I18nManager,
  Linking
} from 'react-native'
import { createSelector } from 'reselect'
import {
  getProducts,
  CLEAR_PRODUCTS,
  getOneProduct,
  colorFun
} from '../../redux/actions/actions'
import SearchHeader from '../../common/SearchHeader'
import { UIActivityIndicator } from 'react-native-indicators'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Spinner from 'react-native-loading-spinner-overlay'
import Header from '../../common/HeaderCustom'
import { connect } from 'react-redux'
import CardTem from '../../common/CardTemplate'
import { Icon } from 'native-base'
import Loader from 'react-native-easy-content-loader'
import Banner from '../../common/Banner'
import ImageLoad from '../../common/RnImagePlaceH'
import FlatListView from '../../common/FlatListView'
import theme, { appTextStyle } from '../../common/Theme.style'
const WIDTH = Dimensions.get('window').width
const Home =  (props) => {
  const navigationOptions = () => ({
    headerShown: false
  })


  const [refreshing, setRefreshing] = useState(false)
  const [fabB, setFabB] = useState(false)
  const [selected, setSelected] = useState('')
  const [timeValue, setTimeValue] = useState(400)
  const [selectedTab, setSelectedTab] = useState('1')
  const [productView, setProductView] = useState('grid')
  const [loading, setLoading] = useState(false)
  const [activityIndicatorContainer, setActivityIndicatorContainer] = useState(true)
  const [spinnerTemp, setSpinnerTemp] = useState(false)
  const [page, setPage] = useState(1)
  const [productColorCounter, setProductColorCounter] = useState(0)



  handleOpenURL = event => {
    // D
    if (event.url !== '' && event.url !== undefined && event.url !== null) {
      const route = event.url.replace(/.*?:\/\//g, '')
      const id = route.match(/\/([^/]+)\/?$/)[1]
      if (id !== '' && id !== undefined && id !== null) {
        this.setState({ spinnerTemp: true }, () => {
          this.props.getOneProductsFun(this.props, this, id)
        })
      }
    }
  }

  navigate = json => {
    // E
    if (json !== '' && json !== undefined && json !== null) {
      Linking.removeEventListener('url', this.handleOpenURL)
      this.props.navigation.navigate('ProductDetails', { objectArray: json })
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ activityIndicatorTemp: false })
    }, 1000)
    this.props.navigation.setParams({
      headerTitle: this.props.language.Home
    })
    if (Platform.OS === 'android') {
      const NativeLinking = require('react-native/Libraries/Linking/NativeLinking')
        .default
      NativeLinking.getInitialURL().then(url => {
        if (url !== '' && url !== undefined && url !== null) {
          const route = url.replace(/.*?:\/\//g, '')
          const id = route.match(/\/([^/]+)\/?$/)[1]
          if (id !== '' && id !== undefined && id !== null) {
            this.setState({ spinnerTemp: true }, () => {
              this.props.getOneProductsFun(this.props, this, id)
            })
          }
        }
      })
    } else {
      this.dimensionsSubscription = Linking.addEventListener('url', this.handleOpenURL)
    }
  }

  componentWillUnmount () {
    clearInterval(this.state.activityIndicatorTemp)
    if (this.dimensionsSubscription !== undefined) { this.dimensionsSubscription.remove() }
  }

  const renderItem = (item, index) =>
    <View>
      <Loader
        secondaryColor='rgba(208, 205, 205, 1)'
        primaryColor='rgba(218, 215, 215, 1)'
        animationDuration={this.state.timeValue}
        active
        loading={this.state.loading}
        containerStyles={[styles.loaderContainer, {
          backgroundColor: this.props.themeStyle.secondryBackgroundColor,
          width: WIDTH * theme.twoRowCardWIdth
        }]}
        pRows={3}
        pWidth={['100%', '100%', '80%']}
        pHeight={30}
        titleStyles={[styles.titleStyle, {
          width: WIDTH * theme.twoRowCardWIdth
        }]}
        paragraphStyles={styles.paragraphStyles}>
        <CardTem
          backgroundColor={colorFun(this, item.index)}
          objectArray={item.item}
          rows={this.props.vertical}
          recent={this.state.recent}
          width={WIDTH * theme.twoRowCardWIdth}
        />
      </Loader>
    </View>
  // )

  const renderSeparator = () => (
    <View style={styles.separatorStyle} />
  )

  const noProductFun = () => (
    <View
      style={styles.noProductView}>
      <Icon
        name={'logo-dropbox'}
        style={{ color: 'gray', fontSize: 80 }}
      />
      <Text
        style={{
          fontSize: appTextStyle.largeSize + 2,
          fontFamily: appTextStyle.fontFamily,
          color: this.props.themeStyle.textColor
        }}>
        {
          this.props.language[
            'No Products Found'
          ]
        }
      </Text>
    </View>
  )

  const handleLoadMore = ()  =>{
    if (this.props.products.length % 10 === 0) {
      this.setState(
        {
          refreshing: true,
          fabB: this.props.products.length > 9
        },
        () => {
          this.state.page++
          this.props.getProductsFun(this.props, this.state.page)
        }
      )
    } else {
      this.setState({
        refreshing: false
      })
    }
  }

  const renderFooter = () => (
    <View
      style={[styles.footerStyle, {
        marginBottom: this.state.refreshing ? 50 : 10
      }]}>
      {this.state.refreshing ? (
        <View
          style={{
            height: 1
          }}>
          <UIActivityIndicator
            size={27}
            count={12}
            color={this.props.themeStyle.primary}
          />
        </View>
      ) : null}
    </View>
  )

  const onEndReached = () => {
    this.handleLoadMore()
    this.onEndReachedCalledDuringMomentum = true
    // }
  }

  const handleScroll (event) {
    if (
      this.state.fabB &&
      event.nativeEvent.contentOffset.y >= 0 &&
      event.nativeEvent.contentOffset.y < 300
    ) {
      this.setState({ fabB: false })
    }
  }

  const categoryHeading = ({text, brand}) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text
          style={[styles.categoryTypeStyle, {
            fontSize: appTextStyle.largeSize + 2,
            fontFamily: appTextStyle.fontFamily,
            color: this.props.themeStyle.textColor,
            fontWeight: 'bold'
          }]}>
          {text}
        </Text>
        {brand !== ''
          ? <TouchableOpacity onPress={() => this.props.navigation.navigate('NewestScreen', {
            id: '',
            name: '',
            brand: brand
          })}>
            <Text
              style={[styles.categoryTypeStyle, {
                fontSize: appTextStyle.smallSize,
                fontFamily: appTextStyle.fontFamily,
                color: this.props.themeStyle.primary
              }]}>
              {this.props.language['View All']}
            </Text>
          </TouchableOpacity>
          : null }
      </View>

    )
  }

  const iconTextFun = ({iconName, text}) => (
    <View
      style={styles.iconTextStyle}>
      <FontAwesome
        name={iconName}
        style={{
          color: this.props.themeStyle.iconPrimaryColor,
          transform: [{ rotateY: '180deg' }],
          fontSize: appTextStyle.largeSize +
            PixelRatio.getPixelSizeForLayoutSize(6)
        }}
      />
      <Text
        style={{
          fontSize: appTextStyle.smallSize - 1,
          color: this.props.themeStyle.textColor,
          fontFamily: appTextStyle.fontFamily,
          paddingTop: 5
        }}>
        {
          text
        }
      </Text>
    </View>
  )

  render () {
    if (this.props.products.length > 0) {
      this.state.loading = false
      this.state.timeValue = 400
      if (this.props.products.length % 10 === 0) {
        this.state.refreshing = true
      } else {
        this.state.refreshing = false
      }
    } else {
      this.state.loading = true
      this.state.timeValue = 400
      this.state.refreshing = false
    }

    return this.state.activityIndicatorTemp ? (
      <View
        style={[styles.activityIndicatorContainer, {
          backgroundColor: this.props.themeStyle.secondryBackgroundColor
        }]}>
        <UIActivityIndicator
          size={27}
          color={this.props.themeStyle.primary}
        />
      </View>
    ) : (
      // return
      <View
        style={{
          backgroundColor: this.props.themeStyle.secondryBackgroundColor
        }}>
        <Spinner visible={this.state.spinnerTemp} />
        <Header menuIcon={true} cartIcon={true} navigation={this.props.navigation} name={theme.homeTitle}/>

        {this.props.appInProduction ? (
          <TouchableOpacity
            style={[styles.demoPanalContainer, {
              backgroundColor: this.props.themeStyle.primary
            }]}
            onPress={() => {
              this.props.navigation.navigate('DemoScreen')
            }}>

            <Icon
              name={'md-settings'}
              style={[styles.demoPanal, {
                color: this.props.themeStyle.textTintColor
              }]}
            />

          </TouchableOpacity>
        ) : null}

        {this.state.fabB ? (
          <TouchableOpacity
            style={styles.fabStyle}
            onPress={() => {
              this.flatListRef.scrollToOffset({
                animated: true,
                offset: 0,
                useNativeDriver: true
              }, {
                useNativeDriver: true
              })
              this.setState({ fabB: false })
            }}>
            <View
              style={[styles.fabView, {
                backgroundColor: this.props.themeStyle.primary
              }]}>
              <Icon
                name={'md-arrow-up'}
                style={[styles.fabIcon, {
                  color: this.props.themeStyle.textTintColor
                }]}
              />
            </View>
          </TouchableOpacity>
        ) : null}

        <FlatList
          showsVerticalScrollIndicator={false}
          windowSize={50}
          initialNumToRender={6}
          removeClippedSubviews={true}
          legacyImplementation={true}
          maxToRenderPerBatch={10}
          updateCellsBatchingPeriod={10}

          data={
            this.props.products !== undefined &&
              this.props.products !== null &&
              this.props.products.length > 0
              ? this.props.products
              : ['', '', '', '']
          }
          key={this.state.productView}
          numColumns={2}
          ref={ref => {
            this.flatListRef = ref
          }}
          ListFooterComponent={() => this.renderFooter()}
          keyExtractor={(item, index) => index.toString()}
          columnWrapperStyle={{
            paddingLeft: WIDTH * 0.01
          }}
          contentContainerStyle={{
            backgroundColor: this.props.themeStyle.secondryBackgroundColor
          }}
          extraData={this.state}
          renderItem={this.renderItem}
          ListHeaderComponent={
            <View style={styles.headerListStyle}>
              <View
                style={{
                  backgroundColor: this.props.themeStyle.secondryBackgroundColor,
                  marginBottom: 6
                }}>
                <SearchHeader
                  notEditable={true}
                  addSearchData={this.props.addSearchData}
                  onSearchPress={this.onSearchPress} getProducts={this.getProducts} removeSearchState={this.removeSearchState} setSearchState={this.setSearchState} searchString={this.state.searchString} language={this.props.language} navigation={this.props.navigation} />

                <Banner
                  navigation={this.props.navigation}
                />

                <View style={[styles.tabContainer, {
                }]}>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ selectedTab: '1' })
                    }}
                    style={[styles.tabText, {
                      backgroundColor: this.state.selectedTab === '1' ? this.props.themeStyle.primary : this.props.themeStyle.primaryBackgroundColor
                    }]}>
                    <Text style={{
                      fontSize: appTextStyle.largeSize,
                      fontFamily: appTextStyle.fontFamily,
                      paddingVertical: 6,
                      color: this.state.selectedTab === '1' ? this.props.themeStyle.textTintColor : this.props.themeStyle.textColor
                    }}>{this.props.language['Top Seller']}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ selectedTab: '2' })
                    }}
                    style={[styles.tabText, {
                      backgroundColor: this.state.selectedTab === '2' ? this.props.themeStyle.primary : this.props.themeStyle.primaryBackgroundColor
                    }]}>
                    <Text style={{
                      fontSize: appTextStyle.largeSize,
                      fontFamily: appTextStyle.fontFamily,
                      paddingVertical: 6,
                      color: this.state.selectedTab === '2' ? this.props.themeStyle.textTintColor : this.props.themeStyle.textColor
                    }}>{this.props.language['On Sale']}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      this.setState({ selectedTab: '3' })
                    }}
                    style={[styles.tabText, {
                      backgroundColor: this.state.selectedTab === '3' ? this.props.themeStyle.primary : this.props.themeStyle.primaryBackgroundColor
                    }]}>
                    <Text style={{
                      fontSize: appTextStyle.largeSize,
                      paddingVertical: 6,
                      fontFamily: appTextStyle.fontFamily,
                      color: this.state.selectedTab === '3' ? this.props.themeStyle.textTintColor : this.props.themeStyle.textColor
                    }}>{this.props.language.Featured}</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={styles.screenContainer}>
                  {this.state.selectedTab === '1'
                    ? <View style={styles.screenInnerContainer}>
                      {this.props.topsellerProducts !== undefined ? (
                        <FlatListView
                          vertical={true}
                          noOfCol={1}
                          dataName={'topSelling'}
                          viewButton={true}
                          navigation={this.props.navigation}
                          cardStyle={this.props.settings.home_style}
                          tabArray={
                            this.props.topsellerProducts !== undefined &&
                      this.props.topsellerProducts !== null
                              ? this.props.topsellerProducts
                              : []
                          }
                        />
                      ) : (
                        this.noProductFun()
                      )}
                    </View>
                    : this.state.selectedTab === '3'
                      ? <View style={styles.tabInnerContainer}>

                        {this.props.featuredProducts !== undefined ? (
                          <FlatListView
                            vertical={true}
                            noOfCol={1}
                            dataName={'topSelling'}
                            viewButton={true}
                            navigation={this.props.navigation}
                            cardStyle={this.props.settings.home_style}
                            tabArray={
                              this.props.featuredProducts !== undefined &&
                      this.props.featuredProducts !== null
                                ? this.props.featuredProducts
                                : []
                            }
                          />
                        ) : (
                          this.noProductFun()
                        )}
                      </View>
                      : <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                        {this.props.onSaleProducts !== undefined ? (
                          <FlatListView
                            vertical={true}
                            noOfCol={1}
                            dataName={'topSelling'}
                            viewButton={true}
                            navigation={this.props.navigation}
                            cardStyle={this.props.settings.home_style}
                            tabArray={
                              this.props.onSaleProducts !== undefined &&
                      this.props.onSaleProducts !== null
                                ? this.props.onSaleProducts
                                : []
                            }
                          />
                        ) : (
                          this.noProductFun()
                        )}
                      </View>}

                </View>

              </View>

              {this.categoryHeading(
                this.props.language['On Sale'], 'topSelling')}
              {this.props.onSaleProducts !== undefined ? (
                <FlatListView
                  vertical={true}
                  noOfCol={1}
                  dataName={'topSelling'}
                  viewButton={true}
                  navigation={this.props.navigation}
                  cardStyle={this.props.settings.card_style}
                  tabArray={
                    this.props.onSaleProducts !== undefined &&
                      this.props.onSaleProducts !== null
                      ? this.props.onSaleProducts
                      : []
                  }
                />
              ) : (
                this.noProductFun()
              )}

              {this.props.getVendors.data !== undefined &&
                this.props.getVendors.isData ? (
                  <View>
                    {this.categoryHeading(
                      this.props.language['FEATURED VENDORS']
                    )}
                    <FlatListView
                      vertical={true}
                      noOfCol={1}
                      dataName={'Vendors'}
                      viewButton={false}
                      navigation={this.props.navigation}
                      cardStyle={'118'}
                      tabArray={
                        this.props.getVendors !== undefined &&
                      this.props.getVendors !== null
                          ? this.props.getVendors.data
                          : []
                      }
                    />
                  </View>
                ) : (
                  null
                )}
              {this.props.getVendors.data === undefined &&
                this.props.getVendors.isData === true ? <View>
                  {this.categoryHeading(
                    this.props.language['FEATURED VENDORS']
                  )}
                  <View
                    style={[styles.activityIndicatorContainer, {
                      backgroundColor: this.props.themeStyle.secondryBackgroundColor
                    }]}>
                    <UIActivityIndicator
                      size={27}
                      color={this.props.themeStyle.primary}
                    />
                  </View>
                </View> : null
              }
              {this.categoryHeading(
                this.props.language['YEARS END SALE']
              )}

              {
                this.props.banners !== undefined ? (
                  this.props.banners.length > 0 ? (
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.push('NewestScreen', { id: '' })
                      }}>
                      <ImageLoad
                        style={styles.singleBanner}
                        loadingStyle={{
                          size: 'large',
                          color: this.props.themeStyle.primary
                        }}
                        source={{
                          uri: this.props.banners[this.props.banners.length - 1].banners_image !== undefined
                            ? this.props.banners[this.props.banners.length - 1].banners_image.toString().startsWith('https')
                              ? this.props.banners[this.props.banners.length - 1].banners_image.toString()
                              : this.props.banners[this.props.banners.length - 1].banners_image.toString().replace('http', 'https')
                            : ''
                        }}
                      />
                    </TouchableOpacity>
                  ) : null
                ) : null
              }
              {this.categoryHeading(
                this.props.language['JUST FOR YOU'], '')}
            </View>
          }
          onScroll={this.handleScroll.bind(this)}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.5}
          onMomentumScrollBegin={() => {
            this.onEndReachedCalledDuringMomentum = false
          }}
        />
      </View>
    )
  }
}

// //////////////////////
const mapDispatchToProps = dispatch => ({
  getOneProductsFun: (props, th, id) => {
    dispatch(async dispatch => {
      await getOneProduct(dispatch, props.settings.language_id, props.settings.currency_id, id, th)
    })
  },
  getProductsFun: (props, page) => {
    dispatch(async dispatch => {
      await getProducts(dispatch, props.languageCode, props.currencyCode, page, '')
    })
  },
  clearProducts: () => {
    dispatch({
      type: CLEAR_PRODUCTS
    })
  }
})
/// ///////////////////////////////////////////////
const getTheme = (state) => state.appConfig.themeStyle
const getLanguage = (state) => state.appConfig.languageJson
const getAppinPro = (state) => state.appConfig.appInProduction
const getAllCategories = (state) => state.getCategories.categories

const getCategories = (state) => state.getCategories.sortCategory
const getBanners = (state) => state.bannersData.banners
const getSettings = (state) => state.settingsCall.settings
const getproductsArray = (state) => state.productsData.products
const gettopsellerProductsArray = (state) => state.productsData.topsellerProducts
const getfeaturedProductsArray = (state) => state.productsData.featuredProducts
const getonSaleProductsArray = (state) => state.productsData.onSaleProducts
const getCurrency = (state) => state.appConfig.currencyCode
const getLanguageCode = (state) => state.appConfig.languageCode
const getVendorsArray = (state) => state.vendorData.vendorsArray

const getAllCategoriesFun = createSelector(
  [getAllCategories],
  (getAllCategories) => {
    return getAllCategories
  }
)
const getVendorsArrayFun = createSelector(
  [getVendorsArray],
  (getVendorsArray) => {
    return getVendorsArray
  }
)
const getCurrencyFun = createSelector(
  [getCurrency],
  (getCurrency) => {
    return getCurrency
  }
)
const getLanguageCodeFun = createSelector(
  [getLanguageCode],
  (getLanguageCode) => {
    return getLanguageCode
  }
)
const gettopsellerProductsArrayFun = createSelector(
  [gettopsellerProductsArray],
  (gettopsellerProductsArray) => {
    return gettopsellerProductsArray
  }
)
const getfeaturedProductsArrayFun = createSelector(
  [getfeaturedProductsArray],
  (getfeaturedProductsArray) => {
    return getfeaturedProductsArray
  }
)
const getonSaleProductsArrayFun = createSelector(
  [getonSaleProductsArray],
  (getonSaleProductsArray) => {
    return getonSaleProductsArray
  }
)

const getAppinProFun = createSelector(
  [getAppinPro],
  (getAppinPro) => {
    return getAppinPro
  }
)

const getproductsArrayFun = createSelector(
  [getproductsArray],
  (getproductsArray) => {
    return getproductsArray
  }
)

const getBannersFun = createSelector(
  [getBanners],
  (getBanners) => {
    return getBanners
  }
)

const getCategoriesFun = createSelector(
  [getCategories],
  (getCategories) => {
    return getCategories
  }
)

const getThemeFun = createSelector(
  [getTheme],
  (getTheme) => {
    return getTheme
  }
)

const getLanguageFun = createSelector(
  [getLanguage],
  (getLanguage) => {
    return getLanguage
  }
)

const getSettingsFun = createSelector(
  [getSettings],
  (getSettings) => {
    return getSettings
  }
)

const mapStateToProps = state => ({
  themeStyle: getThemeFun(state),
  language: getLanguageFun(state),
  sortCategory: getCategoriesFun(state),
  banners: getBannersFun(state),
  settings: getSettingsFun(state),
  products: getproductsArrayFun(state),
  appInProduction: getAppinProFun(state),
  getAllCategories: getAllCategoriesFun(state),

  topsellerProducts: gettopsellerProductsArrayFun(state),
  featuredProducts: getfeaturedProductsArrayFun(state),
  onSaleProducts: getonSaleProductsArrayFun(state),
  currencyCode: getCurrencyFun(state),
  getVendors: getVendorsArrayFun(state),
  languageCode: getLanguageCodeFun(state)
})

/// //////////////////////////////////////////
export default connect(mapStateToProps, mapDispatchToProps)(Newest)
/// /////////////////////////////////////////////
