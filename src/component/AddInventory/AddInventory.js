import React from 'react';
import { useForm } from 'react-hook-form';



const AddInventory = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div className='container bg-secondary py-5 w-50 mx-auto text-white my-5 rounded' style={{ height: '400px' }}>

            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-center'>Add Your Product</h2>
                <input className='mb-5 mx-4' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-4 mx-5' placeholder='Description' {...register("description")} />
                <input className='mb-3 mx-5' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-3 mx-5' placeholder='Photo URL' type="text" {...register("picture")} />
                <input className='mt-3 mx-5' type="submit" value="Add Service" />
            </form>

        </div>
    );
};

export default AddInventory;