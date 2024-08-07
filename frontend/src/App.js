import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SessionsPage from './pages/SessionsPage/SessionsPage'; // Import SessionsPage
import CartPage from './pages/CartPage/CartPage'; // Import CartPage
import { CartProvider } from './context/CartContext'; // Import CartProvider
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<SessionsPage />} /> {/* Route for sessions page */}
                    <Route path="/cart" element={<CartPage />} /> {/* Route for cart page */}
                </Routes>
            </Router>
        </CartProvider>
    );
};

export default App;
