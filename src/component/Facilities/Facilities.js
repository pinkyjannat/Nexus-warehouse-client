import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import {MdOutlineLocalShipping } from 'react-icons/md';
import {AiOutlineArrowRight } from 'react-icons/ai';
import {FaPeopleArrows } from 'react-icons/fa';
import {FaWarehouse } from 'react-icons/fa';

const Facilities = () => {
    return (
        <div className='container'>
            <p className='text-center fs-3'><span className="text-primary fs-1">Advanced features</span> made simple</p>
            <p className='text-center fs-3'>Use cutting-edge automation and advanced routes to manage any warehouse</p>
            <hr />
            <CardGroup >
                <Card className='border-0 '>
                    <Card.Body className='text-center ms-5'>
                    <p><MdOutlineLocalShipping  className='me-3' size={70}/>< AiOutlineArrowRight  className='me-3' size={40}/><FaPeopleArrows size={70}/></p>
                    <h3 className='text-primary'>Drop Shipping</h3>
                    </Card.Body>
                </Card>
                <Card className='border-0 '>
                    <Card.Body className='text-center ms-5'>
                    <p><MdOutlineLocalShipping  className='me-3 ' size={70}/>< AiOutlineArrowRight  className='me-3' size={40}/><MdOutlineLocalShipping size={70}/></p>
                    <h3 className='text-primary'>Cross Docking</h3>
                    </Card.Body>
                </Card>
                <Card className='border-0'>
                    <Card.Body className='text-center ms-5'>
                    <p><FaWarehouse  className='me-3' size={70}/>< AiOutlineArrowRight  className='me-3' size={40}/><FaWarehouse size={70}/></p>
                    <h3 className='text-primary'>Multi Warehouse </h3>
                    </Card.Body> 
                </Card>
            </CardGroup>
            <hr />
        </div>
    
    );
};

export default Facilities;