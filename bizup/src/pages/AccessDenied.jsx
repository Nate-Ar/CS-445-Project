import React from "react";

const AccessDeniedPage = () => {
    return (
        <div className="container mt-5 pt-5 text-center">
            <h1>Access Denied</h1>
            <p>You do not have permission to view this page.</p>
            <a href="/homepage" className="btn btn-primary">Go Back to Home</a>
        </div>
    );
};

export default AccessDeniedPage;
