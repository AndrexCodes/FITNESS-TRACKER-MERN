// src/components/UserProfileCard/UserProfileCard.js

import React from 'react';
import './UserProfileCard.css';

const UserProfileCard = ({ user }) => {
    return (
        <div className="user-profile-card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            {/* Display more user information as needed */}
        </div>
    );
};

export default UserProfileCard;
