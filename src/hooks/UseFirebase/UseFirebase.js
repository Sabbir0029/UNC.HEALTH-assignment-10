import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged, GithubAuthProvider  } from "firebase/auth";
import { useEffect, useState } from "react";
import initialize from '../../components/firebaseConfig/initialize';

initialize()
const UseFirebase = () => {

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  // google login section
  const googlelognin =() =>{
    setLoading(true);
    const googleprovider = new GoogleAuthProvider();
    signInWithPopup(auth, googleprovider)
    .then(result =>{
      setUser(result.user);
    })
    .finally(() => setLoading(false));
  };
  // github login section
  const githublogin =()=>{
    const githubprovider = new GithubAuthProvider();
    signInWithPopup(auth, githubprovider)
    .then(result =>{
        setUser(result.User);
    })
    .catch((error) => {
      const email = error.email;
    });
  }
  // onAuthStateChanged section
  useEffect(()=>{
    const Changed= onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } 
      else {
        setUser({});
      }
      setLoading(false);
    });
    return () => Changed;
  },[]);
    // Logout section
  const logOut =()=>{
    setLoading(true);
      signOut(auth)
      .then(() =>{ })
      .finally(() => setLoading(false));
  }

  return {
    user,
    loading,
    googlelognin,
    logOut,
    githublogin,
  }
};

export default UseFirebase;