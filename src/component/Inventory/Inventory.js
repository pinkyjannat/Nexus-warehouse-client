import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductId from '../../hooks/useProductId';

const Inventory = () => {
    const{productId}=useParams();
    const[updateProduct,setUpdateProduct]=useState([true]);


    useEffect(()=>{
        fetch(`http://localhost:5000/update/${productId}`)
        .then(res=>res.json())
        .then(data=>setUpdateProduct(data))
    },[updateProduct])
    

//     const handleDelivery = event =>{
//         const newQuantity = useProduct?.quantity -  1;
//         const sold = useProduct?.sold + 1;
//         const user = {quantity, sold};
//     }

//     // update qauntity
//       fetch(`http://localhost:5000/quantity/${productId}`,{
//           method: 'PUT',
//           headers:{
//               'content-type' : 'application/json',
//           },
//           body: JSON.stringify(user),
//       })
//       .then(response => response.json())
//       .then(data =>{

//       })
//       .catch((error)=>{
//           console.error('Error:', error)
//       })
//    }
//     // send data to server to update the restock quantity
//     const handleIncreaseQuantity = event =>{
//         event.preventDefault();
//         const quantity =parseInt(event.target.number.value) + parseInt(updateProduct.quantity) ;
//         // console.log(restock);
//         const user = {quantity};
    
//         fetch(`http://localhost:5000/restock/${productId}`,{
//             method: 'PUT',
//             headers:{
//                 'content-type' : 'application/json',
//             },
//             body: JSON.stringify(user),
//         })
//         .then(response => response.json())
//         .then(data =>{
    
//         })
//         .catch((error)=>{
//             console.error('Error:', error)
//         })
    
//        }


    // return (
    //     <div className='text-center'>
    //        <div><img  style={{width:'200px'}} src={useProduct?.picture} alt="" /></div>
    //         <h4 className='mt-5'> {useProduct?.name}</h4>
    //         <p>Supplier: {useProduct?.supplierName}</p>
    //         <p>sold: {useProduct?.sold}</p>
    //         <h5>price: ${useProduct?.price}</h5> <p className='p-2'>{useProduct?.description}</p>
    //         <p>Quantity: {useProduct?.quantity}</p>
    //         <button onClick={()=>handleDelivery()}>Delivery</button>
    //         <form onSubmit={handleIncreaseQuantity}>
    //             <input type="number" name="number" placeholder='add more' required />
    //             <br />
               
    //             <input type="submit" value="Restock" />
    //         </form>
    // <Link to='/manage'> <button> Manage Inventories</button></Link>
    //     </div>
    // );
};

export default Inventory;