import React, { useState } from 'react';
import InputField from '../components/InputField';
import axios from 'axios';

const ProfileForm = () => {
    const [fullName, setFullName] = useState('');
    const [secondaryEmail, setSecondaryEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value);
    };

    const handleSecondaryEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSecondaryEmail(event.target.value);
    };

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    const handleUpdateProfile = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post('https://be.ullegadda-ssk.workers.dev/api/v1/access/update-profile', {
                fullName,
                secondaryEmail,
                phoneNumber,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setMessage('Profile updated successfully!');
        } catch (error: any) {
            setMessage(error.response?.data?.error || 'Failed to update profile');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center flex-grow gap-2 overflow-x-hidden">
            <div className="w-full md:min-w-[780px] sm:flex-wrap">
                <form className="rounded px-6" onSubmit={handleUpdateProfile}>
                    <InputField
                        type="text"
                        id="fullName"
                        placeholder="Full Name"
                        label="Full Name"
                        onChange={handleFullNameChange}
                        value={fullName}
                    />
                    <div className='flex-1 md:flex justify-between items-center'>
                        <InputField
                            type="text"
                            id="secondaryEmail"
                            placeholder="Enter your secondary email"
                            label="Secondary Email"
                            onChange={handleSecondaryEmailChange}
                            value={secondaryEmail}
                            className='w-80'
                        />
                        <InputField
                            type="text"
                            id="phoneNumber"
                            placeholder="Enter your phone number"
                            label="Phone Number"
                            onChange={handlePhoneNumberChange}
                            value={phoneNumber}
                            className='w-80'
                        />
                    </div>
                    <button type="submit" className="bmt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Update Profile</button>
                    {message && (
                        <p className="mt-4 text-center text-lg">{message}</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;
