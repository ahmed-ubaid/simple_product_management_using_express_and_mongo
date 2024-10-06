const cors=require("cors");
const bodyParser=require("body-parser");

const express=require("express");
const app=express();
app.use(express.json());//this is used to parse JSON data 
app.use(express.urlencoded({extended:false}));// this is used to parse url encoded data 
app.use(bodyParser.json());// this does the exxact same thing as app.use(express.json()) i can remove it but i will let it stay because in my previous project removing this line caused some issues
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["POST","GET"],
    credentials:true
}))//cors allows us to connect with react 


const mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')//shopApp is the name of the databse
    .then(async () => {
        console.log("Connection to Mongo successful");
    })
    .catch(async (err) => {
        console.log("An error has occurred while trying to connect to Mongo");
        console.log(err);
    });

const Product=require("./models/product")
const ProductService=require("./controllers/Product/ProductService");
const productService = new ProductService();
/*
const newProductData={
    productId:"jjj",
    seller:"lllll",
    productName:"lllll",
    description:"lllll",
    quantity:1,
    price:2,
    category:"food"   
}
const newProductData1={
//     productId:"jjj0",
//     seller:"lllll",
//     productName:"lllll",
//     description:"lllll",
//     quantity:1,
//     price:2,
//     category:"food"   
}

try{
//     productService.insertProduct(newProductData);
}catch(error){
//     console.log(error)
//     throw error
}
try{
//     productService.insertProduct(newProductData1);
}catch(error){
//     console.log(error)
//     throw error
}


async function jjk(){
    try{
      const kk=await Product.findOne({productId:'jjj0'});
      console.log(kk);
    }catch(error){
      console.log(error);
      throw error;
    }
  } 
  
jjk();
*/


app.get('/',async (req,res)=>{
    res.send("hello world");
})
app.listen("200",async()=>{
    console.log("server is working");
});