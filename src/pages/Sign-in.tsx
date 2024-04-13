import React, { useState } from 'react';
import axios from 'axios';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';

// interface for the server's response upon a sign-in attempt
type SignInResponse = {
    jwt?: string;
    error?: string;
    username?: string
};

//helper function for email validation
const isValidEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const navigate = useNavigate();

    // signin submision handler function
    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post<SignInResponse>('https://be.ullegadda-ssk.workers.dev/api/v1/user/signin', { email, password });
            //if token is present allow user to visit dashboaed
            if (response.data.jwt) {
                localStorage.setItem('token', response.data.jwt);
                localStorage.setItem('username',response.data.username || " ")
                navigate("/onboard");
            } else if (response.data.error) {
                alert('Sign-in failed: ' + response.data.error);
            }
        } catch (error: any) {
            alert('An error occurred: ' + error.message);
        }
    };

    const emailValid = isValidEmail(email);

    return (
        <div className="flex flex-col items-center justify-center flex-grow w-screen p-8 gap-2 overflow-x-hidden">
            <div className="w-full max-w-96">
            <div className='flex flex-col gap-1 justify-center items-center'>
                    <p className='text-indigo-950 font-medium text-xl'>Welcome</p>
                    <p className='text-gray-500 font-sm text-md'>Sign In for Seamless Experiences!</p>
                </div>
                <form onSubmit={handleSignIn} className="rounded px-6 ">
                    <InputField
                        label='Email'
                        id='email'
                        type="email"
                        placeholder="Enter your email id"
                        onChange={e => setEmail(e.target.value)}
                        className="border-[1px] rounded-md flex-row-reverse"
                        value={email}
                        icon={
                            <svg className={`h-5 w-5 ${emailValid ? 'text-green-500' : 'text-gray-500'}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.94,11A8.26,8.26,0,0,1,21,12a9,9,0,1,1-9-9,8.83,8.83,0,0,1,4,1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                                <polyline points="21 5 12 14 8 10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></polyline>
                            </svg>
                        }
                    />
                    <div className="mb-6">
                        <InputField
                            label='Password'
                            id='password'
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            onChange={e => setPassword(e.target.value)}
                            className="border-[1px] rounded-md"
                            value={password}
                            icon={
                                
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? (
                                        <path d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12C23 12 19 4 12 4C5 4 1 12 1 12ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#6b7280" />
                                    ) : (
                                        <path d="M12 5C5.63636 5 2 12 2 12C2 12 5.63636 19 12 19C18.3636 19 22 12 22 12C22 12 18.3636 5 12 5ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16Z" fill="#6b7280" />
                                    )}
                                </svg>
                            }
                        />
                    </div>
                    <Button type="submit" className="bg-[#e5e7eb] hover:bg-slate-700 text-[#71778e] hover:text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                        Sign In
                    </Button>
                </form>
            </div>
            <Link className='text-[#98a2b3] hover:text-slate-700' to="/reset">Forgot Password?</Link>
        </div>
    );
};

export default SignIn;
