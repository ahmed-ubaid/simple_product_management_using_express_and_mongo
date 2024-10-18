import { Link,Navigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'


export default function Add(){
    return(
        <>
            <div>
                <form action="/addProduct" onSubmit={handleSubmit} id='newProductForm'>
                    
                    <input type="text"
                    className='inputs'
                    placeholder='productId'
                    name='productId'
                    id='productId'
                    required
                    onChange={handleChange}/>
                    
                    <input type="text"
                    className='inputs'
                    placeholder='seller'
                    name='seller'
                    id='seller'
                    required
                    onChange={handleChange}/>

                    <input type="text"
                    className='inputs'
                    placeholder='productName'
                    name='productName'
                    id='productName'
                    required
                    onChange={handleChange}/>

                    <input type="text"
                    className='inputs'
                    placeholder='description'
                    name='description'
                    id='description'
                    required
                    onChange={handleChange}/>

                    <input type="number"
                    className='inputs'
                    placeholder='quantity'
                    name='quantity'
                    id='quantity'
                    required
                    onChange={handleChange}/>

                    <input type="number"
                    className='inputs'
                    placeholder='price'
                    name='price'
                    id='price'
                    required
                    onChange={handleChange}/>

                    <div>
                        <label htmlFor="category">Category: </label>
                        <select 
                            name="category" 
                            id="category" 
                            value={product.category} 
                            onChange={handleChange}
                            required>
                            <option value="">Select a category</option> {/* Default option */}
                            <option value="technology">Technology</option>
                            <option value="clothing">clothing</option>
                            <option value="food">food</option>
                            <option value="furniture">furniture</option>
                            <option value="books">books</option>
                        </select>
                    </div>

                    <button id="logButn" >Submit</button>
                </form>
            </div>
        </>
    )
}