import React from 'react'
import logo from "../assets/netflix-logo-png-2582.png"
const Header = () => {
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className='w-44 mx-auto md:mx-0' src={logo} alt='logo'/>
    </div>
  )
}

export default Header