import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface CardProps {
    onGetStarted: () => void;
}

const Card: React.FC<CardProps> = ({ onGetStarted }) => {
    const [buttonText, setButtonText] = useState("Get Started");
    const navigate = useNavigate();

    useEffect(() => {
        if (buttonText === "Finish Setup") {
            navigate('/onboard');
        }
    }, [buttonText]);

    const handleClick = () => {
        if (buttonText === "Get Started") {
            onGetStarted();
            setButtonText("Finish Setup");
        } else {
            navigate("/details")
            setButtonText("Get Started");
        }
    };

    return (
        <div className='flex justify-center items-start gap-4 bg-white p-4 shadow-md rounded-md md:min-w-[780px] max-w-screen-sm flex-wrap'>
            <div className='sm: flex sm:flex-col flex-wrap'>
                <div>
                    <h3 className='text-[#14213d] text-xl'>Hello <span className='font-bold'>User : {localStorage.getItem("username")}</span>,</h3>
                    <p className='text-[#14213d]'>Get the process started in less than 10 minutes. Let us handle the rest.</p>
                </div>
                <div className='flex justify-start items-center gap-3 mt-4'>
                    <button className='bg-[#14213d] text-white p-1 px-4 rounded-xl' onClick={handleClick}>
                        {buttonText}
                    </button>
                    <h3 className='text-[#71778e]'>Having Trouble?</h3>
                    <a className="text-[#14213d] underline" href="/help">Get help</a>
                </div>
            </div>
            <svg width="111" height="111" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.01" x="0.0300293" y="0.5" width="110" height="110" fill="white" fill-opacity="0.01" />
                    <circle cx="5.43247" cy="97.0183" r="1.72227" fill="#F9A826" />
                    <rect x="29.0657" y="94.123" width="4.53051" height="4.53051" fill="#FF6584" />
                    <circle cx="29.0918" cy="97.1462" r="1.72227" fill="#F9A826" />
                    <path d="M29.8234 11.1945L19.7046 26.9896L41.4431 18.6383L29.8234 11.1945Z" fill="#F1F1F1" />
                    <path d="M42.2865 19.7431L19.1129 28.6457L0.0300293 58.4337L62.5511 98.4859L92.4206 51.86L42.2865 19.7431Z" fill="#F1F1F1" />
                    <path d="M79.8103 36.3972L79.8978 36.4875L78.6375 33.4506L66.7 45.2028L63.978 51.7622L79.8103 36.3972Z" fill="#F9A826" />
                    <path d="M78.5856 33.3217L77.1061 29.7564L69.3824 38.7356L66.9478 44.6023L78.4974 33.2319L78.5856 33.3217Z" fill="#F9A826" />
                    <path d="M76.9567 29.5465L77.0519 29.6286L75.1072 24.9423L69.6917 37.9923L76.9567 29.5465Z" fill="#F9A826" />
                    <path d="M90.4093 61.8154L79.9498 36.611L63.7344 52.3479L59.8055 61.8154L44.5037 98.6887H75.1073H105.711L90.4093 61.8154Z" fill="#F9A826" />
                    <path d="M1.0126 98.7133H109.308" stroke="#3F3D56" stroke-width="2" />
                    <path d="M81.5172 75.4048L70.8913 89.3002V94.8687L84.761 75.4048H81.5172Z" fill="#3F3D56" />
                    <path d="M76.9516 75.4048L70.8913 82.7189V88.886L81.2005 75.4048H76.9516Z" fill="#3F3D56" />
                    <path d="M76.6248 75.4048H70.8913V82.3244L76.6248 75.4048Z" fill="#3F3D56" />
                    <path d="M85.0699 75.4048L70.8913 95.3024V98.6866H106.129V75.4048H85.0699Z" fill="#3F3D56" />
                    <circle cx="100.088" cy="62.1925" r="9.94195" fill="#2F2E41" />
                    <rect x="104.619" y="75.4048" width="3.02034" height="5.41144" transform="rotate(-180 104.619 75.4048)" fill="#2F2E41" />
                    <rect x="98.5779" y="75.4048" width="3.02034" height="5.41144" transform="rotate(-180 98.5779 75.4048)" fill="#2F2E41" />
                    <ellipse cx="102.102" cy="75.4694" rx="2.51695" ry="0.943857" fill="#2F2E41" />
                    <ellipse cx="96.061" cy="75.3437" rx="2.51695" ry="0.943857" fill="#2F2E41" />
                    <circle cx="99.8364" cy="59.6768" r="3.39788" fill="white" />
                    <circle cx="99.8364" cy="59.6733" r="1.13263" fill="#3F3D56" />
                    <path d="M109.732 52.9452C110.535 49.3501 107.969 45.7173 104 44.8313C100.032 43.9452 96.1644 46.1413 95.3616 49.7365C94.5589 53.3316 97.1888 54.6576 101.157 55.5437C105.125 56.4297 108.929 56.5404 109.732 52.9452Z" fill="#F9A826" />
                    <path d="M22.4659 60.8073V98.6874" stroke="#3F3D56" stroke-width="2" />
                    <rect x="0.416817" y="46.2092" width="44.0466" height="29.1966" fill="#F9A826" />
                    <rect x="5.45057" y="53.5079" width="33.9788" height="1.00678" fill="#F1F1F1" />
                    <rect x="5.45057" y="56.9073" width="33.9788" height="1.00678" fill="#F1F1F1" />
                    <rect x="5.45057" y="60.3066" width="33.9788" height="1.00678" fill="#F1F1F1" />
                    <rect x="30.6202" y="67.1005" width="8.80933" height="1.00678" fill="#F1F1F1" />
                    <ellipse cx="22.4401" cy="46.208" rx="3.77543" ry="2.01356" fill="#3F3D56" />
                </svg>
        </div>
    );
};

export default Card;
