import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';


const Inventory = () => {
    const{productId}=useParams();
    const[updateProduct,setUpdateProduct]=useState([true]);
    
   useEffect(()=>{
    fetch(`https://stark-island-35591.herokuapp.com/update/${productId}`)
    .then(res=>res.json())
    .then(data=>setUpdateProduct(data))
},[updateProduct])
  
   const handleDelivery = event =>{
       const quantity= updateProduct.quantity -  1;
       const sold = updateProduct.sold + 1;
      const user = {quantity, sold};

      //send data in server for update qauntity
      fetch(`https://stark-island-35591.herokuapp.com/${productId}`,{
          method: 'PUT',
          headers:{
              'content-type' : 'application/json',
          },
          body: JSON.stringify(user),
      })
      .then(response => response.json())
      .then(data =>{

      })
      .catch((error)=>{
          console.error('Error:', error)
      })
    

   }
   //  update the restock quantity
   const handleIncreaseQuantity = event =>{
    event.preventDefault();
    const quantity =parseInt(event.target.number.value) + parseInt(updateProduct.quantity) ;
   
    const user = {quantity};

    fetch(`https://stark-island-35591.herokuapp.com/restock/${productId}`,{
        method: 'PUT',
        headers:{
            'content-type' : 'application/json',
        },
        body: JSON.stringify(user),
    })
    .then(response => response.json())
    .then(data =>{

    })
    .catch((error)=>{
        console.error('Error:', error)
    })

   }

    return (
        <div className='text-center'>
           <div><img  style={{width:'200px'}} src={updateProduct?.picture} alt="" /></div>
            <h4 className='mt-5'> {updateProduct?.name}</h4>
            <p>Supplier: {updateProduct?.supplierName}</p>
            <h5>price: ${updateProduct?.price}</h5> <p className='px-3 py-2'>{updateProduct?.description}</p>
            <p>Quantity: {updateProduct?.quantity}</p>
            <p>sold: {updateProduct?.sold}</p>
            <div className='d-flex justify-content-center'><p className='px-4 mx-3'> <button className='btn btn-info px-3' onClick={()=>handleDelivery()}>Delivery</button></p>
            <form onSubmit={handleIncreaseQuantity}>
                <input type="number" name="number" placeholder='add more' required />
                <br />
               
                <input type="submit" className='btn btn-primary mt-2' value="Restock" />
            </form>
            <Link to='/manage'> <button className='text-decoration-none'> Manage Inventories</button></Link>
            </div>
        </div>
    );
}

export default Inventory;