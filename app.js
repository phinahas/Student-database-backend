const express = require('express')
const bodyParser = require('body-parser')

var db = require('./config/connection')

const server = express()


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



//Routes
server.get('/',(req,res)=>{
    res.send("Hello")
})




//Listen to server
server.listen(3000)