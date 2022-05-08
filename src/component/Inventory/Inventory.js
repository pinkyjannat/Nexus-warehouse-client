import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';


const Inventory = () => {
    const{productId}=useParams();
    const[updateProduct,setUpdateProduct]=useState([true]);
    
   useEffect(()=>{
    fetch(`http://localhost:5000/update/${productId}`)
    .then(res=>res.json())
    .then(data=>setUpdateProduct(data))
},[updateProduct])
  
   const handleDelivery = event =>{
       const quantity= updateProduct.quantity -  1;
       const sold = updateProduct.sold + 1;
      const user = {quantity, sold};

      //send data in server for update qauntity
      fetch(`http://localhost:5000/quantity/${productId}`,{
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
   // send data to server to update the restock quantity
   const handleIncreaseQuantity = event =>{
    event.preventDefault();
    const quantity =parseInt(event.target.number.value) + parseInt(updateProduct.quantity) ;
    // console.log(restock);
    const user = {quantity};

    fetch(`http://localhost:5000/restock/${productId}`,{
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
        <Card className='text-center'>
           <div><img  style={{width:'200px'}} src={updateProduct?.picture} alt="" /></div>
            <h4 className='mt-5'> {updateProduct?.name}</h4>
            <p>Supplier: {updateProduct?.supplierName}</p>
            <h5>price: ${updateProduct?.price}</h5> <p className='px-3 py-2'>{updateProduct?.description}</p>
            <p>Quantity: {updateProduct?.quantity}</p>
            <p>sold: {updateProduct?.sold}</p>
            <button onClick={()=>handleDelivery()}>Delivery</button>
            <form onSubmit={handleIncreaseQuantity}>
                <input type="number" name="number" placeholder='add more' required />
                <br />
               
                <input type="submit" value="Restock" />
            </form>
            <Link to='/manage'> <button> Manage Inventories</button></Link>
           
            
        </Card>
    );
}

export default Inventory;