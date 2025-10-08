import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom' 
import Browse from './Browse'
import Login from './Login'

const Body = () => {
     const appRoute = createBrowserRouter([
            {
                path :"/",
                element: <Login/>
            },
            {
                path:"/browser",
                element:<Browse/>
            },
            {}
        ])
  return (
    <div>
         <RouterProvider router={appRoute}/>
    </div>
      
    
  )
}

export default Body