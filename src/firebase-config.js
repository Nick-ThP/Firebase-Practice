import { initializeApp } from "firebase/app";
import { getFirestore  } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBOlkjfIZ1SOhW3o1r0aGnjYEN69NKpmGg",
    authDomain: "fir-tutorial-1d84d.firebaseapp.com",
    projectId: "fir-tutorial-1d84d",
    storageBucket: "fir-tutorial-1d84d.appspot.com",
    messagingSenderId: "431156513784",
    appId: "1:431156513784:web:aa34a21b8606f3bbf4240d"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)