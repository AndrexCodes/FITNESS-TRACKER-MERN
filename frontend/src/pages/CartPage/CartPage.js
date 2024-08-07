import React from 'react';
import { useCart } from '../../context/CartContext'; // Import CartContext for cart data
import './CartPage.css'; // Import CSS for styling

const CartPage = () => {
    const { cart, getCartTotal } = useCart(); // Access cart and total functions

    // Handle proceed to payment
    const handleProceedToPayment = () => {
        alert('Proceeding to payment');
    };

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            <div className="cart-items">
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <h2>{item.name}</h2>
                            <p>Start Time: {item.startTime}</p>
                            <p>End Time: {item.endTime}</p>
                            <p>Price: Ksh {item.price}</p>
                        </div>
                    ))
                )}
            </div>
            <div className="cart-total">
                <h2>Total: Ksh {getCartTotal()}</h2>
                <button className="proceed-button" onClick={handleProceedToPayment}>
                    Proceed to Payment
                </button>
            </div>
        </div>
    );
};

export default CartPage;
