const mysql = require("mysql2");

//Connect to database
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "guyguy522",
    database: "BizUp",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

module.exports = pool.promise(); // Use promises for cleaner code