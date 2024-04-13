import React from 'react';
// import ProfileForm from './ProfileForm';
import Button from './Button';

// interface for the Form cards
interface FillupcardProps {
    title: string;
    description: string;
    formContent: JSX.Element;
    isActive: boolean;
    isCompleted: boolean;
    onContinue: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onClick: () => void;
}

const Fillupcard: React.FC<FillupcardProps> = ({
    title,
    description,
    formContent,
    isActive,
    isCompleted,
    onContinue,
    onClick
}) => {

    //function to fetch and render icon based on the status
    const renderIcon = () => {
        if (isCompleted) {
            return (
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14.03" cy="14.5" r="14" fill="#22C55E" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4051 18.1489L7.75631 14.5001L6.51381 15.7339L11.4051 20.6251L21.9051 10.1251L20.6713 8.89136L11.4051 18.1489Z" fill="white" />
                </svg>
            );
        } else {
            return (
                <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.03" cy="14.5" r="14" stroke="#71778E" />
                    {isActive && <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4051 18.1487L8.75631 14.5L7.51381 15.7337L12.4051 20.625L22.9051 10.125L21.6713 8.89124L12.4051 18.1487Z" fill="#71778E" />}
                </svg>
            );
        }
    };

    return (
        <div className={`flex ${isActive ? 'flex-col' : 'flex-row'} justify-between items-center p-2 bg-white shadow-md rounded-md md:min-w-[780px] max-w-screen-sm overflow-x-hidden flex-wrap`}
            onClick={onClick}
        >
            <div className='flex justify-between items-center md:min-w-[780px] max-w-screen-sm p-4'>
                <div>
                    <h3 className={`flex ${isActive ? 'font-bold text-black' : 'text-[#71778e]'}`}>{title}</h3>
                    <p className='text-[#71778e]'>{description}</p>
                </div>
                <div>
                    {renderIcon()}
                </div>
            </div>
            {isActive && (
                <div>
                    {/* <ProfileForm /> */}
                    {formContent}
                    <div className='flex justify-between items-center flex-wrap m-3 max-w-sm md:max-w-full'>
                        <div className='flex gap-1 justify-between items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-9 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                            </svg>

                            <h3 className='text-[#71778e] text-sm'>You can complete career details later in profile section.</h3>
                        </div>
                        <div className='flex justify-between gap-2 items-center text-sm text-[#71778e]'>
                            <div>
                            Setup later
                            </div>
                        <Button className='p-2 bg-black text-white rounded-xl px-3' onClick={(e) => {
                            e.stopPropagation();
                            onContinue(e);
                        }}>Continue</Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Fillupcard;
