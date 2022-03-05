import firebase from 'firebase/compat/app'
import 'firebase/auth'

//  Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyC8rNn2NvQukhbis_vmixPgSBtCm_yYjOc',
  authDomain: 'image-gallery-using-react.firebaseapp.com',
  projectId: 'image-gallery-using-react',
  storageBucket: 'image-gallery-using-react.appspot.com',
  messagingSenderId: '390737992061',
  appId: '1:390737992061:web:5afd7be8d9bc3668c41414',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
