import dotenv from 'dotenv';
import express from 'express';
import mysql from 'mysql2';
const app = express();

dotenv.config({path: 'mysql/.env'}); // yarn add dotenv

app.get('/',  (req, res) => {
  const connection = mysql
    .createConnection({
      host: process.env.HOST,
      user: process.env.DB_USER,
      password:process.env.PASSWORD,
      database: process.env.DATABASE,
    })
    .promise(); // promise를 사용

  let body = '<h1>single row</h1>';
  let queryPromise = connection.query('SELECT * FROM topic WHERE id = ?', [5]);
  queryPromise
    .then((value) => {
      let[results, fields] = value;
      console.log({results, fields});
      let [row] = results; // let row = results[0];
      body +=`<h2>${row.title}</h2>`;
      body += row.description;
      return connection.query('SELECT * FROM topic');
    })
    .then(([results, fields]) => {
      // 두 번째 쿼리 결과 체이닝
      console.log({results, fields});
      body += `<h1>multi row</h1>`;
      /* 모든 row에 대해 실행 */
      results.forEach (({ title, description }) => {
        body += `<h2>${title}</h2>`;
        body += description;
      });
      return Promise.resolve(body);
    })
    .then((value) => res.send(value))
    .catch(console.error)
    .finally(() => connection.destroy());
});

app.listen(3000, function() {
    console.log('Listening: http://localhost:3000');
});
