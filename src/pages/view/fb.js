import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvTTqhCeBZcR4WIBEETgwiqmZBOatXX-0",
  authDomain: "letsfightback-beta.firebaseapp.com",
  projectId: "letsfightback-beta",
  storageBucket: "letsfightback-beta.appspot.com",
  messagingSenderId: "499636047639",
  appId: "1:499636047639:web:1e0b1259e52f93aa3bf152",
  measurementId: "G-B96EQFBJ1H",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const candidatesCollection = collection(db, "candidate");

export async function getAllCandidates() {
  const snapshot = await getDocs(candidatesCollection);
  const candidates = [];
  snapshot.forEach((doc, i) => {
    candidates.push(doc.data());
  });
  return candidates;
}
