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


const ProductService=require("./controllers/Product/ProductService");
const productService = new ProductService();



app.post('/addProduct',async(req,res)=>{
    const {productId,
        seller,
        productName,
        description,
        quantity,
        price,
        category
      }=req.body
    const obj={
        productId:productId,
        seller:seller,
        productName:productName,
        description:description,
        quantity:quantity,
        price:price,
        category:category
    }

    try{
        await productService.insertProduct(obj);
    }catch(error){
        console.log(error)
        throw error
    }
})
app.post('/update',async (req,res)=>{
    const {productId,
        seller,
        productName,
        description,
        quantity,
        price,
        category
      }=req.body
    const obj={
        productId:productId,
        seller:seller,
        productName:productName,
        description:description,
        quantity:quantity,
        price:price,
        category:category
    }

    try{
        const prod=productService.updateProduct(obj)
        console.log(prod)
    }catch(error){
        console.log(error)
        throw error
    }

})
app.post('/delete',async (req,res)=>{
    const {productId,
        seller,
        productName,
        description,
        quantity,
        price,
        category
      }=req.body
    const obj={
        productId:productId,
        seller:seller,
        productName:productName,
        description:description,
        quantity:quantity,
        price:price,
        category:category
    }

    try{
        const prod=productService.deleteProduct(obj.product)
        console.log(prod)
    }catch(error){
        console.log(error)
        throw error
    }
})

app.get('/',async (req,res)=>{
    res.send("hello world");
})
app.get('/products',async(req,res)=>{
    try{
        const allProdutcs=await productService.getAllProducts();
        res.send(allProdutcs)
    }catch(error){
        console.log(error)
        throw error
    }
})
app.get('/productOne',async (req,res)=>{
    const {productName}=req.body
    try{
        const product=await productService.getProductByName(productName)
        res.send(product)
    }catch(error){
        console.log(error)
        throw error
    }
})


app.listen("200",async()=>{
    console.log("server is working");
});

const kpo={
    productId:"jjj0",
    seller:"8888lllll",
    productName:"9990000",
    description:"99999000",
    quantity:1,
    price:2,
    category:"books"   
}

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
    productId:"jjj0",
    seller:"lllll",
    productName:"lllll",
    description:"lllll",
    quantity:1,
    price:2,
    category:"food"   
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


const popo=productService.updateProduct(kpo);
console.log(popo)

async function mm(){
    try{
        const up=await productService.updateProduct(kpo);
        console.log(up)
    }catch(error){
        console.log(error)
        throw error
    }
}

mm();


async function mm(){
    try{
        
        const up=await productService.deleteProduct(kpo);
        console.log(up.product)
    }catch(error){
        console.log(error)
        throw error
    }
}

mm();
*/