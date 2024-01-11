import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyCs6Z8t7UPnIp5tAyReZbegS_VRRm-OgUk",
    authDomain: "my-react-app-67bd7.firebaseapp.com",
    projectId: "my-react-app-67bd7",
    storageBucket: "my-react-app-67bd7.appspot.com",
    messagingSenderId: "965081450064",
    appId: "1:965081450064:web:de41f98cdbb6d5305af355",
    measurementId: "G-1ZW3HE3DM3",
    databaseURL:"https://my-react-app-67bd7-default-rtdb.firebaseio.com/"
  };
 const app=initializeApp(firebaseConfig)  ;
 export const auth=getAuth(app)
 export const storage=getStorage(app)
 export const db=getFirestore(app) 