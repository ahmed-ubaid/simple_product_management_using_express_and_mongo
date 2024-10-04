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
    console.log(`${newProduct.name} by ${newProduct.seller} has been added to the database`)
    

    }catch(error){
      console.log("error inserting product",error)
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
  async insertProduct(productData) {
    try {
      const newProduct = new Product({
        name: productData.name,
        price: productData.price,
        quantity: productData.quantity,
        description: productData.description,
      });

      const savedProduct = await newProduct.save();
      console.log('Product added successfully:', savedProduct);
      return savedProduct;
    } catch (error) {
      console.error('Error inserting product:', error);
      throw error;
    }
  }

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
