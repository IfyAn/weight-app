import * as firebase from 'firebase'

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
      apiKey: "AIzaSyANZ2T8Txl37_0KGQMtsOvTETmzp9Hrscg",
      authDomain: "plant-app-a822f.firebaseapp.com",
      projectId: "plant-app-a822f",
      storageBucket: "plant-app-a822f.appspot.com",
      messagingSenderId: "42990271730",
      appId: "1:42990271730:web:d996764c44ef872673646b",
      measurementId: "G-7MXGKBZ2YH"
};

let app;

if(firebase.apps.length=== 0){
  app=firebase.initializeApp(firebaseConfig);
} else {
  app=firebase.app()
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth }