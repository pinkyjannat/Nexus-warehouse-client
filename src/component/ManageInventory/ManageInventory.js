import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageInventory = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);
    const handleUserDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            console.log('deleting user with id, ', id);
            const url = `http://localhost:5000/update/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    console.log('deleted');
                    const remaining = products.filter(product=> product._id !== id);
                    setProducts(remaining);
                }
            })
        }
    }
    return (
        <div>
            <h1>mange inventory</h1>
            <h2>items: {products.length}</h2>
            <div >
            {
            products.map(product =><div key={product._id}>
                 <img style={{width:'200px'}} src={product.picture} alt="" />
                <h3>{product.name}</h3>
                <h5>{product.supplierName}</h5>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <button onClick={() => handleUserDelete(product._id)} >Delete</button>
               
            </div>)
        }
                
                <Link to='/addInventory'> <button>Add new item</button></Link>
            </div>
        </div>
    );
};

export default ManageInventory;