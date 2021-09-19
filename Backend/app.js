const express = require('express');

const InitiateMongoServer = require("./db");
InitiateMongoServer();

const AdminData = require('./src/model/Admindata');
const WaitingData = require('./src/model/Waitingdata');


const cors = require('cors');
var bodyparser=require('body-parser');
const app = express();


// share data to angular server
app.use(cors());


app.get('/user', function(req,res){
    res.header("Access-Control-Allow-orgin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
    AdminData.find()
    .then(function(admin){
        
        res.send(admin);
    });

    
    
});
app.get('/validate', function(req,res){
    res.header("Access-Control-Allow-orgin","*")
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT,DELETE, OPTIONS')
    WaitingData.find()
    .then(function(waitings){
        
        res.send(waitings);
    });

    
    
});

const port = process.env.PORT | 5555;
app.listen(port, function () {
    console.log("Listening at " + port);
});