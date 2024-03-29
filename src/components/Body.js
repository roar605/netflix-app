import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/FireBase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/UserSlice'



const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        
    ])
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
     
              const {uid,email, displayName} = user;
              dispatch(addUser({uid:uid,email:email,displayName:"Rohit"}))

            } else {
              // User is signed out
              // ...
              dispatch(removeUser)   
            }
          });
          
    },[])
  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body