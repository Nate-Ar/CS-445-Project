const express = require("express");
const cors = require("cors");
const productRoutes = require("./product");
const cartRoutes = require("./cart");

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));