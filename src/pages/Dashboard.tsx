import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from "../components/Card";
import Fillupcard from "../components/Fillupcard";
import ProfileForm from '../components/ProfileForm';
import ExperienceForm from '../components/ExperienceForm';
import CalendarForm from '../components/CalenderForm';

// interface for cardInfo
interface CardInfo {
    title: string;
    description: string;
    formComponent: JSX.Element;
}

export const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    //sample cards
    const cards: CardInfo[] = [
        { title: "Update your profile", description: "Get the process started in less than 10 minutes. Let us handle the rest.", formComponent: <ProfileForm /> },
        { title: "Update your experience", description: "Starting your journey with updating your corporate and coaching experience.", formComponent: <ExperienceForm /> },
        { title: "Setup your calendar", description: "Start your journey with setting your calendar.", formComponent: <CalendarForm /> }
    ];
    const [completedIndices, setCompletedIndices] = useState<boolean[]>(new Array(cards.length).fill(false));
    //checking authentication
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/');
        }
    }, [navigate]);

   
    //helper function to navigate through the next components through continue button
    const handleContinue = (index: number): void => {
        const newCompletedIndices = [...completedIndices];
        newCompletedIndices[index] = true;
        setCompletedIndices(newCompletedIndices);
        const nextIndex = index + 1 < cards.length ? index + 1 : null;
        setActiveIndex(nextIndex);
    };
    //helper function to navigate through the next components through click
    const handleCardClick = (index: number): void => {
        setActiveIndex(index);
    };

    return (
        <div className="flex flex-col items-center justify-center flex-grow md:max-w-screen flex-wrap p-8 gap-2">
            <Card onGetStarted={() => setActiveIndex(0)} />
            {cards.map((card, index) => (
                <Fillupcard
                    key={index}
                    title={card.title}
                    description={card.description}
                    formContent={card.formComponent}
                    isActive={index === activeIndex}
                    isCompleted={completedIndices[index]}
                    onContinue={() => handleContinue(index)}
                    onClick={() => handleCardClick(index)} 
                />
            ))}
        </div>
    );
};

export default Dashboard;
