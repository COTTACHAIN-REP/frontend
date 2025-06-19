import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  serverTimestamp,
  Timestamp 
} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3w3h3pfjChdd693AgxhlnbVbYD1z4vPY",
  authDomain: "healthfinaid.firebaseapp.com",
  projectId: "healthfinaid",
  storageBucket: "healthfinaid.firebasestorage.app",
  messagingSenderId: "48647462067",
  appId: "1:48647462067:web:6f1260503106dfac88e4c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Firestore collections
export const usersCollection = collection(db, "users");
export const supportMessagesCollection = collection(db, "supportMessages");

// Helper function to save user data to Firestore
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveUserToFirestore = async (userId: string, userData: any) => {
  try {
    const userRef = doc(db, "users", userId);
    
    // Convert JavaScript Date objects to Firestore Timestamps
    const formattedData = { ...userData };
    
    if (formattedData.createdAt instanceof Date) {
      formattedData.createdAt = Timestamp.fromDate(formattedData.createdAt);
    }
    
    if (formattedData.updatedAt instanceof Date) {
      formattedData.updatedAt = Timestamp.fromDate(formattedData.updatedAt);
    } else {
      formattedData.updatedAt = serverTimestamp();
    }
    
    await setDoc(userRef, formattedData, { merge: true });
    console.log("User data saved to Firestore successfully");
    return true;
  } catch (error) {
    console.error("Error saving user to Firestore:", error);
    return false;
  }
};

// Helper function to get user data from Firestore
export const getUserFromFirestore = async (userId: string) => {
  try {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      console.log("No user data found in Firestore");
      return null;
    }
  } catch (error) {
    console.error("Error getting user from Firestore:", error);
    return null;
  }
};

// Helper function to save support messages to Firestore
export const saveSupportMessage = async (messageData: {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: Timestamp;
}) => {
  try {
    const formattedData = {
      ...messageData,
      createdAt: messageData.createdAt || serverTimestamp(),
    };

    const docRef = doc(supportMessagesCollection);
    await setDoc(docRef, formattedData);
    console.log("Support message saved successfully");
    return true;
  } catch (error) {
    console.error("Error saving support message:", error);
    return false;
  }
};

export default app;
