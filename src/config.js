import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCdS1r3LuYaxLmr-9ZKieQE2qnVzzgyIKg",
  authDomain: "jacoozy-b63e7.firebaseapp.com",
  databaseURL: "https://jacoozy-b63e7-default-rtdb.firebaseio.com",
  projectId: "jacoozy-b63e7",
  storageBucket: "jacoozy-b63e7.appspot.com",
  messagingSenderId: "980884095472",
  appId: "1:980884095472:web:b33d57617ab9fd3b599d35",
  measurementId: "G-2R699LGFN1"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);