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
            <h1 className='text-secondary text-center'> Our Current Stocks</h1>
            
              <div  className='card'> {products.slice(0, 6).map(product =><Product key={product._id} product={product}></Product>)}</div>
              <Link to='/manage'> <button> Manage Inventories</button></Link>
          
        </div>
    );
};

export default Products;