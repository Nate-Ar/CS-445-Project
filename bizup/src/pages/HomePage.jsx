import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">BIXUP</a>

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
            <div className="d-flex justify-content-start gap-3 mt-3 pt-5">
                <button className="btn btn-secondary">All</button>
                <button className="btn btn-secondary">Discover</button>
                <button className="btn btn-secondary">Popular</button>
                <button className="btn btn-secondary">Trending</button>
                <button className="btn btn-secondary">Recently Viewed</button>
            </div>
            <div className="mt-5 pt-5">
                <h1>You should see products here</h1>
                <Link to="/product" className="btn btn-light">
                    See Product Page
                </Link>
            </div>
        </div>
    );
}

export default Homepage;
