import React from 'react'
import "../styles/profile.css"
import ProfileTabs from './ProfileTabs.js'


function Profile() {
  return (
    <div className='profile'>
      <div className='profile-image'>
     <img className='profile-img'  
          src="images/profileimg.jpg"
          alt="" ></img>
        <div className='header-buttons'>
          <p className='profile-name'>retroscifart</p>
          <button className='subscribe-btn'>Подписаться</button>
          <button className='sendMsg-btn'>Отправить сообщение</button>
          <div className='public-title'>
          <p className='publication-title'>5 253 публикаций</p>
          <p className='subscribers-title'>1 млн подписчиков</p>
          <p className='subsctibe-title'>900 подписок</p>
         </div>
         
        </div>
        
        </div>
        <div className='profileTabs'> <ProfileTabs/> </div>
     
    
    </div>
  )
}

export default Profile
