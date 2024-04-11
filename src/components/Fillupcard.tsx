import React from 'react';


const Fillupcard = ({ title, description }:any) => {
    return (
        <div className='flex justify-between items-center gap-4 bg-white p-4 shadow-md rounded-md min-w-[780px]'>
            <div>
                <h3 className='text-[#71778e]'>{title}</h3>
                <p className='text-[#71778e]'>{description}</p>
            </div>
            <div>
                <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.03" cy="14.5" r="14" stroke="#71778E" />
                </svg>
            </div>
        </div>
    );
};

export default Fillupcard;
