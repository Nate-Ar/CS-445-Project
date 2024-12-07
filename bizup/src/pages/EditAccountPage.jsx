import React from "react";

const AccountPage = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/homepage">BIXUP</a>
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
                <h1>Account Settings</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Enter your username"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <textarea
                            className="form-control"
                            id="address"
                            rows="4"
                            placeholder="Enter your address"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your new password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Update Account</button>
                </form>
            </div>
        </div>
    );
};

export default AccountPage;
