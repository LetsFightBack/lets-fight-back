// Import the functions you need from the SDKs you need
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
  sendEmailVerification,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, query, getDocs } from "firebase/firestore";

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const sendPasswordResetEmailtoUser = (email) => sendPasswordResetEmail(auth, email);
export const confirmPasswordResetUser = (oobCode, password) =>
  confirmPasswordReset(auth, oobCode, password);

export const db = getFirestore();
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};



export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "HR", userAuth.email);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        name: displayName,
        email: email,
        createdAt: createdAt,
        linkedinProfileId: null,
        company: null,
        verificationStatus: "NotVerified",
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(userCredential.user);
  return userCredential;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);




export const getJobs = async () => {
  const collectionRef = collection(db, "jobs");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  let res = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    const id = doc.id;
    const d = doc.data();
    res.push({ ...d, id });
  });
  // console.log(res);
  return res;

};


export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const addVisitorToDB = async (email, name) => {
  const userDocRef = doc(db, "visitors", email);

  const userSnapshot = await getDoc(userDocRef);

  if (userSnapshot.exists()) return;

  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      name,
      email,
      createdAt,
    });
  } catch (error) {
    console.log("error creating the user", error.message);
  }

  return userDocRef;
};


export const addUserToDB = async (data) => {
  const userDocRef = doc(db, "Employee", data.email);
  const createdAt = new Date();

  try {
    await setDoc(userDocRef, {
      ...data,
      timeStamp: createdAt,
      name: `${data.firstName} ${data.lastName}`
    });
  } catch (error) {
    console.log("error creating the user", error.message);
  }

  return userDocRef;
};
