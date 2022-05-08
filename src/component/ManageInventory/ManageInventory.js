import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageINventory.css';
import MyItems from '../MyItems/MyItems'; 

const ManageInventory = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://stark-island-35591.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);
    const handleUserDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting user with id, ', id);
            const url = `foyezfoyez019@gmail.com/update/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted');
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }
    return (
        <div className='container'>
            <h1 className='text-center text-secondary mx-auto my-5'>Mange Inventory</h1>
            <div className='manage-container' >
                {
                    products.map(product => <div key={product._id}>
                        <img style={{ width: '200px' }} src={product.picture} alt="" />
                        <h3>{product.name}</h3>
                        <h5>Supplier Name:{product.supplierName}</h5>
                        <p>Price:${product.price}</p>
                        <p>{product.description}</p>
                        <button className="mx-6 fs-5 w-50 mb-5 d-block mx-auto rounded-pill border border-5" variant="secondary"  onClick={() => handleUserDelete(product._id)} >Delete</button>

                    </div>)
                }
            </div>
            <MyItems></MyItems>
            <Link className='text-decoration-none' to='/addInventory'> <Button className="mx-6 fs-5 w-50 mb-5 d-block mx-auto " variant="secondary">Add new item</Button></Link>
        </div>
    );
};

export default ManageInventory;