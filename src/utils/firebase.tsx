// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXuckqsXy3Zy-zkOSPXq4L9ILbL1rMn5s",
  authDomain: "funkyfoodaaqib.firebaseapp.com",
  projectId: "funkyfoodaaqib",
  storageBucket: "funkyfoodaaqib.appspot.com",
  messagingSenderId: "1056278658925",
  appId: "1:1056278658925:web:daf6c02b64a3b3b4452464",
  measurementId: "G-SP83YZ570N"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

class FirebaseHelper {
  private static instance: FirebaseHelper;
  public app: FirebaseApp;
  public auth: Auth;
  public firestore: Firestore;

  private constructor() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth(this.app)
    this.firestore = getFirestore(this.app);
  }

  public static getInstance(): FirebaseHelper {
    if (!FirebaseHelper.instance) {
      FirebaseHelper.instance = new FirebaseHelper();
    }
    return FirebaseHelper.instance;
  }

  public static signInWithEmailAndPassword(email: string, password: string) {
    return signInWithEmailAndPassword(this.getInstance().auth, email, password);
  }

  public static signOut() {
    return this.getInstance().auth.signOut();
  }
}

export default FirebaseHelper;
