import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
// import Home from './pages/Home.jsx'
import Home2 from './pages/Home2.jsx'
// import Projects from './pages/Projects.jsx'
import Projects2 from './pages/Projects2.jsx'
import Resume from './pages/Resume.jsx'

const router = createBrowserRouter([
{
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      element: <Home2 />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'projects',
      element: <Projects2 />
    },
    {
      path: 'contact',
      element: <Contact />
    },
    {
      path: 'resume',
      element: <Resume />
    },
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
