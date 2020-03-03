import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB_YbX_x6nC1vdy_QUfYkiqQU30BJ99j58",
  authDomain: "plant-parenthood-11bb2.firebaseapp.com",
  databaseURL: "https://plant-parenthood-11bb2.firebaseio.com",
  projectId: "plant-parenthood-11bb2",
  storageBucket: "plant-parenthood-11bb2.appspot.com",
  messagingSenderId: "199776708551",
  appId: "1:199776708551:web:a797c66bd2295050d5dbe2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;