import React from 'react'
import'../styles/sidenav.css'
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";


function Sidenav() {
  return (

    <div className='sidenav'>
       <img className="sidenav-logo" src="images/instagramwhite.png" alt="" />
        <div className='sidenav-buttons'>
        <button className='side-button'> 
        <HomeIcon/>
        <span>Главная</span>
        </button>
        <button className='side-button'> 
         <SearchIcon/>
        <span>Поисковой запрос</span>
        </button>
        <button className='side-button'> 
        <ExploreIcon/>
        <span>Интересное</span>
        </button>
        <button className='side-button'> 
        <SlideshowIcon/>
        <span>Reels</span>
        </button>
        <button className='side-button'> 
        <ChatIcon/>
        <span>Сообщения</span>
        </button>
        <button className='side-button'> 
        <FavoriteBorderIcon/>
        <span>Уведомления</span>
        </button>
        <button className='side-button'> 
        <AddCircleOutlineIcon/>
        <span>Создать</span>
        </button>

        
        </div>

        <div className='sidenav-more'>
        <button className='side-button'>
          <MenuIcon/>
          <span>Ещё</span>
          </button> 
        </div>
      
    </div>
  )
}

export default Sidenav
