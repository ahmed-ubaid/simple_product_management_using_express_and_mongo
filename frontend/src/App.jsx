import { useState } from 'react'
import axios from 'axios'
import { createBrowserRouter,RouterProvider }  from 'react-router-dom'
import {Link,useNavigate} from 'react-router-dom'
import './App.css'

function App() {
  

  const router=createBrowserRouter([
    {path:'/',element:<Add/>}
  ])


  return (
    
    <div>
      <RouterProvider router={router}/>
    </div>
    
  )
}

export default App
