import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCy6kwToVg61SSD-GEAI7_4iShSAu22Z4E",
    authDomain: "cloud-extel.firebaseapp.com",
    projectId: "cloud-extel",
    storageBucket: "cloud-extel.appspot.com",
    messagingSenderId: "313134515745",
    appId: "1:313134515745:web:e279c69243bde0e2540560",
    measurementId: "G-GLC263Z3SE"
  };

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, firestoreDB, storage, auth};
