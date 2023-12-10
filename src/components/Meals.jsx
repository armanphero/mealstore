import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Meal from './Meal';
import Loader from './Loader';

const Meals = () => {
    const { meals } = useLoaderData();
    // console.log(meals);
    return (
        <div className='meals my-container'>
            <h1>this is meals route</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;