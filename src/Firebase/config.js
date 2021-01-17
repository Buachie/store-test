import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBgKyFYOwrWzUtAqPtmGCCPd-kpSuq8kgk",
    authDomain: "fir-te-27baf.firebaseapp.com",
    projectId: "fir-te-27baf",
    storageBucket: "fir-te-27baf.appspot.com",
    messagingSenderId: "326350421237",
    appId: "1:326350421237:web:b259021150d4ce537999bc"
};

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export default firestore;
