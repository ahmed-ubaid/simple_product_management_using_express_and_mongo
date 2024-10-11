const Product=require('../../models/product');

class ProductService{

  async insertProduct(productData){
    try{
      const newProduct=new Product({
        productId:productData.productId,
        seller:productData.seller,
        productName:productData.productName,
        description:productData.description,
        quantity:productData.quantity,
        price:productData.price,
        category:productData.category
      })
    
    await newProduct.save();
    console.log(`${newProduct.productName} by ${newProduct.seller} has been added to the database`)

    }catch(error){
      console.log("error inserting product",error)
      throw error
    }
  }

  async getAllProducts(){
    try{
      const products=await Product.find();
      return products;
    }catch(error){
      console.log("error ",error);
      throw error;
    }
  }

  async getProduct(prodID){
    try{
      const prod=await Product.findOne({productId:prodID})
      return prod;
    }catch(error){
      console.log(error);
      throw error
    }
  }

  async getProductByName(name){
    try{
      const prod=await Product.findOne({productName:name})
      return prod;
    }catch(error){
      console.log(error)
      throw error
    }
  }

  async updateProduct(newItem){
    
    try{
      const ProductP=await Product.findOne({productId:newItem.productId})
      const updatedProduct=await Product.findByIdAndUpdate(ProductP._id,newItem,{
          new: true,  // Return the updated document
          runValidators: true  // Ensure validation is run on the updated data
        });
      return updatedProduct
    }catch(error){
      console.log(error)
      throw error
    }
  }

  async deleteProduct(prod){
    try{
        const ProductP=await Product.findOne({productId:prod.productId})
        const deletedProduct=await Product.findByIdAndDelete(ProductP._id)
        if (!deletedProduct) throw new Error('Product not found');
            return { message: 'Product deleted',product: deletedProduct};
    }catch(error){
      console.log(error)
      throw error
    }
  }
}

module.exports=ProductService
/*
// middleware/Product/ProductService.js
const Product = require('../../models/Product');

class ProductService {
  // Insert a new product

  // Get all products
  async getAllProducts() {
    try {
      const products = await Product.find();
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  // Update a product by ID
  async updateProduct(productId, updateData) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        updateData,
        { new: true } // return the updated document
      );
      if (!updatedProduct) {
        throw new Error('Product not found');
      }
      console.log('Product updated successfully:', updatedProduct);
      return updatedProduct;
    } catch (error) {
      console.error('Error updating product:', error);
      throw error;
    }
  }

  // Delete a product by ID
  async deleteProduct(productId) {
    try {
      const deletedProduct = await Product.findByIdAndDelete(productId);
      if (!deletedProduct) {
        throw new Error('Product not found');
      }
      console.log('Product deleted successfully:', deletedProduct);
      return deletedProduct;
    } catch (error) {
      console.error('Error deleting product:', error);
      throw error;
    }
  }

  // Get a single product by ID
  async getProductById(productId) {
    try {
      const product = await Product.findById(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  }
}

module.exports = ProductService;
*/
