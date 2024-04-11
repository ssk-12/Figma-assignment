import React from 'react';

interface FillupcardProps {
    title: string;
    description: string;
    isActive: boolean;
    onContinue: () => void;
}

const Fillupcard: React.FC<FillupcardProps> = ({ title, description, isActive, onContinue }) => {
    return (
        <div className='flex justify-between items-center gap-4 bg-white p-4 shadow-md rounded-md min-w-[780px]'>
            <div>
                <h3 className='text-[#71778e]'>{title}</h3>
                <p className='text-[#71778e]'>{description}</p>
            </div>
            {isActive && (
                <div className='flex flex-col items-center gap-2'>
                    <input type="text" placeholder="Enter information here..." className="p-2 border rounded" />
                    <button className="p-2 bg-blue-500 text-white rounded" onClick={onContinue}>
                        Continue
                    </button>
                </div>
            )}
            <div>
                <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.03" cy="14.5" r="14" stroke="#71778E" />
                </svg>
            </div>
        </div>
    );
};

export default Fillupcard;
