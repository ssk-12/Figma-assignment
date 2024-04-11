import React, { useState } from 'react';
import Card from "../components/Card";
import Fillupcard from "../components/Fillupcard";

interface CardInfo {
    title: string;
    description: string;
}

export const Dashboard: React.FC = () => {
    const cards: CardInfo[] = [
        { title: "Update your profile", description: "Get the process started in less than 10 minutes. Let us handle the rest." },
        { title: "Complete your setup", description: "Follow steps to complete your setup efficiently." },
        { title: "New Features", description: "Check out what's new this month!" },
        { title: "Update your experience", description: "Starting your journey with updating your corporate and coaching experience." },
        { title: "Setup your calendar", description: "Start your journey with setting your calendar." }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleContinue = (index: number): void => {
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
                    isActive={index === activeIndex}
                    onContinue={() => handleContinue(index)}
                />
            ))}
        </div>
    );
}

export default Dashboard;
