import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
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
