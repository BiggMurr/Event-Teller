require ('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , controller = require('./controller') 
    

const app = express()

app.use(bodyParser.json());

const port = 4000

app.listen(port, () => console.log(`0,0 is listening on port: ${port}`))