import { useState } from 'react'
import './assets/css/style.css'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from './Components/Register'
import Login from './Components/Login'
import AuthProvider from './AuthProvider'
import Dashboard from './Components/Dashboard/Dashboard'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'


function App() {
  

  return (
    <>
    <AuthProvider>
        <BrowserRouter>
        <Header />
        <Routes>
          
        <Route path='/' element = {<Main />} />
        <Route path='/register' element = {<PublicRoute><Register /></PublicRoute>}/>
        <Route path='/login' element = {<PublicRoute><Login /></PublicRoute>}/>
        <Route path = '/dashboard' element = {<PrivateRoute><Dashboard /></PrivateRoute>}/>
        </Routes>
        <Footer />
        </BrowserRouter>
      
      </AuthProvider>

    </>
  )
}

export default App
