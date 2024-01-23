import React, { useState } from 'react'
import Header from './Header'
import bg from "../assets/netflix-bg.jpg"
const Login = () => {
  const [isLogIn,setIsLogTn] = useState(true);
  const toggleForm=()=>{
    setIsLogTn(!isLogIn)
  }


  return (
    <div>
      <Header />
      <div className='absolute'>
        <img className='w-screen h-screen overflow-auto' alt="bg-image" src={bg} />
      </div>
      <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className='font-bold text-3xl py-4 text-center'>{isLogIn?"Log In":"Sign Up"}</h1>
        {isLogIn ? null : <input type='name' placeholder='Enter Name' className="p-4 my-4 w-full bg-gray-700"/>}
        <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700" />
        <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700" />
        {/* <p className="text-red-500 font-bold text-lg py-2">Error Message</p> */}
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg"> {isLogIn?"Log In":"Sign Up"}  </button>
        {isLogIn?<p>New to Netflix ? <span className='cursor-pointer' onClick={toggleForm}>Sign Up</span></p>:
        <p>Already a User ? <span className='cursor-pointer' onClick={toggleForm}>Log In</span></p>}
        
      </form>
    </div>
  )
}

export default Login