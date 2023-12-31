const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const app = express()

connectDB()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.listen(port, () => {
  console.log(`server running on port ${port}`)
})
