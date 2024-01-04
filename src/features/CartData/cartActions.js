import {createAsyncThunk} from '@reduxjs/toolkit';
import {wooAPI} from '../../api/api';

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async () => {
    const response = await wooAPI.get('products/categories', {
      lang: 'en',
      currency: 'INR',
      page: 1,
      per_page: 50,
      status: 'publish'
    })
    return response.data;
  },
);


// export const addToCartFun = (dispatch, product, variation, quantity, metaData, th, quantityType = null) => {
//     const p = {}
//     if (quantity === null || quantity === 'null') {
//       p.quantity = 1
//     } else {
//       p.quantity = quantity
//     };
  
//     // checking if variation is out of stock
//     if (variation != null) {
//       if (variation.stock_status === 'outofstock') {
//         Snackbar.show({
//           backgroundColor: th.props.themeStyle.primary,
//           textColor: th.props.themeStyle.textTintColor,
//           text: th.props.language['OUT OF STOCK'],
//           duration: Snackbar.LENGTH_LONG,
//           action: {
//             text: th.props.language.Close,
//             textColor: th.props.themeStyle.secondry,
//             backgroundColor: th.props.themeStyle.primary
//           }
//         })
//         th.toast.show('OUT OF STOCK')
//         return
//       }
//     }
//     if (product.stock_status === 'outofstock') {
//       th.toast.show('OUT OF STOCK')
//       Snackbar.show({
//         backgroundColor: th.props.themeStyle.primary,
//         textColor: th.props.themeStyle.textTintColor,
//         text: th.props.language['OUT OF STOCK'],
//         duration: Snackbar.LENGTH_LONG,
//         action: {
//           text: th.props.language.Close,
//           textColor: th.props.themeStyle.secondry,
//           backgroundColor: th.props.themeStyle.primary
//         }
//       })
//       return
//     }
//     if (!checkCart(product, quantity)) {
//       cartTotalItems(dispatch)
  
//       th.setState({
//         spinnerTemp: false
//       })
//       return
//     }
//     if (alreadyInCart(product, variation, quantity, quantityType)) {
//       cartTotalItems(dispatch)
//       Snackbar.show({
//         backgroundColor: th.props.themeStyle.primary,
//         textColor: th.props.themeStyle.textTintColor,
//         text: th.props.language['Already In Cart'],
//         duration: Snackbar.LENGTH_LONG,
//         action: {
//           text: th.props.language.Close,
//           textColor: th.props.themeStyle.secondry,
//           backgroundColor: th.props.themeStyle.primary
//         }
//       })
//       th.setState({
//         spinnerTemp: false
//       })
//       return
//     }
//     if (quantityType === 'quantityMinus') {
//       cartTotalItems(dispatch)
  
//       th.setState({
//         spinnerTemp: false
//       })
//       return 0
//     }
//     p.product_id = product.id
//     p.name = product.name
  
//     var seconds = new Date().getTime()
//     p.cart_id = product.id + seconds
//     if (product.images.length !== 0) {
//       p.image = product.images[0].src
//     } else {
//       p.image = ''
//     }
//     p.stock_quantity = product.stock_quantity
//     p.tax_class = product.tax_class
//     p.tax_status = product.tax_status
//     p.price = product.price
//     p.price_html = product.price_html
//     p.subtotal = parseFloat(product.price) * parseInt(p.quantity)
//     p.total = parseFloat(product.price) * parseInt(p.quantity)
//     p.on_sale = product.on_sale
//     p.categories = product.categories
  
//     if (metaData != null) p.meta_data = metaData
//     p.sold_individually = product.sold_individually
  
//     if (product.type === 'variable' && variation != null) {
//       p.variation_id = variation.id
//       p.price = parseFloat(variation.price)
//       p.subtotal = parseFloat(variation.price) * parseInt(p.quantity)
//       p.total = parseFloat(variation.price) * parseInt(p.quantity)
//       p.name = variation.name
//       p.stock_quantity = variation.stock_quantity
//       p.tax_status = variation.tax_status
  
//       try {
//         if (variation.image) p.image = variation.image.src
//         else p.image = variation.images[0].src
//       } catch (error) {
//       }
//     }
//     store.getState().cartData.cartProductsArray.push(p)
//     cartTotalItems(dispatch)
//     Snackbar.show({
//       backgroundColor: th.props.themeStyle.primary,
//       textColor: th.props.themeStyle.textTintColor,
//       text: th.props.language['Added To Card!'],
//       duration: Snackbar.LENGTH_LONG,
//       action: {
//         text: th.props.language.Close,
//         textColor: th.props.themeStyle.secondry,
//         backgroundColor: th.props.themeStyle.primary
//       }
//     })
//     th.setState({
//       spinnerTemp: false
//     })
  
//     return 1
//   }