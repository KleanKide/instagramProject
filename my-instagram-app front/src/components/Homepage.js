import React from 'react'
import '../styles/homepage.css'
import Sidenav from './Sidenav'
import Profile from './Profile'



function Homepage() {
  return (
    <div className='homepage'>
        <div className='homepage-nav'>
            <Sidenav/>
        </div>
        <div className='homepage-profle'>
            <Profile/>
        </div>
      
    </div>
  )
}

export default Homepage
