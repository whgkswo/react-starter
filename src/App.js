import './App.css';
import './style/MainPageWeb.css'
import './style/Components.css'
import LandingPage from './pages/LandingPage.js';
import LoginPage from './pages/loginpage/LoginPageWeb.js';
import LoginPageMobile from './pages/loginpage/LoginPageMobile.js';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom';
import MobileBackground from './pages/background/MobileBackground.js';
import Registration from  './pages/registration/Registration.js';
import MbtiTest from './pages/test/MbtiTest.js';

function App(){
  return(
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login-m' element={<LoginPageMobile/>}/>
          <Route path='/login-web' element={<LoginPage/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/mbti-test' element={<MbtiTest/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
