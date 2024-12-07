import React, { useState } from "react";

const ContactPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

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
                <h1>Contact Us</h1>
                <p>If you have any issues or questions, please open a ticket below:</p>

                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Your Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input
                            type="text"
                            className="form-control"
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            rows="4"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit Ticket</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
