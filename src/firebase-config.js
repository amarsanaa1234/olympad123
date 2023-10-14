import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB2eGp1JJKpoBTT7FWgVx7qJyhXgoF7anA",
    authDomain: "form-a5c58.firebaseapp.com",
    projectId: "form-a5c58",
    storageBucket: "form-a5c58.appspot.com",
    messagingSenderId: "374698164840",
    appId: "1:374698164840:web:1ce621de057c0a9b1c31dd"  
  };
  
  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);