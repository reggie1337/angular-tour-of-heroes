const { Pool } = require ('pg');
const express = require ('express');
const { readFile } = require('fs').promises;

const app = express();

const pool = new Pool ({
    user: 'newuser',
    host: 'localhost',
    database: 'heroes',
    password: 'password',
    port: 3000,
})

pool.query('SELECT NOW ()', (err,res) =>{
    console.log(err,res);
    pool.end();
})

app.get('/', async (req, res) => {
    try {
      const { rows } = await pool.query('SELECT * FROM heroes');
      res.json(rows);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });

app.listen(process.env.PORT || 3000, ()=> console.log('the tour is on http://localhost:3000'))