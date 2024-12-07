import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AccountPage() {
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">BIXUP</a>
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
                        <Link to="/cart" className="btn btn-light">
                            Cart
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="mt-5 pt-5">
                <h1>Your Account Details</h1>
                <div className="card mt-4">
                    <div className="card-body">
                    {/*    grab the account info from the backend*/}
                    </div>
                </div>

                {/*make this shit work still */}
                <div className="mt-4">
                    <Link to="/edit-account" className="btn btn-primary me-2">
                        Edit Account
                    </Link>
                    <button className="btn btn-danger">Delete Account</button>
                </div>
            </div>
        </div>
    );
}

export default AccountPage;
