import { Navigate } from "react-router-dom";
import Home from './Pages/Home'
import "./index.css"
import HomeMain from './Pages/HomeMain'


function App() {
  const isLoggedIn = localStorage.getItem("logined");
  return (
    <>
      {isLoggedIn ? <HomeMain/> : <Home/>}
    </>
  )
}

export default App
