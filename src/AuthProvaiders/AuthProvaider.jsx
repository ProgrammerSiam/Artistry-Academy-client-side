import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosSecure from "../UseHooks/useAxiosSecure/useAxiosSecure";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvaiders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvaider = new GoogleAuthProvider();
  const [axios] = useAxiosSecure();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // const signIn = (email, password) => {
  //     setLoading(true)
  //     return signInWithEmailAndPassword(auth, email, password)
  // }

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvaider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (presentUser) => {
      setUser(presentUser);
      // console.log('present user', presentUser);
      setUser(presentUser);
      setLoading(false);
      if (presentUser) {
        // console.log('res');
        axios
          .post("https://server-mehediinfo10101-gmailcom.vercel.app/jwt", {
            email: presentUser.email,
          })
          .then((response) => {
            console.log("res", response.data.token);
            localStorage.setItem("access-token", response.data.token);
          });
      }
      localStorage.removeItem("access-token");
    });
    return () => {
      return unsubscribe();
    };
  }, []);
  const Authinfo = {
    user,
    loading,
    createUser,
    login,
    logOut,
    googleLogin,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={Authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvaiders;
