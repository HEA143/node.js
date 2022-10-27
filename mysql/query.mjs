import express from 'express';
import mysql from 'mysql2';
import conn from './conn.mjs';

const app = express();

app.get('/', async (req, res) => {
  const id = req.query.id;
  const connection =  mysql
    .createConnection(conn)
    .promise();

  let body = `<h1>파라미터 id: ${id}</h1>`;
  let [results, fields] = await connection.query(
    'SELECT * FROM topic WHERE id = ?',
    [id]
  );

  results.forEach((row) => {
    let {title, description} = row;
    body += `<h2>${title}</h2>`;
    body += description;
  });
  res.send(body);
});

app.listen(3000, function() {
  console.log(process.env);
  console.log('Listening: http://localhost:3000');
});
