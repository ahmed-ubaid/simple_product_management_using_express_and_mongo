import { useState } from 'react'
import axios from 'axios'
import { createBrowserRouter,RouterProvider }  from 'react-router-dom'
import {Link,useNavigate} from 'react-router-dom'
import AddProduct from './component/AddProduct'
import Home from './component/Home'
import Product from './component/Product'
import Update from './component/Update'
import './App.css'

function App() {
  

  const router=createBrowserRouter([
    {path:'/',element:<Home/>},
    {path:'/addProduct',element:<AddProduct/>},
    {path:'/product/:productId',element:<Product/>},
    {path:'/update/:productId',element:<Update/>}
  ])


  return (
    
    <div>
      <RouterProvider router={router}/>
    </div>
    
  )
}

export default App
