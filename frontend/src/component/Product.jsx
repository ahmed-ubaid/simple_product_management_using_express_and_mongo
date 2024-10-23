import { useState,useEffect } from "react"
import { useParams } from 'react-router-dom';
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
        {prod.productName}
    </>)
}