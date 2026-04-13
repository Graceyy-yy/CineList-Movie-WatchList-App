import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './root.tsx'
import App from './App.tsx'



const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {index:true, element: <App/> },

    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
 <RouterProvider router={router} /> 
  </StrictMode>,
)





