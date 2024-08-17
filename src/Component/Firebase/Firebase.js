 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
 
const firebaseConfig = {
  apiKey: "AIzaSyAgu8maiHJ6TQwLZWGXiN1NjRMelEMV9_Q",
  authDomain: "job-task-a42d5.firebaseapp.com",
  projectId: "job-task-a42d5",
  storageBucket: "job-task-a42d5.appspot.com",
  messagingSenderId: "84115843351",
  appId: "1:84115843351:web:8eaf8ba43535f97338ef52"
};

 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;