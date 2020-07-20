import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBMdXd04qgCAHEp8Qiz1l1mXbur2v_CfEA',
  authDomain: 'poc-app-7673d.firebaseapp.com',
  databaseURL: 'https://poc-app-7673d.firebaseio.com',
  projectId: 'poc-app-7673d',
  storageBucket: 'poc-app-7673d.appspot.com',
  messagingSenderId: '920022660849',
  appId: '1:920022660849:web:cb4e557ba8e9d184eedb50',
  measurementId: 'G-WDPJF2GMQJ',
};

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firestore;
