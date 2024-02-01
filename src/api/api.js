import WooCommerceAPI from 'react-native-woocommerce-api'
export const api = {
    url: 'https://app.sellerssoftware.com', // your site URL do net add slash at the end of the url
    consumerKey: 'ck_85bd81afb869bf7736e69c352776b40b3a263aa1', // Your consumer secret
    consumerSecret: 'cs_ed4e39f8a54dd98d4b18bd4cd864b169825393d5', // Your consumer secret
}

export const wooAPI = new WooCommerceAPI({
    url: `${api.url.startsWith('https')
      ? api.url
      : api.url.replace('http', 'https')}`,
    ssl: true,
    consumerKey: api.consumerKey, // Your consumer secret
    consumerSecret: api.consumerSecret, // Your consumer secret
    wp_api: true,
    version: 'wc/v3', // WooCommerce WP REST API version
    queryStringAuth: true
  })
