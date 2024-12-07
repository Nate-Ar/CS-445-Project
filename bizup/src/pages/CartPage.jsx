import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CartPage = ({ userId }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch(`/api/cart/${userId}`)
            .then((response) => response.json())
            .then((data) => setCartItems(data))
            .catch((err) => console.error("Failed to fetch cart items:", err));
    }, [userId]);

    const handleRemove = (itemId) => {
        fetch(`/api/cart/${itemId}`, { method: "DELETE" })
            .then(() => setCartItems(cartItems.filter((item) => item.id !== itemId)))
            .catch((err) => console.error("Failed to remove item:", err));
    };

    return (
        <div className="container-fluid">
            {/* Navbar Section */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">BIXUP</a>
                    <div className="d-flex w-50">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search products"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-light me-2">Search</button>
                    </div>

                    <div className="ms-auto">
                        <Link to="/account" className="btn btn-light">
                            Account
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="mt-5 pt-5">
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="row my-3">
                                <div className="col-md-2">
                                    <img src={item.image_url} alt={item.name} className="img-fluid" />
                                </div>
                                <div className="col-md-6">
                                    <h2>{item.name}</h2>
                                    <p>${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                                <div className="col-md-4 text-end">
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CartPage;