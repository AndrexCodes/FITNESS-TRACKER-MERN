// src/components/FitnessCard/FitnessCard.js

import React from 'react';
import './FitnessCard.css';

const FitnessCard = ({ image, title, inputs }) => {
    return (
        <div className="fitness-card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h2>{title}</h2>
                {inputs.map((input, index) => (
                    <div key={index} className="input-group">
                        <label>{input.label}</label>
                        <input type={input.type} placeholder={input.placeholder} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FitnessCard;
