import {initializeApp} from "@firebase/app";
import {getFirestore, serverTimestamp} from "@firebase/firestore";
import {getAuth} from "@firebase/auth";
import {getStorage} from "@firebase/storage";

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
const app = initializeApp(firebaseConfig);

//initialize Firestore
const db = getFirestore();

//initialize Auth

const auth = getAuth();

// initialize storage
const storage = getStorage(app);

const timestamp = serverTimestamp();

export { db, auth, storage, timestamp }