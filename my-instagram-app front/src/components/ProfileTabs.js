import React from 'react'
import { useState } from 'react'
import Publications from './Publications';
import "../styles/ProfileTabs.css"


const  ProfileTabs = () => {
    const [currentTab, setCurrentTab] = useState('publications');
    const tabs = [
                 { id:'publications', label:'Публикация', content:<Publications />},
                 {id:'igtv', label:'IGTV', content:'<IGTV />'},
                 {id:'marks', label:'Отметки', content:'<Marks />'},
               
                ]

  return (
    <div >
        <div className='profile-tabs'>
          <div className='Line'>
            {tabs.map(tab =>(
                <button className = 'tabs-btn' key={tab.id } onClick={()=>setCurrentTab(tab.id)} >
                    {tab.label}
                </button>
            ))}
        </div>
        </div>
      {tabs.find(tab => tab.id === currentTab)?.content}
    </div>
  )
}

export default ProfileTabs
