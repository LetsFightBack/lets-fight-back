import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  confirmPasswordReset,
  sendPasswordResetEmail,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getAllCandidates() {
  return await getAllDocs("candidate");
}

export function getLoginDetails() {
  var user = getAuth().currentUser
  var userData = {}
  if (user != null) {
    userData = {
      "name": user.displayName,
      "email": user.email,
      "photoUrl": user.photoURL,
      "emailVerified": user.emailVerified,
      "uid": user.uid,
    }
  }
  return userData
}

export async function getAllDocs(collectionName) {
  const candidatesCollection = collection(db, collectionName);
  const snapshot = await getDocs(candidatesCollection);
  const candidates = [];
  snapshot.forEach((doc, i) => {
    candidates.push(doc.data());
  });
  return candidates;
}

