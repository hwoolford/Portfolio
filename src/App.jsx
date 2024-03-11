import './App.css'

import { Outlet } from "react-router-dom";

import NavBar from './components/NavBar'
import Footer from './components/Footer';



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
