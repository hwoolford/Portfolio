import './App.css'

import { Outlet } from "react-router-dom";

import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx';



function App() {
  
  return (
    <div className='app-container'>
      <NavBar />
      <div className='main-content'>
      <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
