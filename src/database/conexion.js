const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        return console.log('No se pudo contectar a la base de datos');
    }
    console.log('Base de datos conectada');
});

module.exports = db;