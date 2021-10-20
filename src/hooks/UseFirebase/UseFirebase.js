import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged, GithubAuthProvider,  createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initialize from '../../components/firebaseConfig/initialize';

initialize()
const UseFirebase = () => {

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  // email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('')
  // 
  const auth = getAuth();
  // google login function
  const googlelognin =() =>{
    setLoading(true);
    const googleprovider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleprovider);
  };
  // github login function
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
  // onAuthStateChanged function
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
    // Logout function
  const logOut =()=>{
    setLoading(true);
      signOut(auth)
      .then(() =>{ })
      .finally(() => setLoading(false));
  }

  // Email and password
  const handleEmail = e =>{
    setEmail(e.target.value);
  }

  const handleName = e =>{
    setName(e.target.value);
  }

  const handlePassword = e=>{
    setPassword(e.target.value);
  }

  const submitBtn = e =>{
    e.preventDefault();
    if(password.length < 6){
      setError('Password should be at least 6 characters');
      return;
    }
      createUserWithEmailAndPassword(auth, email, password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        setError(' ')
      })
      .catch(error =>{
        setError(error.message);
      });
      // login function
      // signInWithEmailAndPassword(auth, email, password)
      // .then(result => {
      //   const user = result.user
      //   console.log(user);
      //   setError(' ')
      // })
  }

  return {
    user,
    loading,
    email,
    error,
    googlelognin,
    logOut,
    githublogin,
    handleEmail,
    handleName,
    handlePassword,
    submitBtn,
  }
};

export default UseFirebase;