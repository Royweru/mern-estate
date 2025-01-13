import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const uri = process.env.MONGO_URI

console.log(uri)

mongoose.connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));
const app = express()

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})