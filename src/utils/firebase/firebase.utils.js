import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, where, query, doc, setDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
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

// Initialize Analytics and get a reference to the service
export const analytics = getAnalytics(app);

export async function getAllCandidates() {
  return await getAllDocs("Employee");
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
    return userData;
  } else {
    return null;
  }
}

export async function getHRDetail() {
  var user = getAuth().currentUser;
  if(user != null) {
    const hrRef = collection(db, 'HR');
    const q = query(hrRef, where("email", "==", user.email));
    const snapshot = await getDocs(q);
    const users = [];
    snapshot.forEach((doc, i) => {
      users.push(doc.data());
    });
    return users[0];
  } else {
    return null;
  }
}

export async function saveDataToDB(userData) {
  userData = {...userData, ["verificationStatus"]: "Recieved"};
  //saving user data back to DB
  const hrRef = doc(db, 'HR', userData.email);
  await setDoc(hrRef, {
    ...userData
  });
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

