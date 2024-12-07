import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import AccountPage from "./pages/AccountPage"
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/HomePage";
import ProductList from "./components/ProductList";
import CartPage from "./pages/CartPage";
import SignUp from "./pages/SignUp";
import YourOrdersPage from "./pages/YourOrdersPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";
import SellersPage from "./pages/SellersPage";
import EditAccountPage from "./pages/EditAccountPage";
import AccessDenied from "./pages/AccessDenied";
function App() {
    const userId = 1; // Replace with actual user ID

    return (
        <Router>
            <Routes>
                <Route path="/denied" element={<AccessDenied />} />
                <Route path="/accountedit" element={<EditAccountPage />} />
                <Route path="/sellers" element={<SellersPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/orders" element={<YourOrdersPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route path="/productList" element={<ProductList />} />
                <Route path="/cart" element={<CartPage userId={userId} />} />
            </Routes>
        </Router>
    );
}

export default App;