import express from "express";
import {pool} from "../db/db.js";
import dotenv from 'dotenv'
import cors  from "cors";
dotenv.config()
const app = express()


app.use(cors())

app.get('/seed', async function(req, res) {

  const [rows]  = await pool.query('SELECT * FROM seed')

  console.log(rows.length)
  res.json(rows)


  
})

app.listen(process.env.PORT || 3000, () => console.log(`Server running on port ${process.env.PORT}`));
