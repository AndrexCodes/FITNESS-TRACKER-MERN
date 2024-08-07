import React from 'react';
import { Link } from 'react-router-dom';
import SessionCard from '../../components/SessionCard/SessionCard'; // Import SessionCard component
import './SessionsPage.css'; // Import CSS for styling

// Import images
import powerSurgeImg from '../../assets/images/power-surge.jpg'; 
import zenStrengthImg from '../../assets/images/zen-strength.jpg';
import cardioBlastImg from '../../assets/images/cardio-blast.jpg';
import coreFusionImg from '../../assets/images/core-fusion.jpg';
import { useCart } from '../../context/CartContext'; // Import CartContext for cart data

// Define sessions data
const sessions = [
    {
        name: 'Power Surge',
        startTime: '08:00 AM',
        endTime: '09:00 AM',
        description: 'A high-energy session to kickstart your day.',
        price: 2000,
        image: powerSurgeImg,
    },
    {
        name: 'Zen & Strength',
        startTime: '10:00 AM',
        endTime: '11:00 AM',
        description: 'A balanced session of relaxation and strength.',
        price: 2500,
        image: zenStrengthImg,
    },
    {
        name: 'Cardio Blast',
        startTime: '12:00 PM',
        endTime: '01:00 PM',
        description: 'Intense cardio workout to boost your stamina.',
        price: 3000, 
        image: cardioBlastImg,
    },
    {
        name: 'Core Fusion',
        startTime: '02:00 PM',
        endTime: '03:00 PM',
        description: 'Focus on strengthening your core muscles.',
        price: 1500, 
        image: coreFusionImg,
    }
];

const SessionsPage = () => {
    const { cart } = useCart(); // Access cart data

    return (
        <div className="sessions-page">
            <h1>Fitness Sessions</h1>
            <p className="page-description">
            Discover our range of fitness sessions designed to cater to different needs and schedules.</p>

            <p className="page-description">Whether you're looking for a high-energy workout, a calming yoga session, or something in between, we have something for everyone.</p>

            <p className="page-description">Browse our sessions, choose your favorites, and book them directly through the app.</p>
            <Link to="/cart" className="view-cart-link">
                <i className="fas fa-shopping-cart"></i> 
                <span className="cart-text">View Cart</span>
                <span className="cart-count">{cart.length}</span>
            </Link>
            <div className="sessions-container">
                {sessions.map((session, index) => (
                    <SessionCard key={index} session={session} />
                ))}
            </div>
        </div>
    );
};

export default SessionsPage;
