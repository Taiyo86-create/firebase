import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDtUqPx_MdpaBmMFqMVisut4IuMaj6nZCM",
  authDomain: "fir-tutorial-8e2c1.firebaseapp.com",
  projectId: "fir-tutorial-8e2c1",
  storageBucket: "fir-tutorial-8e2c1.appspot.com",
  messagingSenderId: "852424363381",
  appId: "1:852424363381:web:ef94062e6fb4d44826973c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);