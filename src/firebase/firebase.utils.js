import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAYkyBZIPhBhjJccuS7Fi2w3YLL6XMuV2w",
  authDomain: "crwn-db-b5295.firebaseapp.com",
  databaseURL: "https://crwn-db-b5295.firebaseio.com",
  projectId: "crwn-db-b5295",
  storageBucket: "crwn-db-b5295.appspot.com",
  messagingSenderId: "1051678113535",
  appId: "1:1051678113535:web:9bc023e3f6bb07fdef16ca",
  measurementId: "G-CRMQLEN3GL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
