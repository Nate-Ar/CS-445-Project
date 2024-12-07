const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM products");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch products" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM products WHERE id = ?", [req.params.id]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch product" });
    }
});

module.exports = router;