import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

console.log(process.env);
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

export async function getAllDocs(collectionName) {
  const candidatesCollection = collection(db, collectionName);
  const snapshot = await getDocs(candidatesCollection);
  const candidates = [];
  snapshot.forEach((doc, i) => {
    candidates.push(doc.data());
  });
  return candidates;
}
