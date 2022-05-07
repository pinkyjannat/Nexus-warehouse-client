import React from 'react';
import { Col, Row } from 'react-bootstrap';
import stock1 from '../../images/stock/stock1.webp'

const StockPage = () => {
    return (
   <div className='container'>
            <Row className=''>
            <Col className='mt-4'>
            <img className='img-fluid' src={stock1} alt="" />
            </Col>
            <Col className='mt-4'>
             <h1></h1>
            </Col>
            
        </Row>
   </div>
    );
};

export default StockPage;