import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

import App from './App.jsx'
import Signup from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx';
import Home from './Pages/Home.jsx';
import HomeMain from './Pages/HomeMain.jsx';
import Profile from './Pages/Profile.jsx';
import EditProfile from './Pages/EditProfile.jsx';
import CardPage from './Pages/CardPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/login' element = {<Login />} />
        <Route path="/ration" element={<HomeMain />} />
        <Route path='/Home' element = {<Home />} />
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/profile/edit' element = {<EditProfile/>}/>
        <Route path='/:id' element = {<CardPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
