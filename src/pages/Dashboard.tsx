import React, { useState } from 'react';
import Card from "../components/Card";
import Fillupcard from "../components/Fillupcard";
import ProfileForm from '../components/ProfileForm';
import ExperienceForm from '../components/ExperienceForm';


interface CardInfo {
    title: string;
    description: string;
    formComponent: JSX.Element;
}

export const Dashboard: React.FC = () => {
    const cards: CardInfo[] = [
        { title: "Update your profile", description: "Get the process started in less than 10 minutes. Let us handle the rest.", formComponent: <ProfileForm /> },
        { title: "Update your experience", description: "Starting your journey with updating your corporate and coaching experience.", formComponent: <ExperienceForm /> },
        // { title: "Setup your calendar", description: "Start your journey with setting your calendar.", formComponent: <CalendarForm /> }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [completedIndices, setCompletedIndices] = useState<boolean[]>(new Array(cards.length).fill(false));

    const handleContinue = (index: number): void => {
        const newCompletedIndices = [...completedIndices];
        newCompletedIndices[index] = true;
        setCompletedIndices(newCompletedIndices);

        const nextIndex = index + 1 < cards.length ? index + 1 : null;
        setActiveIndex(nextIndex);
    };

    return (
        <div className="flex flex-col items-center justify-center flex-grow w-screen p-8 gap-2">
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
                />
            ))}
        </div>
    );
}

export default Dashboard;
