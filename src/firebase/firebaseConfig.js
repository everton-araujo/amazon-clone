import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBZ3RYhRG_kkiSWpMvMT_SaxNKOJ0N1Ghw",
  authDomain: "clone-2183b.firebaseapp.com",
  projectId: "clone-2183b",
  storageBucket: "clone-2183b.appspot.com",
  messagingSenderId: "809396625242",
  appId: "1:809396625242:web:1f8b13e37a9cf7323d1d63",
  measurementId: "G-P6L0JRPVJ9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth };
