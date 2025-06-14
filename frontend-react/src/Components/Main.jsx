import React from 'react'
import Button from './Button'
import Footer from './Footer'
import Header from './Header'

const Main = () => {
  return (
    <>
    
    <div className='container'>
        <div className='p-5 text-center bg-ligh-dark rounded'>
            <h1 className='text-light'>Stock Prediction Portal</h1>
            <p className='text-light lead '>this stock prediction application utilizes machine learning techniques, specially employing keras, and LSTM model, integrated within the Django framework. It forecast future stocks prices by analyzing 100-days and 200-days moving averages, essential indicators widely used by stock analysts to inform trading and investment decisions.</p>
            <Button text = "Explore Now" class = "btn-outline-info" url = 'dashboard/' />

        </div>
    </div>
    
    </>
  )
}

export default Main
