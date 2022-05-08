import React from 'react';
import { Accordion} from 'react-bootstrap';
import stock1 from '../../images/stock/stock1.webp'

const StockPage = () => {
    return (
      <div className='container'>
   <div className='row'>
            <div className='col-lg-6'>
            <img className='img-fluid' src={stock1} alt="" />
            </div>
            <div className='mt-4 col-lg-6'>
             <p className='text-secondary fs-1'>Less <span className='text-primary fs-1'>Stock</span>, No <span className='text-primary fs-1'>Stockouts</span></p>
             <h2>With fully automated replenishment.</h2>
             <p>Use order points and automated RFQs to make your supply chain more efficient than ever</p>
             <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>How we stock our product?</Accordion.Header>
    <Accordion.Body>
      Well. we have a good management system and our own management app for stocking product . Employees are smart enough to properly use our nexus management app to make sure we are up to date with stockings!
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>From where we stock our product?</Accordion.Header>
    <Accordion.Body>
     We stock our products from different parts of the world.We believe using modern technology changes our lives. once we get a better option to upgrade our products, we never delay!
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="0">
    <Accordion.Header >why we never in believe in extra stock?</Accordion.Header>
    <Accordion.Body>
     We always try to upgrade our product when one item is available in market.from the begining we are trying to stock limited product as per their popularity in market.when we realize this item is selling so first ,we dont delay to restock that and when we find out one product is loosing its market popularity we stopped restocking that! it is as simple as it is!
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
            </div>
            
        </div>
   </div>
  
    );
};

export default StockPage;