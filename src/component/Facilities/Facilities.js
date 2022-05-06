import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import {MdOutlineLocalShipping } from 'react-icons/md';
import {AiOutlineArrowRight } from 'react-icons/ai';
import {FaPeopleArrows } from 'react-icons/fa';
import {FaWarehouse } from 'react-icons/fa';

const Facilities = () => {
    return (
        <div className='container'>
            <p className='text-center fs-3'><span className="text-secondary fs-1">Advanced features</span> made simple</p>
            <p className='text-center fs-4'>Use cutting-edge automation and advanced routes to manage any warehouse</p>
            <hr />
            <CardGroup>
                <Card className='border-0 '>
                    <Card.Body className='text-center'>
                    <p><MdOutlineLocalShipping  className='me-3' size={70}/>< AiOutlineArrowRight  className='me-3' size={40}/><FaPeopleArrows size={70}/></p>
                    <h3 className='text-secondary'>Drop Shipping</h3>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Body className='text-center'>
                    <p><MdOutlineLocalShipping  className='me-3' size={70}/>< AiOutlineArrowRight  className='me-3' size={40}/><MdOutlineLocalShipping size={70}/></p>
                    <h3 className='text-secondary'>Cross Docking</h3>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Body className='text-center'>
                    <p><FaWarehouse  className='me-3' size={70}/>< AiOutlineArrowRight  className='me-3' size={40}/><FaWarehouse size={70}/></p>
                    <h3 className='text-secondary'>Multi Warehouse </h3>
                    </Card.Body> 
                </Card>
            </CardGroup>
            <hr />
        </div>
    
    );
};

export default Facilities;