import React, { useEffect, useState } from 'react';

const ManageInventory = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <div>
            <h1>mange inventory</h1>
            <h2>items: {products.length}</h2>
            <div >
            {
            products.map(product =><div key={product._id}>
               
            </div>)
        }
                

            </div>
        </div>
    );
};

export default ManageInventory;