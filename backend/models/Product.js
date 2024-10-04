const mongoose =require("mongoose");


// Define the product schema
/*const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  description: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Electronics', 'Clothing', 'Food', 'Furniture', 'Books']  // Example categories
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  image: {
    type: String,  // URL for product image
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  seller: {  // Reference to the user who posted the product
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});*/

const productSchema=new mongoose.Schema({
    productId:{
        type:String,
        required:true,
        unique:true
    },
    seller:{
        type:String,
        required:true,
    },
    productName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
        min:0
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
})
// Create the product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
