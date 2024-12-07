import React from "react";
import { Link } from "react-router-dom";

const ProductPage = () => {
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
                        src="https://via.placeholder.com/500x500"
                        alt="Product"
                        className="img-fluid"
                    />
                </div>

                <div className="col-md-6 d-flex flex-column align-items-start">
                    <div className="row mb-3">
                        <div className="col-3">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Thumbnail 1"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-3">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Thumbnail 2"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-3">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Thumbnail 3"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-3">
                            <img
                                src="https://via.placeholder.com/100"
                                alt="Thumbnail 4"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                {/* Description */}
                <div className="col-md-8">
                    <h3>Product Title</h3>
                    <p>
                        This is where the product description will go. It will
                        explain the features, benefits, and details of the product.
                    </p>
                </div>

                <div className="col-md-4">
                    <div className="d-flex flex-column align-items-end">
                        <h4>$XX.XX</h4>

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

                        <button className="btn btn-primary w-100">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
