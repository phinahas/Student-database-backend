const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

var db = require('./config/connection')

const server = express()

//Middlewears
server.use(cors());
server.use(bodyParser.json())

//Students routes
const adminRoute = require('./routes/admin');


//Middlewears
server.use('/',adminRoute);



//Database connection
db.connect((err)=>{
    if(err)
    console.log(err);
    else
    console.log("Connection Made");
})







//Listen to server
server.listen(5000)