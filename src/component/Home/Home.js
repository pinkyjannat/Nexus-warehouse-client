import React from 'react';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import Products from '../Products/Products';
import StockPage from '../StockPage/StockPage';

const Home = () => {
    return (
        <div>
             <Banner/>
             <Products/>
            <Facilities/>
            <StockPage/>
        </div>
    );
};

export default Home;

