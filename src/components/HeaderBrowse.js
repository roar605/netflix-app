import React from 'react'
import { auth } from '../utils/FireBase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/netflix-logo-png-2582.png"
import user from "../assets/usericon.jpg"
import { useSelector } from 'react-redux'
import Store from '../utils/Store'

const HeaderBrowse = () => {
    const userInfo = useSelector((Store) => Store.user)
    console.log(userInfo)

    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
        }).catch((error) => {
            // An error happened.
        });
    }
    console.log(userInfo)
    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between'>
            <div className="">
                <img className='w-36 h-24 mx-auto md:mx-0' src={logo} alt='logo' />
            </div>
            <div className='flex mx-2 p-2'>
                <img className='w-12 h-12   mx-2 self-center' alt='user' src={user} />
                <div className='self-center h-12'>
                    {/* {userInfo.displayName != null ? <p>User</p>:<p className='text-center text-xl'>{userInfo.displayName}</p>} */}
                    <button onClick={handleSignOut} className='mx-2 text-xl right-20 top-10 font-semibold hover:font-bold hover:underline cursor-pointer z-20'>Sign Out</button>
                </div>
            </div>
        </div>
    )
}

export default HeaderBrowse