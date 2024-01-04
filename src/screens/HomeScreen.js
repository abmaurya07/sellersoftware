// HomeScreen.js
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import theme, { appDarkTheme, appLightTheme, appTextStyle } from '../Theme/Theme';
import {styles, WIDTH} from './HomeScreen/HomeScreenStyles'

import ThemedIcon from '../components/ThemedIcon';
import  IoniIcons from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';

import {fetchTopSellerProducts} from '../features/ProductsData/productsActions'

//State Data Fething Functions

import {
  getProducts,
  getThemeStyle,
  getLanguage,
  getTopSellerProducts
} from '../features/GetStateData/data'
const HomeScreen = ({ navigation }) => {
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



  const products = useSelector(getProducts)  
  const themeStyle = useSelector(getThemeStyle)
  const language = useSelector(getLanguage)
  const topSellerProducts = useSelector(getTopSellerProducts)

  
  console.log('products', products)

  
  const dispatch = useDispatch()


  useEffect(() => {
    console.log('run')
    dispatch(fetchTopSellerProducts)
  }, [dispatch])



  //Refs

  const flatListRef = useRef(null);

  return (
    
      <View
        style={{
          backgroundColor: themeStyle.secondryBackgroundColor
        }}>
        {/* <Spinner visible={spinnerTemp} /> */}
        {/* <Header menuIcon={true} cartIcon={true} navigation={navigation} name={theme.homeTitle}/> */}



        {fabB ? (
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
               setFabB(false )
            }}>
            <View
              style={[styles.fabView, {
                backgroundColor: themeStyle.primary
              }]}>
              <Icon
                name={'md-arrow-up'}
                style={[styles.fabIcon, {
                  color: themeStyle.textTintColor
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
            products !== undefined &&
              products !== null &&
              products.length > 0
              ? products
              : ['', '', '', '']
          }
          key={productView}
          numColumns={2}
          ref= {flatListRef}
          // ListFooterComponent={() => this.renderFooter()}
          keyExtractor={(item, index) => index.toString()}
          columnWrapperStyle={{
            paddingLeft: WIDTH * 0.01
          }}
          contentContainerStyle={{
            backgroundColor: themeStyle.secondryBackgroundColor
          }}
          extraData={this.state}
          renderItem={this.renderItem}
          ListHeaderComponent={
            <View style={styles.headerListStyle}>
              <View
                style={{
                  backgroundColor: themeStyle.secondryBackgroundColor,
                  marginBottom: 6
                }}>
                {/* <SearchHeader
                  notEditable={true}
                  addSearchData={this.props.addSearchData}
                  onSearchPress={this.onSearchPress} getProducts={this.getProducts} removeSearchState={this.removeSearchState} setSearchState={this.setSearchState} searchString={searchString} language={this.props.language} navigation={this.props.navigation} />

                <Banner
                  navigation={this.props.navigation}
                />
 */}
                <View style={[styles.tabContainer, {
                }]}>
                  <TouchableOpacity
                    onPress={() => {
                       setSelectedTab('1')
                    }}
                    style={[styles.tabText, {
                      backgroundColor: selectedTab === '1' ? themeStyle.primary : themeStyle.primaryBackgroundColor
                    }]}>
                    <Text style={{
                      fontSize: appTextStyle.largeSize,
                      fontFamily: appTextStyle.fontFamily,
                      paddingVertical: 6,
                      color: selectedTab === '1' ? themeStyle.textTintColor : themeStyle.textColor
                    }}>{language['Top Seller']}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                     setSelectedTab('2')
                    }}
                    style={[styles.tabText, {
                      backgroundColor: selectedTab === '2' ? themeStyle.primary : themeStyle.primaryBackgroundColor
                    }]}>
                    <Text style={{
                      fontSize: appTextStyle.largeSize,
                      fontFamily: appTextStyle.fontFamily,
                      paddingVertical: 6,
                      color: selectedTab === '2' ? themeStyle.textTintColor : themeStyle.textColor
                    }}>{language['On Sale']}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      setSelectedTab('/3') 
                    }}
                    style={[styles.tabText, {
                      backgroundColor: selectedTab === '3' ? themeStyle.primary : themeStyle.primaryBackgroundColor
                    }]}>
                    <Text style={{
                      fontSize: appTextStyle.largeSize,
                      paddingVertical: 6,
                      fontFamily: appTextStyle.fontFamily,
                      color: selectedTab === '3' ? themeStyle.textTintColor : themeStyle.textColor
                    }}>{language['Featured']}</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={styles.screenContainer}>
                  {selectedTab === '1'
                    ? <View style={styles.screenInnerContainer}>
                      {topSellerProducts !== undefined ? (
                        <FlatListView
                          vertical={true}
                          noOfCol={1}
                          dataName={'topSelling'}
                          viewButton={true}
                          navigation={this.props.navigation}
                          cardStyle={this.props.settings.home_style}
                          tabArray={
                            topSellerProducts !== undefined &&
                      topSellerProducts !== null
                              ? topSellerProducts
                              : []
                          }
                        />
                      ) : (
                        this.noProductFun()
                      )}
                    </View>
                    : selectedTab === '3'
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
                      backgroundColor: themeStyle.secondryBackgroundColor
                    }]}>
                    <UIActivityIndicator
                      size={27}
                      color={themeStyle.primary}
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
                          color: themeStyle.primary
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

export default HomeScreen;
