// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOat2GexFzAkmBommZbr7q6fRr_KebqHA",
  authDomain: "funemploy-5af44.firebaseapp.com",
  projectId: "funemploy-5af44",
  storageBucket: "funemploy-5af44.appspot.com",
  messagingSenderId: "1072253928439",
  appId: "1:1072253928439:web:5074d4c7c1acb095fb64f2",
  measurementId: "G-FF5VBCDDCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);