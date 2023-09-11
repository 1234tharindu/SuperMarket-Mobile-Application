/* eslint-disable prettier/prettier */
import * as React from 'react';
// import Root from '../app/Root';
import App from '../Root'
import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';

if (!firebase.app.length){
    firebase.initializeApp();

}
export{firebase,Auth};

function SetUp(){
    return<App/>
}
export default SetUp;