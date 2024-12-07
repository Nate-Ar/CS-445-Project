const db = require("./db");

async function testConnection() {
    try {
        const [rows] = await db.query("SELECT DATABASE();");
        console.log("Connected to database:", rows[0]);
    } catch (err) {
        console.error("Database connection failed:", err.message);
    }
}

testConnection();