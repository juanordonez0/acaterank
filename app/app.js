import express from "express";
import {pool} from "db/db.js";

const app = express()

app.get('/', function (req, res) {
  const result = pool.query('SELECT "hello world" as RESULT')
  res.json(result)
})

app.listen(3060)