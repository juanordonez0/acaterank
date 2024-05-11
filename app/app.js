import express from "express";
import {pool} from "../db/db.js";

const app = express()

app.get('/', async function(req, res) {
  const result = await pool.query('SELECT "hello world" as RESULT')
  res.json(result)
})

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
