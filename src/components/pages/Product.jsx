import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../molecoles/Product-Card';
import { fetchProducts } from '../../services/api';

const Product = () => {
  //CONSTS
  const [products, setProducts] = useState([]);
  const [namaProduct, setNamaProduct] = useState("");
  const [successAdd, setSuccessAdd] = useState(false);

  // USEEFFECT FUNCTION: DATA FETCHPRODUCTS DI GET DISINI
  useEffect(() => {
    fetchProducts();
    }, []);

  // FUNCTION 1-FETCHPRODUCTS: UNTUK AMBIL DATA PRODUCT DI DUMMYJSON
  const fetchProducts = async () => {
    try {
      const url = 'https://dummyjson.com/products?limit=3';
      const response = await axios.get(url);
      setProducts(response.data.products);
    } catch (error) {
      console.log(error)
    }
  }

  // FUNCTION 2-ADDPRODUCT
  const addProduct = async () => {
    try {
      const url = "https://dummyjson.com/products/add";
      const payload = {
        title: namaProduct
      }
      const response = await axios.post(url, payload);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Product</h1>
      <h2 className="text-extrabold">ADD PRODUCT</h2>
      <input type="text" placeholder="Type here"
        className="input input-bordered w-96 mb-5"
        onChange={(e) => setNamaProduct(e.target.value)}
      />

      <button className="btn btn-primary ml-5" onClick={addProduct}> Add Product</button>

      {successAdd && <p>Success Add Product</p>}

      <div className='grid gap-4 grid-cols-3 grid-rows-3'>
        {products.map((product, index) => {
          return (
            <ProductCard {...product} />
          )
        })}
      </div>
      {/* <p>Count: {count}</p>
        <button className="btn btn-primary" onClick={() => setCount(count+1)}>Increment</button> */}
    </>
  )
};

export default Product;