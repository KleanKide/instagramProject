import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import InstagramRegistration from './components/InstagramRegistration';
import Login from './components/Login';

import Homepage from './components/Homepage';




const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  
    <Router>
      <Provider store={store}>
       
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<InstagramRegistration />} />
          <Route path="/homepage" element ={<Homepage/>}/>
          
         
          
        </Routes>
        
      </Provider>
     
    </Router>
  
);
