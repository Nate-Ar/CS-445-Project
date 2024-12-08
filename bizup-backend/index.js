
const express = require('express');
const router = express.Router();

// Import database connection
const db = require('./db');

// HomePage API
router.get('/home', (req, res) => {
    res.send({ message: "Welcome to the homepage!" });
});

// AccountPage API
router.get('/account/:userId', (req, res) => {
    const { userId } = req.params;
    db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results[0]);
    });
});

// CartPage API
router.get('/cart/:userId', (req, res) => {
    const { userId } = req.params;
    const query = `
        SELECT ci.id, p.name, p.price, ci.quantity, (p.price * ci.quantity) as total_price
        FROM cart_items ci
        JOIN products p ON ci.product_id = p.id
        WHERE ci.user_id = ?;
    `;
    db.query(query, [userId], (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
});

// ProductPage API
router.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
});

// LoginPage API
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(query, [email, password], (err, results) => {
        if (err) return res.status(500).send(err);
        if (results.length > 0) {
            res.send({ message: "Login successful", user: results[0] });
        } else {
            res.status(401).send({ message: "Invalid credentials" });
        }
    });
});

// Signup API
router.post('/signup', (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';
    db.query(query, [first_name, last_name, email, password], (err, results) => {
        if (err) return res.status(500).send(err);
        res.send({ message: "User registered successfully" });
    });
});

// SellersPage API
router.get('/sellers', (req, res) => {
    db.query('SELECT * FROM sellers', (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
});

module.exports = router;