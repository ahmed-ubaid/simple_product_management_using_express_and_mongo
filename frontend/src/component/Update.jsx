import { useState,useEffect } from "react";
import {Link,useNavigate,useParams} from "react-router-dom"
import axios from "axios"

export default function Update(){
    const { productId } = useParams();
    const navigate = useNavigate();

    
    const [prod,setProd]=useState({
        category: "",
        description: "",
        price:0,
        productId: "",
        productName: "",
        quantity:0,
        seller: "",
        __v:0,
        _id: ""
    })

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
    },[productId])

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            await axios.post(`http://localhost:200/update/${prod._id}`,prod)
            .then((res)=>{
                if(res.data.message=='ok'){
                    navigate('/')
                }
            })
            
            console.log("popopo")
        }catch(e){
            console.log("Some error occured")
            throw(e)
        }
    }
    const handleChange=async(e)=>{
        const { name, value } = e.target;
    
        // If the input is a number field, ensure we store a number, not a string
        setProd({
            ...prod, 
            [name]: name === 'quantity' || name==='price'? (value === '' ? '' : parseInt(value)) : value
        })
        console.log(prod)
    }

    return(<>

        <form action="/update/:productId" onSubmit={handleSubmit}>

            <input type="text"
                className='inputs'
                placeholder='productName'
                name='productName'
                id='productName'
                value={prod.productName}
                required
                onChange={handleChange}/>

            <button>submit</button>

        </form>
    </>)
}

/*
    productId,
    seller,
    productName,
    description,
    quantity,
    price,
    category
*/