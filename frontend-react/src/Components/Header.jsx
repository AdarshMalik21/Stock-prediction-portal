import React from 'react'
import Button from './Button'
// import { NavLink } from 'react-router-dom'
// import logo from '../public/stockLogo.jpg'

const Header = () => {
  return (
    <>
      <nav className='navbar container pt-3 pb-3 align-items-start'>
        <div className="d-flex align-items-center">
        <img
          src="./stockLogo.jpg"
          alt="Logo"
          width="40"
          height="40"
          className="rounded-circle me-2"
        />
        <span className='text-white fw-bold'>Stock Prediction Portal</span>
        </div>
        <div>
          <Button text = "Login" class = "btn-outline-info"/>
          &nbsp;
          <Button text = "Register" class = "btn-info"/>
        </div>
      </nav>


    </>
  )
}

export default Header
