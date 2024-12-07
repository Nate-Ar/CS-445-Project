import React from "react";

const SignUpPage = () => {
    return (
        <div className="container">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">BIXUP</a>
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
                        <button type="button" className="btn btn-primary w-100">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
