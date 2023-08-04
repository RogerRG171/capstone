import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect,
  signInWithPopup, 
  GoogleAuthProvider
 } from 'firebase/auth'

 import { 
  getFirestore,
  doc,
  getDoc,
  setDoc,
 } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAq51cnkDVmAAfLk-x9RdwxIGLN9SQmo70",
  authDomain: "capstone-db-13014.firebaseapp.com",
  projectId: "capstone-db-13014",
  storageBucket: "capstone-db-13014.appspot.com",
  messagingSenderId: "320301529877",
  appId: "1:320301529877:web:99a37760dac4b810de071c"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async(userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)
  
  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating the user'+error.message)
    }
  }

  return userDocRef
}