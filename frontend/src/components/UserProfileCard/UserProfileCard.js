// src/components/UserProfileCard/UserProfileCard.js

import React from 'react';
import './UserProfileCard.css';

const UserProfileCard = ({ user }) => {
    return (
        <div className="user-profile-card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <h3>Stats</h3>
            <ul>
                <li>Steps: {user.stats.steps}</li>
                <li>Calories: {user.stats.calories}</li>
                <li>Workout Time: {user.stats.workoutTime}</li>
            </ul>
        </div>
    );
};

export default UserProfileCard;
