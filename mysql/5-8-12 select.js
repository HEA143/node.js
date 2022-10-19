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

    let body = '<h1>single row</h1>';
    connection.query(
        'SELECT * FROM topic WHERE id = 5',
        function(err, results, fields) {
            let row = results[0];
            body += row.title;
            res.send(body);
            console.log(results);
            console.log(fields);
        });      
});

app.listen(3000, function() {
    console.log('Listening: http://localhost:3000');
});
