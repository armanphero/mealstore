import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    const {status, statusText, data} = error;
    console.log(status, statusText, data);
    return (
        <div>
            <h1 className='text-5xl text-red-500 text-center font-bold my-5'>{status}</h1>
            <p className='text-xl text-red-500 text-center font-bold my-5'>{statusText}</p>
            <p className='text-xl text-red-500 text-center font-bold my-5'>{data}</p>
        </div>
    );
};

export default ErrorPage;