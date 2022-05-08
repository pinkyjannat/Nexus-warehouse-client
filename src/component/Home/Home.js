import React from 'react';
import Banner from '../Banner/Banner';
import Facilities from '../Facilities/Facilities';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import StockPage from '../StockPage/StockPage';

const Home = () => {
    return (
        <div>
             <Banner/>
             <Products/>
            <Facilities/>
            <StockPage/>
            <Footer/>
        </div>
    );
};

export default Home;

