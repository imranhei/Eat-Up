import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import dhaka from '../Images/Locations/dhaka.jpg'

const Restuarant = () => {

    const [restaurantData, setRestaurantData] = useState(null);
    const location = useLocation();
    const [place, setPlace] = useState(location.pathname.substring(1));

    // useEffect(() => {
    //     async function fetchData() {
    //     const response = await fetch('http://ventia.atpldhaka.com/api/getAuthTokenApi');
    //     const data = await response.json();
    //     // const product = Products.find(p => id === p._id)
    //     // setRestaurantData(data);
    //     console.log(data)
    //     }
    //     fetchData();
    // }, []);
    // https://eat-up.onrender.com/restaurant?location=Gulshan

    useEffect(() => {
        
        async function fetchData() {
            axios.get(`https://eat-up.onrender.com/restaurant?location=${place}`)
            .then(response => {
                setRestaurantData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
        fetchData();
    }, []);

    if(!restaurantData) return null;

    return (
        <div className='mt-12'>
            <div className='w-full h-72'>
                <img className='w-full h-full object-cover' src={dhaka} alt="place picture" />
            </div>
            <div className='flex flex-wrap gap-4 justify-center mt-4'>
            {restaurantData.map((data) => (
                <div>
                <Link key={data.name} to={`/${data.name}`}>
                    <div className='w-56 h-56 overflow-hidden'>
                        <img src={data.img} alt="" className="w-full h-full object-cover hover:scale-110 duration-500 ease-in-out" />
                    </div>
                </Link>
                <h1>{data.name}</h1>
                </div>
            ))}</div>
        </div>
    );
}

export default Restuarant;
