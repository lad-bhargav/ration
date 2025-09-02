import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

import App from './App.jsx'
import Signup from './Pages/Signup.jsx'
import Login from './Pages/Login.jsx';
import Home from './Pages/Home.jsx';
import HomeMain from './Pages/HomeMain.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/login' element = {<Login />} />
        <Route path="/ration" element={<HomeMain />} />
        <Route path='/Home' element = {<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
