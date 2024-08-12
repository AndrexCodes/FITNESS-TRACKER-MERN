// src/pages/HomePage/HomePage.js

import React, { useState, useEffect } from 'react';
import UserProfileCard from '../components/UserProfileCard/UserProfileCard'; // We'll create this next
import axios from 'axios';

const HomePage = () => {
    const [user, setUser] = useState(null);
    const [goals, setGoals] = useState({
        steps: '',
        calories: '',
        // Add other goals as needed
    });

    useEffect(() => {
        // Fetch user data after login
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/api/user/me', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming token is stored in localStorage
                    },
                });
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleInputChange = (e) => {
        setGoals({ ...goals, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/user/goals', goals, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            alert('Goals updated successfully');
        } catch (error) {
            console.error('Error updating goals:', error);
        }
    };

    return (
        <div>
            {user && <UserProfileCard user={user} />}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Steps:</label>
                    <input
                        type="number"
                        name="steps"
                        value={goals.steps}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Calories:</label>
                    <input
                        type="number"
                        name="calories"
                        value={goals.calories}
                        onChange={handleInputChange}
                    />
                </div>
                {/* Add more input fields as needed */}
                <button type="submit">Update Goals</button>
            </form>
        </div>
    );
};

export default HomePage;
