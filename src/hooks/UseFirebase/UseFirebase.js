import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initialize from '../../components/firebaseConfig/initialize';

initialize()
const UseFirebase = () => {

  const [user, setUser] = useState({})
  const auth = getAuth();

  const googlelognin =() =>{
    const googleprovider = new GoogleAuthProvider();
    signInWithPopup(auth, googleprovider)
    .then(result =>{
      setUser(result.user);
    })
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
    });
    return () => Changed;
  },[])
    // Logout section
  const logOut =()=>{
      signOut(auth)
      .then(() =>{ });
  }

  return {
    user,
    googlelognin,
    logOut,
  }
};

export default UseFirebase;