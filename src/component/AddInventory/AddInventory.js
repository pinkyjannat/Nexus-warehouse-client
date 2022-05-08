import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
// import useUpdateProduct from '../../../hooks/useUpdateProduct';


const AddInventory = () => {

    const { productId } = useParams();
    // const [updateProduct] = useUpdateProduct(productId);
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user?.email,
            // name:user?.displayName,
            productId: productId,
            picture: event.target.picture.value,
            name: event.target.name.value,
            price: event.target.price.value,
            quantity: event.target.quantity.value,
            supplierName: event.target.supplierName.value,
            description: event.target.description.value,
        }
        axios.post('https://stark-island-35591.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            })
    }

    return (
        <div className='container bg-secondary py-4 w-50 mx-auto text-white my-2 rounded-3' style={{ height: '500px' }}>
          <h3 className='text-center text-dark'>Add Items</h3>
            <form onSubmit={handlePlaceOrder} >
                <br />
                <input className='w-100 mb-2 fs-4 rounded-pill text-center' type="email" name='email' value={user?.email} placeholder='email' readOnly />
                <br />
                <input className='w-100 mb-2 fs-4 rounded-pill text-center' type="text" name='name' placeholder='Products Name' required />
                <input className='w-100 mb-2 rounded-pill fs-4 text-center' type="number" name='price' placeholder='price' required />
                <input className='w-100 mb-2 rounded-pill fs-4 text-center' type="text" name='supplierName' placeholder='Supplier Name' required />
                <input className='w-100 mb-2 rounded-pill fs-4 text-center' type="number" name='quantity' placeholder='Quantity' required />
                <input className='w-100 mb-2 rounded-pill fs-4 text-center' type="text" name='description' placeholder='Product Description' required />
                <br />
                <input className='w-100 mb-2 rounded-pill fs-4 text-center' type="text" name='picture' placeholder='image URL' required />
                <br />
                <input className='btn btn-primary rounded-pill fs-4 text-center' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddInventory;