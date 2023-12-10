import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const MealDetails = () => {
    const [isFold, setIsFold] = useState(true);
    const { meals } = useLoaderData();
    const { strMealThumb, strMeal, strArea, strCategory, strInstructions } = meals[0];
    console.log();

    return (
        <div className='my-container min-h-[calc(100vh-136px)] flex items-center'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:w-[80%] border rounded-lg mx-auto p-5 md:p-10 mt-10 xl:mt-0'>
                <div>
                    <img src={strMealThumb} alt="meal img" className='w-full' />
                </div>
                <div>
                    <span className='badge'>{strCategory}</span>
                    <h1 className='text-4xl font-bold my-5'>{strMeal}</h1>
                    <p className='mb-2'>Area : {strArea}</p>
                    {
                        isFold && <p>{strInstructions.substring(0, 150)}... <span className='text-blue-400 cursor-pointer' onClick={() => setIsFold(!isFold)}>Read More</span></p>
                    }
                    {
                        !isFold && <p>{strInstructions}... <span className='text-blue-400 cursor-pointer' onClick={() => setIsFold(!isFold)}>Read Less</span></p>
                    }
                    <button className='btn mt-5'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;