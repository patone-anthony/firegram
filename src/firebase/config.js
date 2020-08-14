import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC8LXf8jSZ4MfKxiRkd0HGtygTfEyDGtnw",
  authDomain: "firegram-310a5.firebaseapp.com",
  databaseURL: "https://firegram-310a5.firebaseio.com",
  projectId: "firegram-310a5",
  storageBucket: "firegram-310a5.appspot.com",
  messagingSenderId: "435162596535",
  appId: "1:435162596535:web:f1860192d01a2d64f3f932",
};

firebase.initializeApp(firebaseConfig);

const projectStorege = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
