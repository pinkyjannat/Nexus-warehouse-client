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
            .then(res=> res.json())
            .then(result =>{
                console.log(result);
            } )
    };
    return (
        <div>
              <h2>This is add page</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Service" />
            </form>
            
        </div>
    );
};

export default AddInventory;