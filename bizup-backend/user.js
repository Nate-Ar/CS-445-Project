const express = require("express");
const router = express.Router();
const db = require("./db");

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const [rows] = await db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, password]);
        if (rows.length > 0) {
            res.json({ message: "Login successful", user: rows[0] });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (err) {
        console.error("Error during login:", err.message);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
