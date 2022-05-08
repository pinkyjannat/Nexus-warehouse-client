import{ useEffect, useState } from 'react';

const useProductId = (productId) => {
    const[useProduct,setUseProduct]=useState();
    useEffect(()=>{

        const url = `https://stark-island-35591.herokuapp.com/update/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUseProduct(data))


    },[productId])
    return [useProduct]
        
    
};

export default useProductId;