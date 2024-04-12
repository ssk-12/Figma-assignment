import React, { useState } from 'react';
import InputField from '../components/InputField';
// import Button from '../components/Button';

const ExperienceForm = () => {

    const [inputText, setInputText] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };



    return (

        <div className="flex flex-col items-center justify-center flex-grow gap-2 overflow-x-hidden">
            <div className="w-full min-w-[780px]">
                <form className="rounded px-6 ">
                    <InputField
                        type="text"
                        id="Desgination"
                        placeholder="Desgination"
                        label="Desgination"
                        onChange={handleChange}
                        value={inputText}
                    />
                    <div className='flex justify-between items-center'>
                    <InputField
                        type="text"
                        id="Industry"
                        placeholder="Enter your Industry"
                        label="Industry"
                        onChange={handleChange}
                        value={inputText}
                        className='w-80'
                    />
                    <InputField
                        type="text"
                        id="Functional Areas"
                        placeholder="Functional Areas"
                        label="Functional Areas"
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


