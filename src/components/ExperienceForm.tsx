import React, { useState } from 'react';
import axios from 'axios';
import InputField from '../components/InputField';
import SelectField from './SelectField';

const ExperienceForm = () => {
    const [designation, setDesignation] = useState('');
    const [industry, setIndustry] = useState('');
    const [functionalAreas, setFunctionalAreas] = useState('');
    const [message, setMessage] = useState('');
    const [preferredOptions, setPreferredOptions] = useState('');
    
    const PreferredOptions = [
        { label: "12 Years", value: "12 Years" },
        { label: "2 Years", value: "2 Years" },
        { label: "5 Years", value: "5 Years" },

    ];

    const handlePreferredOptionsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPreferredOptions(event.target.value);
    };

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
        <div className="flex flex-col items-center justify-center flex-grow gap-2 overflow-x-hidden flex-wrap">
            <div className="w-full min-w-[780px]">
                <form className="rounded px-6" onSubmit={handleUpdateExperience}>
                    <div className='flex justify-between items-center bg-[#f1f3f9] rounded-lg p-3'>

                        <div>
                            <h3 className='text-black text-md font-semibold'>Corporate experience</h3>
                            <p className='text-light text-sm text-[#71778e]'>Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>

                        </div>
                        <div>
                        <SelectField
                            options={PreferredOptions}
                            placeholder="12 Years "
                            label=""
                            id="experirnce "
                            onChange={handlePreferredOptionsChange}
                            value={preferredOptions}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>

                            }
                            className=' border-[1px] rounded-lg border-[#e1e6ef]'
                            onIconClick={() => console.log("Icon clicked")}
                        />
                        </div>

                    </div>
                    <InputField
                        type="text"
                        id="designation"
                        placeholder="Designation"
                        label="Designation"
                        onChange={(e) => setDesignation(e.target.value)}
                        value={designation}
                        className=' border-[1px] rounded-lg border-[#e1e6ef]'
                    />
                    <div className='flex justify-between items-center'>
                        <InputField
                            type="text"
                            id="industry"
                            placeholder="Enter your Industry"
                            label="Industry"
                            onChange={(e) => setIndustry(e.target.value)}
                            value={industry}
                            className='w-80 border-[1px] rounded-lg border-[#e1e6ef]'
                        />
                        <InputField
                            type="text"
                            id="functionalAreas"
                            placeholder="Functional Areas"
                            label="Functional Areas"
                            onChange={(e) => setFunctionalAreas(e.target.value)}
                            value={functionalAreas}
                            className='w-80 border-[1px] rounded-lg border-[#e1e6ef]'
                        />
                    </div>
                    <button type="submit" className="mt-4 py-[4px] px-4 bg-black text-white rounded hover:bg-slate-600 w-full">Update Experience</button>
                    {message && (
                        <p className="mt-4 text-center text-lg">{message}</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ExperienceForm;
