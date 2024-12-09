import React from "react";
import { Link } from "react-router-dom";

const OrdersPage = () => {
    // Mock order data
    const mockOrder = {
        orderNumber: "ORD123456",
        productName: "3D-Printed Miniature Figure",
        orderDate: "2024-11-15",
        price: "$30.00",
        status: "Shipped"
    };

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
                    {/* Mock Order */}
                    <div className="list-group-item list-group-item-action">
                        <h5 className="mb-1">{mockOrder.productName}</h5>
                        <p className="mb-1">
                            <strong>Order Number:</strong> {mockOrder.orderNumber}
                        </p>
                        <p className="mb-1">
                            <strong>Order Date:</strong> {mockOrder.orderDate}
                        </p>
                        <p className="mb-1">
                            <strong>Price:</strong> {mockOrder.price}
                        </p>
                        <p className="mb-1">
                            <strong>Status:</strong> {mockOrder.status}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersPage;
