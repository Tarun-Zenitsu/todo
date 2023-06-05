import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {gatFirestore, getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyC-AZmeVo3kml3Xi5TZ1DJpkSVpypqqkjI",
  authDomain: "fir-todo-app-2e7ad.firebaseapp.com",
  projectId: "fir-todo-app-2e7ad",
  storageBucket: "fir-todo-app-2e7ad.appspot.com",
  messagingSenderId: "867531182500",
  appId: "1:867531182500:web:d31e578d21e874da4ef131"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth (app);
export const db= getFirestore(app);
