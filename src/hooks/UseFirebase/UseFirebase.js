import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged, GithubAuthProvider,  createUserWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initialize from '../../components/firebaseConfig/initialize';

initialize()
const UseFirebase = () => {

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  // 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 
  const auth = getAuth();
  // google login section
  const googlelognin =() =>{
    setLoading(true);
    const googleprovider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleprovider);
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

  // jhgfsdfskdf
  const handleEmail = e =>{
    setEmail(e.target.value);
  }

  const handlePassword = e=>{
    setPassword(e.target.value);
  }

  const submitBtn = e =>{
      createUserWithEmailAndPassword(auth, email, password)
      .then(result =>{
        const user = result.user;
        console.log(user);
      })
      e.preventDefault();
  }

  return {
    user,
    loading,
    email,
    googlelognin,
    logOut,
    githublogin,
    handleEmail,
    handlePassword,
    submitBtn,
  }
};

export default UseFirebase;