import dotenv from 'dotenv';
import express from 'express';
import mysql from 'mysql2';
const app = express();

dotenv.config({path: 'mysql/.env'}); // yarn add dotenv

app.get('/', async (req, res) => {
  const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password:process.env.PASSWORD,
    database: process.env.DATABASE,
  })
  .promise();

  let body = '<h1>multiple row</h1>';
  // let value = await connection.query('SELECT * FROM topic');
  // let results = value[0]; // row가 모여있는 배열 데이터
  // let value = value[1]; // 필드 정보
  let [results, fields] = await connection.query('SELECT * FROM topic');
  console.log({results, fields});
  results.forEach((row) => {
    // let title = row.title, description = row.description
    let {title, description} = row;
    body += `<h2>${title}</h2>`;
    body += description;
  });
  res.send(body);
});

app.listen(3000, function() {
  console.log('Listening: http://localhost:3000');
});
