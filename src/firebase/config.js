import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB9uXVLTEzgVubuwiNLeSVIUgktfbOsTPE",
    authDomain: "photo-gallery-8fdb4.firebaseapp.com",
    projectId: "photo-gallery-8fdb4",
    storageBucket: "photo-gallery-8fdb4.appspot.com",
    messagingSenderId: "608123701547",
    appId: "1:608123701547:web:88a4aa3dd334d9633f1d6e",
    measurementId: "G-MFK0PHXMT5"
  };

  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };