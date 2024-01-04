export const api = {
    url: 'https://dummy.sellerssoftware.com', // your site URL do net add slash at the end of the url
    consumerKey: 'ck_20fefc0f8af2a62466bf1113f28542b970ae976d', // Your consumer secret
    consumerSecret: 'cs_02b87a5a3335837d86d04fd53f5742515d715680', // Your consumer secret
}

export const wooAPI = new WooCommerceAPI({
    url: api.url.startsWith('https')
      ? api.url
      : api.url.replace('http', 'https'),
    ssl: true,
    consumerKey: api.consumerKey, // Your consumer secret
    consumerSecret: api.consumerSecret, // Your consumer secret
    wp_api: true,
    version: 'wc/v3', // WooCommerce WP REST API version
    queryStringAuth: true
  })
