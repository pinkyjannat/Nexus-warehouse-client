import React from 'react';
import { useNavigate } from 'react-router-dom';


const Product = ({ product }) => {
    const {_id, name, picture, description, quantity, price, supplierName} = product;

    const navigate = useNavigate();
    const navigateToInventory = id =>{
        navigate(`/inventory/${id}`)
    }
    return(
        <div>
            <img className='w-100' style={{ width: '20px' }} src={picture} alt="" />
            <h4 className='mt-4 text-center'> {name}</h4>
            <p className='text-center'>Supplier: {supplierName}</p>
            <h5 className='text-center'>price: ${price}</h5>
            <p className="text-center">Quantity: {quantity}</p>
            <button onClick={()=>navigateToInventory(_id)} className='btn btn-secondary rounded-pill'>Details</button>
            <p className='p-3 m-2 text-center'>{description}</p>

        </div>
    );
};

export default Product;
