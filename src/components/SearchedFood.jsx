import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from './Meal';

const SearchedFood = () => {
    const {meals} = useLoaderData();
    // console.log(meals);
    if(meals === null){
        return (
            <div className='my-container my-5'>
                <h1 className='text-red-500 text-xl md:text-5xl text-center font-semibold'>Couldn't find the searched food</h1>
            </div>
        )
    }
    return (
        <div className='meals my-container'>
            <h1>this is searched food compo</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default SearchedFood;