import './index.css'

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Home from './pages/Home/Home.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Resume from './pages/Resume/Resume.jsx'

const router = createBrowserRouter([
{
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: 'about',
      element: <About />
    },
    {
      path: 'projects',
      element: <Projects />
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
