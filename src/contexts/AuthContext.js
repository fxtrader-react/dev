import { firestore } from "firebase";
import React, { createContext, useEffect, useContext, useState } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    return projectAuth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return projectAuth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return projectAuth.signOut();
  }

  function resetPassword(email) {
    return projectAuth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = projectAuth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
