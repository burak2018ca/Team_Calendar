const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()
const footballRoutes = require('./routes/football');
const {errorHandler} = require("./middleware/errorMiddleware")
const port  = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(errorHandler)
app.use('/api', footballRoutes);

app.listen(port, ()=> console.log(`Server started on port ${port}`))