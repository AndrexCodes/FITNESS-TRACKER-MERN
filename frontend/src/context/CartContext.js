import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Add session to cart
    const addToCart = async (session) => {
        try {
            const response = await fetch('/api/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(session),
            });

            if (response.ok) {
                setCart(prevCart => [...prevCart, session]);
                alert('Session added to cart!');
            } else {
                const errorData = await response.json();
                console.error('Failed to add session to cart:', errorData);
                alert('Failed to add session to cart: ' + (errorData.message || 'Unknown error'));
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while adding to cart');
        }
    };

    // Get total price of items in cart
    const getCartTotal = () => {
        return cart.reduce((total, session) => total + session.price, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, getCartTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

