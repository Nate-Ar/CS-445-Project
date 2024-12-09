import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleAddToCart = () => {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide the popup after 3 seconds
    };

    return (
        <div className="container-fluid">
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
                        <Link to="/cart" className="btn btn-light">
                            Cart
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="row mt-5">
                <div className="col-md-6">
                    <img
                        src="https://images.cults3d.com/4UvLxSvPoNqpEQb9eQieV3b2PtY=/516x516/filters:no_upscale():format(webp)/https://fbi.cults3d.com/uploaders/25972051/illustration-file/f525a06d-e815-440a-8fc9-9d7b374f443d/IMG_0983.jpeg"
                        alt="Product"
                        className="img-fluid"
                    />
                </div>

                <div className="col-md-6 d-flex flex-column align-items-start">
                    <div className="row mb-3">
                        <div className="col-3">
                            <img
                                src="https://images.cults3d.com/x-KXHxH8ZMBnCy1Twtbm6-_-sXQ=/516x516/filters:no_upscale():format(webp)/https://fbi.cults3d.com/uploaders/25972051/illustration-file/64d2ce17-b961-4ae6-8985-d94cc57da71a/IMG_0982.jpeg"
                                alt="Thumbnail 1"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-3">
                            <img
                                src="https://images.cults3d.com/RwAPsmtL9EIEos5s5fpfbqre1XI=/516x516/filters:no_upscale():format(webp)/https://fbi.cults3d.com/uploaders/25972051/illustration-file/3ffbaa54-27b6-4a25-9249-f23e71cc7b95/IMG_0981.jpeg"
                                alt="Thumbnail 2"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                {/* Description */}
                <div className="col-md-8">
                    <h3>3D-Printed Miniature Figure</h3>
                    <p>
                        This highly detailed 3D-printed miniature figure is perfect for collectors, tabletop gamers, and hobbyists.
                        It has been meticulously designed to capture every fine detail, from facial features to intricate clothing patterns.
                        Made with high-quality materials, this figure is ideal for painting and customizing. Add it to your collection or use it
                        as a unique piece for your next game or project.
                    </p>
                </div>

                <div className="col-md-4">
                    <div className="d-flex flex-column align-items-end">
                        <h4>$30.00</h4>

                        <div className="mb-3">
                            <label htmlFor="quantity" className="form-label">Quantity</label>
                            <select id="quantity" className="form-select">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        <button className="btn btn-primary w-100" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Popup Notification */}
            {showPopup && (
                <div className="position-fixed top-50 start-50 translate-middle p-3" style={{ zIndex: 1050 }}>
                    <div className="alert alert-success" role="alert">
                        Product added to cart!
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductPage;
