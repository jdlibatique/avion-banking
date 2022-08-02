import {initializeApp} from "@firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJ9HvOKJwRu5mlP5WouODm_hPI4Of679c",
  authDomain: "avion-banking.firebaseapp.com",
  projectId: "avion-banking",
  storageBucket: "avion-banking.appspot.com",
  messagingSenderId: "334799666722",
  appId: "1:334799666722:web:ebc6c1fa37b6da7e3fd47b"
};


//initialize Firebase
initializeApp(firebaseConfig);

//initialize Firestore
const db = getFirestore();

//initialize Auth

const auth = getAuth();

export { db, auth }