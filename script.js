// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfhQpfkFVol4vRY4fxM5skerLoXaGlabk",
  authDomain: "smartcity-fe316.firebaseapp.com",
  projectId: "smartcity-fe316",
  storageBucket: "smartcity-fe316.firebasestorage.app",
  messagingSenderId: "923579965788",
  appId: "1:923579965788:web:c5956dd0fdcbc912eb2199",
  measurementId: "G-M4X2GL6CB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);