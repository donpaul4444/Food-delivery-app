import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo'></img>
      <ul className='navbar-menu'>
        <li>home</li>
        <li>menu</li>
        <li>mobile-app</li>
        <li>conatct us</li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt=""/>
        <div >
            <img src={assets.basket_icon} alt=""/>
            <div className='dot'></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
