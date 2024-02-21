import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import NotFoundPage from './pages/NotFoundPage.jsx';
import ComponentPage from './pages/ComponentPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/components",
    element: <App />,
    children: [
      {
        path: "/components/:componentId",
        element: <ComponentPage />
      }
    ]
  }

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
