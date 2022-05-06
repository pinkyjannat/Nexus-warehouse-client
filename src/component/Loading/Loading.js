import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center' style={{width: '600px', height:'600px'}}>
        <Spinner animation="border" variant="secondary" />
    </div>
    );
};

export default Loading;