const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crudtest'
});

db.connect((err) => {
    if (err) {
        return console.log('No se pudo contectar a la base de datos');
    }
    console.log('Base de datos conectada');
});

module.exports = db;