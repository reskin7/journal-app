import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCSaYKEzn4TU7aQy8epeQTsRxAFWw1UUtk',
  authDomain: 'curso-react-udemy-1098e.firebaseapp.com',
  projectId: 'curso-react-udemy-1098e',
  storageBucket: 'curso-react-udemy-1098e.appspot.com',
  messagingSenderId: '787186427759',
  appId: '1:787186427759:web:eeaa936eb65d30775f6a9a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
