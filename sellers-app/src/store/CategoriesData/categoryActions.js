import {createAsyncThunk} from '@reduxjs/toolkit';
import {wooAPI} from '../../api/api';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    // const response = await wooAPI.get('products/categories');
    const response = await fetch('https://arboglobal.net/version-test/api/1.1/wf/get_categories').then(res => res.json())



    return response.response
  },
);

// const response = [
//   {
//     _links: {collection: [Array], self: [Array]},
//     count: 0,
//     description: '',
//     display: 'default',
//     id: 102,
//     image: {
//       alt: '',
//       date_created: '2024-01-02T08:32:41',
//       date_created_gmt: '2024-01-02T08:32:41',
//       date_modified: '2024-01-02T08:32:41',
//       date_modified_gmt: '2024-01-02T08:32:41',
//       id: 7259,
//       name: 'ground_huttoni_05',
//       src: 'https://app.sellerssoftware.com/wp-content/uploads/2018/05/ground_huttoni_05.jpg',
//     },
//     menu_order: 0,
//     name: 'Casual Shoes',
//     parent: 0,
//     slug: 'casual-shoes',
//   },
//   {
//     _links: {collection: [Array], self: [Array]},
//     count: 0,
//     description: '',
//     display: 'default',
//     id: 101,
//     image: {
//       alt: '',
//       date_created: '2024-01-02T08:32:51',
//       date_created_gmt: '2024-01-02T08:32:51',
//       date_modified: '2024-01-02T08:32:51',
//       date_modified_gmt: '2024-01-02T08:32:51',
//       id: 7264,
//       name: 'ground_huttoni_01',
//       src: 'https://app.sellerssoftware.com/wp-content/uploads/2018/05/ground_huttoni_01.jpg',
//     },
//     menu_order: 0,
//     name: 'Formal Shoes',
//     parent: 0,
//     slug: 'formal-shoes',
//   },
//   {
//     _links: {collection: [Array], self: [Array]},
//     count: 0,
//     description: '',
//     display: 'default',
//     id: 100,
//     image: {
//       alt: '',
//       date_created: '2024-01-02T08:54:39',
//       date_created_gmt: '2024-01-02T08:54:39',
//       date_modified: '2024-01-02T08:54:39',
//       date_modified_gmt: '2024-01-02T08:54:39',
//       id: 7302,
//       name: 'ground_idaho_03',
//       src: 'https://app.sellerssoftware.com/wp-content/uploads/2018/05/ground_idaho_03.jpg',
//     },
//     menu_order: 0,
//     name: 'Shoes',
//     parent: 0,
//     slug: 'shoes',
//   },
//   {
//     _links: {collection: [Array], self: [Array]},
//     count: 0,
//     description: '',
//     display: 'default',
//     id: 103,
//     image: {
//       alt: '',
//       date_created: '2022-01-21T23:28:22',
//       date_created_gmt: '2022-01-21T23:28:22',
//       date_modified: '2024-01-01T13:13:19',
//       date_modified_gmt: '2024-01-01T13:13:19',
//       id: 6974,
//       name: '',
//       src: 'https://app.sellerssoftware.com/wp-content/uploads/2022/01/product_01.jpg',
//     },
//     menu_order: 0,
//     name: 'Sport Shoes',
//     parent: 0,
//     slug: 'sport-shoes',
//   },
//   {
//     _links: {collection: [Array], self: [Array]},
//     count: 10,
//     description: '',
//     display: 'default',
//     id: 15,
//     image: null,
//     menu_order: 0,
//     name: 'Uncategorized',
//     parent: 0,
//     slug: 'uncategorized',
//   },
// ];

