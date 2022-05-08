
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const MyItems = () => {
    const [users, setUsers] = useState([]);
    // const [Refresh, setRefresh] =React.useState(false)
    const [user ]= useAuthState(auth)
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

   
    useEffect( () =>{
        fetch('https://stark-island-35591.herokuapp.com/order')
        .then(res => res.json())
        .then(data => setUsers(data));
    }, [user]);

    const handleUserDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            console.log('deleting user with id, ', id);
            const url = `https://stark-island-35591.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    console.log('deleted');
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining);
                }
            })
        }
    }

    useEffect(() => {
        const getOrders = async () => {
            const email = user?.email
            const url = `https://stark-island-35591.herokuapp.com/order?email=${email}`
            try {
                const { data } = await axiosPrivate.get(url);
                setProducts(data)
            }
            catch (error) {
                console.log(error.message);
                if(error.response.status === 401 ||error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }

        }
        getOrders()

    }, [user])
    
   
    return (
        <div>
          
            <h2 className='text-center'>your order: {products.length}</h2>
            {
            products.map(product =>
                <div key={product._id} className='products mb-3 pb-5 rounded-3 text-center shadow-sm'>
                <img className='img-fluid' style={{width:'200px'}} src={product.picture} alt="" />
                <h3>{product.name}</h3>
                <h5>{product.supplierName}</h5>
                <h5>Price: ${product.price}</h5>
                <p>{product.description}</p>
                <button className='btn btn-danger px-4' onClick={()=>handleUserDelete(product._id , window.location.reload(false))}>Delete Item</button>
                </div>
           )
        }
        </div>
    );
};

export default MyItems;