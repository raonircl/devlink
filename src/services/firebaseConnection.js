import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDcBVcAdJPXqCUhL9Two_W9PTUK9yRvc4o",
  authDomain: "devlink-4ec95.firebaseapp.com",
  projectId: "devlink-4ec95",
  storageBucket: "devlink-4ec95.appspot.com",
  messagingSenderId: "1068102911910",
  appId: "1:1068102911910:web:d34649cbea9c196df07167",
  measurementId: "G-VWB2THC7E8"
};

const firebaseapp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseapp);
const auth = getAuth(firebaseapp);

export { db, auth };