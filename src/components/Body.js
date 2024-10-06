import React  from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import MovieDetails from './MovieDetails'
import WatchTrailer from './WatchTrailer'




const Body = () => {
  

    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>,
        },
        {
          path:"/browse/details/:id",
          element:<MovieDetails/>
        },
        {
          path:"/browse/details/:id/watch",
          element:<WatchTrailer/>
        }
        
    ])
   

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
