const express = require("express");
const router = express.Router();
const db = require("./db");

router.get("/:userId", async (req, res) => {
    try {
        const [rows] = await db.query(
            `SELECT ci.id, ci.quantity, p.name, p.price, p.image_url 
             FROM cart_items ci 
             JOIN products p ON ci.product_id = p.id 
             WHERE ci.user_id = ?`,
            [req.params.userId]
        );
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch cart items" });
    }
});

router.post("/", async (req, res) => {
    const { userId, productId, quantity } = req.body;
    try {
        await db.query(
            `INSERT INTO cart_items (user_id, product_id, quantity) 
             VALUES (?, ?, ?) 
             ON DUPLICATE KEY UPDATE quantity = quantity + ?`,
            [userId, productId, quantity, quantity]
        );
        res.status(201).json({ message: "Item added to cart" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to add item to cart" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await db.query("DELETE FROM cart_items WHERE id = ?", [req.params.id]);
        res.json({ message: "Item removed from cart" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to remove item" });
    }
});

module.exports = router;