import React, { useState } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

const ExperienceForm = () => {

    const [inputText, setInputText] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Submitted Text:', inputText);
        // Here, you can send the inputText to a server or another component as needed
    };


    return (

        <div className="flex flex-col items-center justify-center flex-grow gap-2 overflow-x-hidden">
            <div className="w-full min-w-[780px]">
                <form className="rounded px-6 ">
                    <InputField
                        type="text"
                        id="full name"
                        placeholder="Saisrikanta"
                        label="Full Name"
                        onChange={handleChange}
                        value={inputText}
                    />
                    <div className='flex justify-between items-center'>
                    <InputField
                        type="text"
                        id="secondary email"
                        placeholder="Enter your secondary email"
                        label="Secondary Email"
                        onChange={handleChange}
                        value={inputText}
                        className='w-80'
                    />
                    <InputField
                        type="text"
                        id="phn"
                        placeholder="Enter your phone number"
                        label="Phone Number"
                        onChange={handleChange}
                        value={inputText}
                        className='w-80'
                    />
                    </div>
                </form>

                

            </div>

        </div>
    );
};

export default ExperienceForm;


