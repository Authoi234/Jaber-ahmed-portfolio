// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEvsiIY177HS9hkgcglm0_BzpMQYEG4BE",
    authDomain: "jaber-ahmeds-portfolio.firebaseapp.com",
    projectId: "jaber-ahmeds-portfolio",
    storageBucket: "jaber-ahmeds-portfolio.appspot.com",
    messagingSenderId: "622157077126",
    appId: "1:622157077126:web:b74575c1fb8843ffca0f07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;