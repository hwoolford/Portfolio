import './App.css'

import { Outlet } from "react-router-dom";

// import NavBar from './components/NavBar.jsx'
// import NavBar2 from './components/NavBar2.jsx'
import NavBar3 from './components/NavBar3.jsx'
import Footer from './components/Footer.jsx';



function App() {
  
  return (
    <div className='app-container'>
      <NavBar3 />
      {/* <NavBar /> */}
      {/* <NavBar2 /> */}
      <div className='main-content'>
      <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
