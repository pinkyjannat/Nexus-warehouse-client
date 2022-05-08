import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(()=>{
fetch('http://localhost:5000/products')
.then(res=>res.json())
.then(data=>setProducts(data))

  },[])

    return (
      
        <div className='container'>
            <h1 className='text-secondary text-center my-4 py-4'> Our Current Stocks</h1>
            
              <div  className='card'> {products.slice(0, 6).map(product =><Product key={product._id} product={product}></Product>)}</div>
              <Link className='text-decoration-none'to='/manage'> <button className='btn btn-secondary d-block mx-auto mt-4 rounded-pill'> Manage Inventories</button></Link>
          
        </div>
    );
};

export default Products;