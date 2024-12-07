import React, { useState } from "react";

const SellersPage = () => {
    const [productDetails, setProductDetails] = useState({
        name: "",
        description: "",
        price: "",
        images: ["", "", "", "", ""],
    });

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        if (name === "images") {
            const newImages = [...productDetails.images];
            newImages[index] = value;
            setProductDetails({ ...productDetails, images: newImages });
        } else {
            setProductDetails({ ...productDetails, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Just display the product details for now (no backend functionality)
        console.log("Product Details Submitted:", productDetails);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">BIXUP</a>
                    <div className="ms-auto">
                        <a href="/account" className="btn btn-light">
                            Account
                        </a>
                        <a href="/cart" className="btn btn-light">
                            Cart
                        </a>
                    </div>
                </div>
            </nav>

            <div className="container mt-5 pt-5">
                <h1>Create a New Listing</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Product Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={productDetails.name}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Product Description</label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            rows="4"
                            value={productDetails.description}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            name="price"
                            value={productDetails.price}
                            onChange={(e) => handleChange(e)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="images" className="form-label">Product Images (up to 5)</label>
                        {productDetails.images.map((image, index) => (
                            <div key={index} className="mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="images"
                                    placeholder={`Image link #${index + 1}`}
                                    value={image}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                        ))}
                    </div>

                    <button type="submit" className="btn btn-primary">Submit Listing</button>
                </form>
            </div>
        </div>
    );
};

export default SellersPage;
