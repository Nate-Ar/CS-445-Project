import React from "react";
import {Link} from "react-router-dom";

const LoginPage = () => {
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
                <div className="col-md-4 mt-5">
                    <h2>Login</h2>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Enter email/username"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter password"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    <Link to="/signup" className="btn btn-primary">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
