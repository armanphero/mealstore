import React from 'react';
import Lottie from "lottie-react";
import foods from '../assets/foods.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='my-container grid grid-cols-1 lg:grid-cols-2 lg:gap-16 py-10 lg:py-0'>
            <div className='flex flex-col justify-center md:w-[70%] md:mx-auto lg:w-[100%]'>
                <span className='badge'>ON SALE!</span>
                <h1 className='text-4xl font-bold my-6'>A eater lives a thousand lives <span className='text-blue-400'>before he dies</span></h1>
                <p className='text-base tracking-wide lg:text-lg'>Welcome to our culinary circus! Our kitchen is a comedy stage, and each dish is a flavorful punchline. From sizzling spices to jaw-dropping desserts, get ready for a taste adventure that's leave your taste buds applauding. Join us for bites that are pure daredevil delight!</p>
                <div className='mt-5'>
                    <Link to='/meals' className='mr-4'>
                        <button className='btn'>Visit Store <FontAwesomeIcon icon={faCartShopping} /></button>
                    </Link>
                    <Link to='/about'>
                        <button className='font-semibold'>Learn More</button>
                    </Link>

                </div>
            </div>
            <div className='md:w-[70%] md:mx-auto lg:w-[100%]'>
                <Lottie animationData={foods} loop={true} />
            </div>
        </div>
    );
};

export default Home;