import { initializeApp } from "firebase/app";
import { getFirestore  } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
    authDomain: "fir-tutorial-1d84d.firebaseapp.com",
    projectId: "fir-tutorial-1d84d",
    storageBucket: "fir-tutorial-1d84d.appspot.com",
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_MSG_ID}`,
    appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)