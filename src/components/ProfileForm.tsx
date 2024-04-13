import React, { useState } from 'react';
import InputField from '../components/InputField';
import SelectField from '../components/SelectField'; // Import the SelectField component
import axios from 'axios';


const DownArrowIcon = () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24"></rect> <g> <path d="M11 4v12.17l-5.59-5.59L4 12l8 8 8-8-1.41-1.41L13 16.17V4h-2z"></path> </g> </g></svg>
);

const ProfileForm = () => {
    const [fullName, setFullName] = useState('');
    const [secondaryEmail, setSecondaryEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [location, setLocation] = useState('');
    const [country, setcountry] = useState('');
    const [message, setMessage] = useState('');
    const [preferredOptions, setPreferredOptions] = useState('');

    // Options for the SelectField
    const locationOptions = [
        { label: "Banglore", value: "Banglore" },
        { label: "Hyderabad", value: "Hyderabad" },
        { label: "Chicago", value: "chicago" },
    ];

    const countryOptions = [
        { label: "India", value: "India" },
        { label: "Los Angeles", value: "los_angeles" },
        { label: "Chicago", value: "chicago" },

    ];

    const PreferredOptions = [
        { label: "English", value: "English" },
        { label: "Telugu", value: "Telugu" },
        { label: "Hindi", value: "Hindi" },

    ];
    const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value);
    };

    const handleSecondaryEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSecondaryEmail(event.target.value);
    };

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
    };

    const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLocation(event.target.value);
    };
    const handlePreferredOptionsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPreferredOptions(event.target.value);
    };

    const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setcountry(event.target.value);
    };
    const isValidEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

    const handleUpdateProfile = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post('https://be.ullegadda-ssk.workers.dev/api/v1/access/update-profile', {
                fullName,
                secondaryEmail,
                phoneNumber,
                location,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response);
            setMessage('Profile updated successfully!');
        } catch (error: any) {
            setMessage(error.response?.data?.error || 'Failed to update profile');
        }
    };

    const emailValid = isValidEmail(secondaryEmail);
    return (
        <div className="flex flex-col items-center justify-center flex-grow gap-2 overflow-x-hidden flex-wrap">
            <div className="w-full md:min-w-[780px] flex-wrap">
                <form className="rounded px-6" onSubmit={handleUpdateProfile}>
                    <InputField
                        type="text"
                        id="fullName"
                        placeholder="Ullegadda Saisrikanta"
                        label="Full Name"
                        onChange={handleFullNameChange}
                        value={fullName}
                        className='border-[1px] rounded-lg border-[#e1e6ef]'
                    />
                    <div className='flex-1 md:flex justify-between items-center gap-2 flex-wrap'>
                        {/* <InputField
                            type="text"
                            id="secondaryEmail"
                            placeholder="Enter your secondary email"
                            label="Secondary Email"
                            onChange={handleSecondaryEmailChange}
                            value={secondaryEmail}
                            className='w-80'
                        /> */}
                        <InputField
                            label='Email'
                            id='email'
                            type="email"
                            placeholder="Enter your email id"
                            onChange={handleSecondaryEmailChange}
                            className='w-80 border-[1px] rounded-lg border-[#e1e6ef]'
                            value={secondaryEmail}
                            icon={
                                <svg className={`h-5 w-5 ${emailValid ? 'text-green-500' : 'text-gray-500'}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.94,11A8.26,8.26,0,0,1,21,12a9,9,0,1,1-9-9,8.83,8.83,0,0,1,4,1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                                    <polyline points="21 5 12 14 8 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></polyline>
                                </svg>
                            }
                        />
                        <InputField
                            type="text"
                            id="phoneNumber"
                            placeholder="Enter your phone number"
                            label="Phone Number"
                            onChange={handlePhoneNumberChange}
                            value={phoneNumber}
                            className='w-80 border-[1px] rounded-lg border-[#e1e6ef]'
                            icon={
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    className="text-current"
                                >
                                    <circle cx="12" cy="12" r="12" fill="url(#pattern0_102_438)" />
                                    <defs>
                                        <pattern
                                            id="pattern0_102_438"
                                            patternContentUnits="objectBoundingBox"
                                            width="1"
                                            height="1"
                                        >
                                            <use
                                                xlinkHref="#image0_102_438"
                                                transform="translate(-0.249064) scale(0.00374532)"
                                            />
                                        </pattern>
                                        <image
                                            id="image0_102_438"
                                            width="400"
                                            height="267"
                                            xlinkHref="data:image/png;base64,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"
                                        />
                                    </defs>
                                </svg>


                            }
                        />

                    </div>
                    <div className='flex-1 md:flex justify-between items-center gap-2 flex-wrap md:flex-nowrap'>
                        <SelectField
                            options={locationOptions}
                            placeholder="Select your City"
                            label="City"
                            id="City"
                            onChange={handleLocationChange}
                            value={location}
                            className='w-80 border-[2px] rounded-lg border-[#e1e6ef]'
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>

                            }
                            onIconClick={() => console.log("Icon clicked")}
                        />
                        <SelectField
                            options={countryOptions}
                            placeholder="Select your country"
                            label="country"
                            id="country"
                            onChange={handleCountryChange}
                            value={country}
                            className='w-80 border-[2px] rounded-lg border-[#e1e6ef]'
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>

                            }
                            onIconClick={() => console.log("Icon clicked")}
                        />
                        

                    </div>
                    <SelectField
                            options={PreferredOptions}
                            placeholder="Preferred language "
                            label="Choose your Preferred language "
                            id="Preferred language "
                            onChange={handlePreferredOptionsChange}
                            value={preferredOptions}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>

                            }
                            className='border-[2px] rounded-lg border-[#e1e6ef]'
                            onIconClick={() => console.log("Icon clicked")}
                        />

                    <button type="submit" className="mt-4 py-[4px] px-4 bg-black text-white rounded hover:bg-slate-600 w-full">Update Profile</button>
                    {message && (
                        <p className="mt-4 text-center text-lg">{message}</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ProfileForm;
