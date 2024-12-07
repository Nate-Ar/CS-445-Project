import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

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
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/homepage">BIXUP</a>

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

            <div className="container mt-5 pt-5">
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        {cartItems.map((item) => (
                            <div key={item.id} className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={item.image_url} alt={item.name} className="img-fluid rounded-start" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">Price: ${item.price}</p>
                                            <p className="card-text">Quantity: {item.quantity}</p>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleRemove(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="d-flex justify-content-between align-items-center mt-4">
                            <h3>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
                            <button className="btn btn-primary">Proceed to Checkout</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
