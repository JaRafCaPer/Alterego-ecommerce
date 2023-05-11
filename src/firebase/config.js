import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9Rx-H5Ms_a-aNF8N8chgGTuoe6470tOs",
  authDomain: "alterego-gremio-de-rol.firebaseapp.com",
  projectId: "alterego-gremio-de-rol",
  storageBucket: "alterego-gremio-de-rol.appspot.com",
  messagingSenderId: "1076552188305",
  appId: "1:1076552188305:web:d5adca33431f6c044f5a30"
};

// Inicializamos la app
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () =>{
    return firebase.firestore(app)
}