// src/pages/HomePage/HomePage.js

import React, { useEffect, useState } from 'react';
import FitnessCard from '../../components/FitnessCard/FitnessCard';
import UserProfileCard from '../../components/UserProfileCard/UserProfileCard';
import { UseAppContext } from '../../components/GlobalContext';
import './HomePage.css';

const HomePage = () => {
    const {token} = UseAppContext()
    const [user, setUser] = useState({
        name: 'John Thariki',
        email: 'tharikijohn@gmail.com',
        age: 19,
        stats: {
            steps: 5000,
            calories: 1500,
            workoutTime: '1h 30m',
        },
    })
    

    const fitnessCards = [
        {
            image: 'https://static.nike.com/a/images/f_auto/dpr_3.0,cs_srgb/h_484,c_limit/fff30ce6-b0e1-46d6-9ade-cc8feb711c05/should-you-do-cardio-before-or-after-weight-training.jpg',
            title: 'Cardio',
            inputs: [
                { label: 'Steps Covered', type: 'number', placeholder: 'Enter steps' },
                { label: 'Duration (min)', type: 'number', placeholder: 'Enter minutes' },
            ],
        },
        {
            image: 'https://hips.hearstapps.com/hmg-prod/images/man-lifting-dumbells-at-cross-training-gym-royalty-free-image-1625601682.jpg?crop=0.612xw:0.918xh;0.252xw,0.0816xh&resize=640:*',
            title: 'Strength Training',
            inputs: [
                { label: 'Reps', type: 'number', placeholder: 'Enter reps' },
                { label: 'Sets', type: 'number', placeholder: 'Enter sets' },
            ],
        }, 
        {
            image: 'https://res.cloudinary.com/peloton-cycle/image/fetch/c_fill,dpr_1.0,w_1024,h_768,x_1033,y_1313/f_auto/q_auto/https://images.ctfassets.net/6ilvqec50fal/4etuYztO7f1eMUnRn8e4Ia/62281f46a148c25651f09b8f8287ad0c/GettyImages-1223389038.jpg',
            title: 'Yoga',
            inputs: [
                { label: 'Duration (min)', type: 'number', placeholder: 'Enter minutes' },
                { label: 'Poses Completed', type: 'number', placeholder: 'Enter poses' },
            ],
        },
        {
            image: 'https://images.immediate.co.uk/production/volatile/sites/30/2023/12/Cyclist-in-red-c9e267e.jpg?quality=90&resize=440,400',
            title: 'Cycling',
            inputs: [
                { label: 'Distance (km)', type: 'number', placeholder: 'Enter distance' },
                { label: 'Duration (min)', type: 'number', placeholder: 'Enter minutes' },
            ],
        },
        {
            image: 'https://static.thcdn.com/images/medium/original/widgets/241-en/32/Speedo_Assets_Mobile-102332.png',
            title: 'Swimming',
            inputs: [
                { label: 'Laps Completed', type: 'number', placeholder: 'Enter laps' },
                { label: 'Duration (min)', type: 'number', placeholder: 'Enter minutes' },
            ],
        },
    
        // Add more cards as needed
    ];

    useEffect(()=>{
        const payload = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth": token
            }
        }
        fetch("/api/userData")
        .then((result)=>{
            // setUser(result)
        })
    }, [])



    return (
        <div className="home-page">
            <h1>Welcome to the Fitness Tracker</h1>
            <UserProfileCard user={user} />
            <div className="cards-container">
                {fitnessCards.map((card, index) => (
                    <FitnessCard key={index} image={card.image} title={card.title} inputs={card.inputs} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
