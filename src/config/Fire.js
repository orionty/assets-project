import { initializeApp } from "firebase/app";
import { getAuth
    ,signInWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut } from "firebase/auth";

    const firebaseConfig = {
      apiKey: "AIzaSyAZc29G-Xjn7uShDLQl7zjMHcnR7qavYC4",
     authDomain: "assets-vaults.firebaseapp.com",
        projectId: "assets-vaults",
        storageBucket: "assets-vaults.appspot.com",
      messagingSenderId: "610869142007",
      appId: "1:610869142007:web:3920197d1f4172d30acef2",
      databaseURL: "https://assets-vaults.firebaseio.com",
      
    };
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };




const logout = () => {
    signOut(auth);
}

export {auth,
    logInWithEmailAndPassword,
    sendPasswordReset,
    logout
}
