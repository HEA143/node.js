const express = require('express');
const mysql = require('mysql2');
const app = express();

require('dotenv').config(); // yarn add dotenv

app.get('/', function (req, res) {
    const connection = mysql.createConnection({
        host: process.env.HOST,
        user: process.env.DB_USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
    });

connection.query(
    'SELECT * FROM topic',
    function(err, results, fields) {
        res.send(err);
        console.log(results);
        console.log(fields);
    });    
});

app.listen(3000, function() {
    console.log('Listening: http://localhost:3000');
});
