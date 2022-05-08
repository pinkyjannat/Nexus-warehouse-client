import React from 'react';
import notfound from '../../images/notfound/notfound.webp'

const NotFound = () => {
    return (
       <div className='container'>
            <div className='d-flex justify-content-center'>
            <img src={notfound} alt="" />
        </div>
       </div>
    );
};

export default NotFound;