import React, { useState } from 'react';
import axios from 'axios';
import InputField from '../components/InputField';

export const CalendarForm = () => {
    const [dateOfBirth, setDateOfBirth] = useState('');

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDateOfBirth(event.target.value);
    };

    const handleUpdateDOB = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const token = localStorage.getItem('token');

    
        const userData = {
            dateOfBirth: new Date(dateOfBirth).toISOString()
        };

        try {
            const response = await axios.post('https://be.ullegadda-ssk.workers.dev/api/v1/access/update-dob', userData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert('Date of birth updated successfully!');
            console.log(response);
        } catch (error: any) {
            console.error('Error updating date of birth:', error);
            alert('Failed to update date of birth');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center flex-grow gap-2 overflow-x-hidden flex-wrap">
            <div className="w-full min-w-[780px] flex-wrap">
                <form className="rounded px-6" onSubmit={handleUpdateDOB}>
                    <InputField
                        type="date"
                        id="dateOfBirth"
                        label="Date of Birth"
                        onChange={handleDateChange}
                        value={dateOfBirth}
                        className=' border-[1px] max-w-sm md:max-w-full rounded-lg border-[#e1e6ef]'
                    />
                    <button type="submit" className=" max-w-sm md:max-w-full mt-4 py-[4px] px-4 bg-black text-white rounded hover:bg-slate-600 w-full">
                        Update Date of Birth
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CalendarForm;
