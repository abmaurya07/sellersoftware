/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
// import NewApp from './NewApp'
import SellersApp from './sellers-app/SellersApp';

AppRegistry.registerComponent(appName, () => SellersApp);
