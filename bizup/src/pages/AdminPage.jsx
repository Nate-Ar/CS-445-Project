import React, { useState, useEffect } from "react";

const AdminPage = () => {
    const [users, setUsers] = useState([]);
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
                <h1>Admin Dashboard</h1>
                <h3>View All Users</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Account Type</th>
                        <th scope="col">Purchases</th>
                    </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default AdminPage;
