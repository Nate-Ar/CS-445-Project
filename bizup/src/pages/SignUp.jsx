import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUpPage = () => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate(); // Hook to handle navigation

    const handleSignUp = () => {
        // Logic to handle sign up (e.g., form validation, API call, etc.)
        // Here we'll just show the modal
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        // Navigate to the login page after closing the modal
        navigate("/");
    };

    return (
        <div className="container">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">BIXUP</a>
                    </div>
                </nav>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-6 mt-5">
                    <h2>Sign Up</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="firstName" className="form-label">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="Enter your first name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="Enter your last name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username/Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Username/Email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter a secure password"
                                required
                            />
                        </div>
                        <button type="button" className="btn btn-primary w-100" onClick={handleSignUp}>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>

            {/* Modal Popup */}
            {showModal && (
                <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Account Created</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Your account has been successfully created!
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignUpPage;
