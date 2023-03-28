import React from 'react';
import Banner from './Banner';
import Location from './Location';
import DeliveryProcess from './DeliveryProcess';

const Home = () => {
    return (
        <div className='mt-12'>
            <Banner />
            <Location />
            <DeliveryProcess />
        </div>
    );
};

export default Home;