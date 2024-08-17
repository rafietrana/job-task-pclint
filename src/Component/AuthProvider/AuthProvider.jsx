import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // console.log("User logged in:", user);
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.error("Error logging in:", errorCode, errorMessage);
        throw error;
      });
  };

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // console.log("User signed in with Google:", user);
        return user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // console.error("Error signing in with Google:", errorCode, errorMessage);
        throw error;
      });
  };
  const logOut = () => {
    return signOut(auth)
      .then(() => {
        setUser(null);
        alert("User signed out successfully.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.error("i found error:", errorCode, errorMessage);
  
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
 
    });

    return () => {
      unSubscribe();
    };
  }, []);





  const userInfo = {
    user,
    createUser,
    signInWithGoogle,
    logOut,
    loginUser
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
