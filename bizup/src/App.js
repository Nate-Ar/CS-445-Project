import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountPage from "./pages/AccountPage"
import Homepage from "./pages/HomePage";
import ProductList from "./components/ProductList";
import CartPage from "./pages/CartPage";

function App() {
    const userId = 1; // Replace with actual user ID

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/product" element={<ProductList />} />
                <Route path="/cart" element={<CartPage userId={userId} />} />
            </Routes>
        </Router>
    );
}

export default App;