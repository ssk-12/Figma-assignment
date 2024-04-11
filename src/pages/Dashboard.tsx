import React from 'react';
import Card from "../components/Card";
import Fillupcard from "../components/Fillupcard";

export const Dashboard = () => {
    
    const cards = [
        { title: "Update your profile", description: "Get the process started in less than 10 minutes. Let us handle the rest." },
        { title: "Complete your setup", description: "Follow steps to complete your setup efficiently." },
        { title: "New Features", description: "Check out what's new this month!" },
        { title: "Update your experience", description: "Starting your journey with updating your corporate and coaching experience." },
        { title: "Setup your calendar", description: "Start your journey with setting your calendar." }
    ];

    return (
        <div className="flex flex-col items-center justify-center flex-grow w-screen p-8 gap-2">
            <Card/>
            {cards.map((card, index) => (
                <Fillupcard key={index} title={card.title} description={card.description} />
            ))}
        </div>
    );
}
