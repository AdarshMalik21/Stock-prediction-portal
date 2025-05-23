import {useContext} from 'react'
import Button from './Button'
import {Link, Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../AuthProvider"

// import { NavLink } from 'react-router-dom'
// import logo from '../public/stockLogo.jpg'

const Header = () => {
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)
  const  navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false)
    navigate('login/')

  }
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
        <Link className='navbar-brand text-white' to="/">Stock Prediction Portal</Link>
        </div>
        {isLoggedIn ?(
          <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
        ):(
          <>
            <div>
          <Button text = "Login" class = "btn-outline-info" url = "login/"/>
          &nbsp;
          <Button text = "Register" class = "btn-info" url = "register/"/>
        </div>
          </>
        )}
        
      </nav>


    </>
  )
}

export default Header
