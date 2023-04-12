// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD446svK0VbwoFAm9R0i8cGaIvY0vi57-Y',
  authDomain: 'whatsapp-clone-d6055.firebaseapp.com',
  projectId: 'whatsapp-clone-d6055',
  storageBucket: 'whatsapp-clone-d6055.appspot.com',
  messagingSenderId: '370235034003',
  appId: '1:370235034003:web:479486c89d7137719c0066',
  measurementId: 'G-CQVSVTS883',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;