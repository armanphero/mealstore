import React from 'react';

const Loader = () => {
    return (
        <div className='my-container min-h-[calc(100vh-136px)] flex justify-center items-center'>
            <div className='text-6xl font-thin'>
                <h1 className='inline-block'>L</h1>
                <div className='inline-block h-[10px] w-[10px] p-3 border-8 border-dashed border-blue-400 animate-spin rounded-full'></div>
                <h1 className='inline-block'>ading...</h1>
            </div>
        </div>
    );
};

export default Loader;