import React, { useState } from 'react';
import './SessionCard.css'; // Import CSS for styling
import { useCart } from '../../context/CartContext'; // Import CartContext for cart operations

const SessionCard = ({ session }) => {
    const [hover, setHover] = useState(false); // State to handle hover effect
    const { addToCart } = useCart(); // Access addToCart function from CartContext

    // Handle booking session by adding to cart
    const handleBookSession = () => {
        addToCart(session);
    };

    return (
        <div
            className="session-card"
            onMouseEnter={() => setHover(true)} // Show more info on hover
            onMouseLeave={() => setHover(false)} // Hide info on mouse leave
        >
            <h2 className={`session-name ${hover ? 'hidden' : ''}`}>
                {session.name}
            </h2>
            <div 
                className={`session-image ${hover ? 'hover' : ''}`} 
                style={{ backgroundImage: `url(${session.image})` }} 
            />
            <p className={`session-description ${hover ? 'hidden' : ''}`}>
                {session.description}
            </p>
            {hover && (
                <div className="session-info">
                    <h3>{session.name}</h3>
                    <p>Start Time: {session.startTime}</p>
                    <p>End Time: {session.endTime}</p>
                    <p>Price: Ksh {session.price}</p>
                    <button className="booking-button" onClick={handleBookSession}>
                        Book Session
                    </button>
                </div>
            )}
        </div>
    );
};

export default SessionCard;
