import React, { useRef, useState } from 'react'
import Header from './Header'
import bg from "../assets/netflix-bg.jpg"
import { checkValidData } from "../utils/Validate"
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/FireBase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';

const Login = () => {
  const [isLogIn, setIsLogTn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const name = useRef();
  const email = useRef(null);
  const password = useRef(null);
  const toggleForm = () => {
    setIsLogTn(!isLogIn)
    setErrorMessage("");
  }
  const handleButtonClick = () => {


    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message)
    if (message) return;
    if (!isLogIn) {
      //signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // ...
          updateProfile(user, {
            displayName: name.current.value , photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // ...
              // const {uid,email, displayName,photoURL} = auth.currentUser;
              // dispatch(addUser({uid:uid ,email:email,displayName:displayName,photoURL:photoURL}))
            navigate("/browse");
          }).catch((error) => {
            // An error occurred
            // ...
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"-->"+errorMessage)
          // ..
        });
    }
    else {
      //login logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
          navigate("/browse");
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+"!!!")
        });

    }

  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img className='w-screen h-screen object-cover' alt="bg-image" src={bg} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()
        } className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className='font-bold text-3xl py-4 text-center'>{isLogIn ? "Log In" : "Sign Up"}</h1>
        {isLogIn ? null : <input ref={name} type='name' placeholder='Enter Name' className="rounded-lg p-4 my-4 w-full bg-gray-700" />}
        <input
          ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
        <input
          ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
        {/* <p className="text-red-500 font-bold text-lg py-2">Error Message</p> */}
        <button
          onClick={handleButtonClick} className="p-4 my-6 bg-red-700 w-full rounded-lg"> {isLogIn ? "Log In" : "Sign Up"}  </button>
        <p className=' text-red-600 '>{errorMessage}</p>
        {isLogIn ? <p>New to Netflix ? <span className='cursor-pointer' onClick={toggleForm}>Sign Up</span></p> :
          <p>Already a User ? <span className='cursor-pointer' onClick={toggleForm}>Log In</span></p>}

      </form>
    </div>
  )
}

export default Login