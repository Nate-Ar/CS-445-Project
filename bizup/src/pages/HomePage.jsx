import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
    // Mock product data for 3D-printed items
    const mockProducts = [
        { id: 1, name: "Custom 3D-Printed Pen Holder", price: "$25", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3.amazonaws.com%2Fdigitaltrends-uploads-prod%2F2017%2F05%2F3dprintedpenholder.jpg&f=1&nofb=1&ipt=14cefb07612d33ff3e2bb9f76fcb4fb097e8d3c7f8bc6406ecdbeac0375f059d&ipo=images" },
        { id: 2, name: "3D-Printed Keychain", price: "$10", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F10574163%2Fr%2Fil%2F1a3380%2F1491313310%2Fil_fullxfull.1491313310_nwtd.jpg&f=1&nofb=1&ipt=f1464e36a330e5271d57cf27674ac84ac2a8f4ca90730b4654a41d8a827d0a9d&ipo=images" },
        { id: 3, name: "3D-Printed Phone Stand", price: "$15", image: "https://dl.myminifactory.com/object-assets/5e7cebed5b496/images/20200329-175815.jpg" },
        { id: 4, name: "3D-Printed Miniature Figure", price: "$30", image: "https://images.cults3d.com/4UvLxSvPoNqpEQb9eQieV3b2PtY=/516x516/filters:no_upscale():format(webp)/https://fbi.cults3d.com/uploaders/25972051/illustration-file/f525a06d-e815-440a-8fc9-9d7b374f443d/IMG_0983.jpeg" },
    ];

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

            <div className="d-flex justify-content-start gap-3 mt-5 pt-5">
                <button className="btn btn-secondary">All</button>
                <button className="btn btn-secondary">Featured</button>
                <button className="btn btn-secondary">New Arrivals</button>
                <button className="btn btn-secondary">Best Sellers</button>
                <button className="btn btn-secondary">Custom Orders</button>
            </div>

            {/* Product Grid */}
            <div className="row mt-4">
                {mockProducts.map((product) => (
                    <div key={product.id} className="col-md-3 mb-4">
                        <div className="card h-100">
                            <img
                                src={product.image}
                                className="card-img-top"
                                alt={product.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.price}</p>
                                <Link to={`/product`} className="btn btn-primary">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Homepage;
