import firebase from 'firebase/app';
import "firebase/firestore";
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCHAjE4DLC7JAiyBeFKh_BAC5DhpPRll78",
    authDomain: "fullstack-shopping-app.firebaseapp.com",
    projectId: "fullstack-shopping-app",
    storageBucket: "fullstack-shopping-app.appspot.com",
    messagingSenderId: "159867409612",
    appId: "1:159867409612:web:f41400ca08de4f7ab39e69",
    measurementId: "G-2FXMQF1J6W"
};
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();