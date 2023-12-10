import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({ meal }) => {
    const { strMeal, strMealThumb, idMeal } = meal;
    // console.log(meal);
    return (
        <Link to={`/meal/${idMeal}`}>
            <div className='single-meal p-5 shadow-lg rounded-lg hover:-translate-y-6 duration-200'>
                <div className='relative'>
                    <img src={strMealThumb} alt="meal img" />
                    <h2 className='absolute bottom-0 left-0 bg-red-400 w-full p-2 text-white font-bold'>{strMeal.length > 30 ? strMeal.substring(0, 25) + '..' : strMeal}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Meal;