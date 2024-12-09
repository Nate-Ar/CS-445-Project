import React, { useState } from 'react';
import { Link } from "react-router-dom";

function ShoppingCartPage() {
    // Mock data for cart items
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "3D-Printed Miniature Figure",
            price: 30,
            quantity: 1,
            image_url: "https://images.cults3d.com/4UvLxSvPoNqpEQb9eQieV3b2PtY=/516x516/filters:no_upscale():format(webp)/https://fbi.cults3d.com/uploaders/25972051/illustration-file/f525a06d-e815-440a-8fc9-9d7b374f443d/IMG_0983.jpeg",
        },
    ]);

    // State for managing the modal visibility
    const [showModal, setShowModal] = useState(false);

    // Placeholder for remove functionality
    const handleRemove = (itemId) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId));
    };

    // Handle checkout action
    const handleCheckout = () => {
        setShowModal(true); // Show modal after clicking checkout
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
                            <button className="btn btn-primary" onClick={handleCheckout}>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Modal for successful checkout */}
            {showModal && (
                <div className="modal fade show" style={{ display: 'block' }} aria-modal="true" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Order Confirmation</h5>
                                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                            </div>
                            <div className="modal-body">
                                <p>Your products have been successfully purchased!</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                    Close
                                </button>
                                <Link to="/orders" className="btn btn-primary">View Orders</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ShoppingCartPage;
