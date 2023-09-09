const express = require("express")
const app = express()

const mysql = require('mysql')
const pool = mysql.createPool({
    host: "bsjbdgelitwz9ss9atam-mysql.services.clever-cloud.com",
    user: "uogz2lfh6kghg6cz",
    password: "dv1iJvWHR9h2xUu56O9V",
    database: "bsjbdgelitwz9ss9atam"
});

// pool.connect((err) => {
//     if (err) {
//       console.error('Error connecting to MySQL:', err);
//       return;
//     }
//     console.log('Connected to MySQL database');
// });

module.exports = pool;