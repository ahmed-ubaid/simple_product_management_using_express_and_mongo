import { useState } from 'react'
import axios from 'axios'
import { createBrowserRouter,RouterProvider }  from 'react-router-dom'
import {Link,useNavigate} from 'react-router-dom'
import './App.css'

function App() {
  
  const [product, setProduct] = useState({
    productId:'',
    seller:'',
    productName:'',
    description:'',
    quantity:0,
    price:0,
    category:''
  })
  const [error,setError]=useState('')

  const router=createBrowserRouter([
    {path:'/',element:<Add/>}
  ])


  const handleChange=async(e)=>{
    const { name, value } = e.target;

    // If the input is a number field, ensure we store a number, not a string
    setProduct({
        ...product, 
        [name]: name === 'quantity' || name==='price'? (value === '' ? '' : parseInt(value)) : value
    })
  }

  const handleSubmit=async (e)=>{
    e.preventDefault()
    try{
      await axios.post('http://localhost:200/addProduct',product)
      setProduct({
        productId:'',
        seller:'',
        productName:'',
        description:'',
        quantity:0,
        price:0,
        category:''
      })
    }catch(error){
      setError('Invalid input')
    }
  }


  return (
    
    <div>
      <RouterProvider router={router}/>
    </div>
    
  )
}

export default App
