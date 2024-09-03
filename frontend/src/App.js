import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar"; // Import Navbar
import { CartProvider } from "./context/CartContext";
import GlobalContext from "./components/GlobalContext";
import "@fortawesome/fontawesome-free/css/all.min.css";


const App = () => {
  return (
    <GlobalContext>
      <CartProvider>
        <Router>
            
        <Navbar /> {/* Add Navbar here */}
          <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/" element={<HomePage />} /> {/* Route for homepage */}
            <Route path="/sessions" element={<SessionsPage />} />{" "}
            {/* Route for sessions page */}
            <Route path="/cart" element={<CartPage />} />{" "}
            {/* Route for cart page */}
          </Routes>
        </Router>
      </CartProvider>
    </GlobalContext>
  );
};

export default App;
