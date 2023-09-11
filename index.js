/* eslint-disable prettier/prettier */
/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './app/Root';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
