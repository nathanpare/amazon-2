import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVHw53IXvkfXMq2HPNBfq3t0KNRk4M7Iw",
  authDomain: "clone-d56f7.firebaseapp.com",
  projectId: "clone-d56f7",
  storageBucket: "clone-d56f7.appspot.com",
  messagingSenderId: "979058846888",
  appId: "1:979058846888:web:c27ac4440f0cef042c669d"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;