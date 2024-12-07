import React from "react";
import { Link } from "react-router-dom";

const OrdersPage = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/homepage">BIXUP</a>
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

            <div className="container mt-5 pt-5">
                <h1>Your Orders</h1>

                <div className="list-group mt-4">
                    {/* Placeholder for orders - Dynamic content will go here */}
                </div>
            </div>
        </div>
    );
};

export default OrdersPage;
