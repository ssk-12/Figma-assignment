import React, { useState } from 'react';
import axios from 'axios';
import InputField from '../components/InputField';

const ExperienceForm = () => {
    const [designation, setDesignation] = useState('');
    const [industry, setIndustry] = useState('');
    const [functionalAreas, setFunctionalAreas] = useState('');
    const [message, setMessage] = useState('');

    const handleUpdateExperience = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const token = localStorage.getItem('token');

        try {
            const response = await axios.post('https://be.ullegadda-ssk.workers.dev/api/v1/access/update-experience', {
                designation, industry, functionalAreas
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response)
            setMessage('Experience updated successfully!');
        } catch (error: any) {
            setMessage(error.response?.data?.error || 'Failed to update experience');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center flex-grow gap-2 overflow-x-hidden">
            <div className="w-full min-w-[780px]">
                <form className="rounded px-6" onSubmit={handleUpdateExperience}>
                    <InputField
                        type="text"
                        id="designation"
                        placeholder="Designation"
                        label="Designation"
                        onChange={(e) => setDesignation(e.target.value)}
                        value={designation}
                    />
                    <div className='flex justify-between items-center'>
                        <InputField
                            type="text"
                            id="industry"
                            placeholder="Enter your Industry"
                            label="Industry"
                            onChange={(e) => setIndustry(e.target.value)}
                            value={industry}
                            className='w-80'
                        />
                        <InputField
                            type="text"
                            id="functionalAreas"
                            placeholder="Functional Areas"
                            label="Functional Areas"
                            onChange={(e) => setFunctionalAreas(e.target.value)}
                            value={functionalAreas}
                            className='w-80'
                        />
                        
                    </div>
                    <button type="submit" className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Update Experience</button>
                    {message && (
                        <p className="mt-4 text-center text-lg">{message}</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ExperienceForm;
