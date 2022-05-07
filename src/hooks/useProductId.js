import{ useEffect, useState } from 'react';

const useProductId = (productId) => {
    const[useProduct,setUseProduct]=useState();
    useEffect(()=>{

        const url = `http://localhost:5000/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUseProduct(data))


    },[productId])
    return [useProduct]
        
    
};

export default useProductId;