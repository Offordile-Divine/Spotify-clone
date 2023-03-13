import React from 'react'
import './Body.css'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Main/Footer/Footer'

function Body({ spotify }) {
  return (
    <div className='body'>
       <Header spotify={spotify}/> 
       <Main spotify={spotify}/>
       <Footer />
    </div>
  )
}

export default Body