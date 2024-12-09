import React, { useState, useEffect } from "react";

const AdminPage = () => {
    const [users, setUsers] = useState([
        { id: 1, username: "jane.doe", accountType: "User", purchases: 5 },
        { id: 2, username: "john.doe", accountType: "User", purchases: 3 },
        { id: 3, username: "admin", accountType: "Admin", purchases: 10 },
    ]);
    const [showPasswordModal, setShowPasswordModal] = useState(true);

    const handleRemoveUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    const handlePasswordSubmit = () => {
        // You can implement password validation here if required
        setShowPasswordModal(false);
    };

    return (
        <div>
            {/* Password Modal */}
            {showPasswordModal && (
                <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" role="dialog" aria-labelledby="passwordModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="passwordModalLabel">Enter Password</h5>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" onClick={handlePasswordSubmit}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Admin password"
                                    autoFocus
                                />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={handlePasswordSubmit}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Navbar */}
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

            {/* Admin Dashboard */}
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
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.accountType}</td>
                            <td>{user.purchases}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleRemoveUser(user.id)}>
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPage;
