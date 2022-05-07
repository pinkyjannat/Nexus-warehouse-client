import React from 'react';
import { useParams } from 'react-router-dom';
import useProductId from '../../hooks/useProductId';

const Inventory = () => {
    const{productId}=useParams();
    const[useProduct]=useProductId(productId)
    return (
        <div className='products mb-3 bg-success pb-5 rounded-3 text-center text-white'>
        <img className='w-100' style={{width:'40px'}} src={useProduct.picture} alt="" />
        <h4 className='mt-5'> {useProduct.name}</h4>
        <p>Supplier: {useProduct.supplierName}</p>
        <h5>price: ${useProduct.price}</h5>
        <p>Quantity: {useProduct.quantity}</p>
        <p className='px-3 py-2'>{useProduct.description}</p>

    </div>
    );
};

export default Inventory;