import { useState,useEffect } from "react";
import {Link,Navigate} from "react-router-dom"
import axios from "axios"


export default function Home(){
    const [data,setData]=useState([])
    
    const fetchData=async ()=>{
        try{
            const AllData=await axios.get('http://localhost:200/')
            setData(AllData.data.message)
        }catch(error){
            console.log("some error occured")
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    
    return(<>
        <div>
        {data.length > 0 ? (
                    data.map((product) => (
                        <div key={product._id}>
                            <h2>{product.productName}</h2>
                        </div>
                    ))
                ) : (
                    <p>No products available.</p> // Message if no products
                )}
        </div> 
    </>)
} 

/* {/* Render product name 
<p>{product.description}</p> 
<p>Price: ${product.price}</p> 
<p>Quantity: {product.quantity}</p> 
<p>Category: {product.category}</p> 
*/