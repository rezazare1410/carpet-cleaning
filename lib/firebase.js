// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDOjR4m4ghSQZfmScuMnnAKumctptbNons",
  authDomain: "zarecarpet-blog.firebaseapp.com",
  projectId: "zarecarpet-blog",
  storageBucket: "zarecarpet-blog.firebasestorage.app",
  messagingSenderId: "307235016049",
  appId: "1:307235016049:web:e2aebe6568cbba30623ad0",
  measurementId: "G-2Q75QGCMQW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };

