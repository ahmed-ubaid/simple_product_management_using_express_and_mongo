import { useState,useEffect } from "react"
import {Link,useNavigate,useParams} from "react-router-dom"
import axios from "axios"

export default function Product(){
    const { productId } = useParams();
    const [prod,setProd]=useState({})

    const fetchData=async()=>{
        try{
            const prodData=await axios.get(`http://localhost:200/product/${productId}`)
            setProd(prodData.data.message)
        }catch(error){
            console.log("An error occured")
            throw(error)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])


    return(<>
        <div>name:- {prod.productName}</div>
        <div>productId:- {prod.productId}</div>
        <div>seller:- {prod.seller}</div>
        <div>description:- {prod.description}</div>
        <div>quantity:- {prod.quantity}</div>
        <div>price:- {prod.price}</div>
        <div>category:- {prod.category}</div>
    </>)
}
