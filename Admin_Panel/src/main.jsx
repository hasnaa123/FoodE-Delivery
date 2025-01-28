import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Pass prop to Layout
    }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>)
  
