const express = require('express');

const InitiateMongoServer = require("./db");
InitiateMongoServer();

const AdminData = require('./src/model/Admindata');
const WaitingData = require('./src/model/Waitingdata');


const cors = require('cors');
var bodyparser=require('body-parser');
const app = express();
app.use(express.json());

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
app.post('/addproduct' , function(req, res){
    const pro= new WaitingData({
        pname:req.body.data.pname,
        sname:req.body.data.sname,
        material:req.body.data.material,
        image:req.body.data.image,
        disc:req.body.data.disc
    })
    pro.save();
    console.log('saved')
});

const port = process.env.PORT || 5555;
app.listen(port, function () {
    console.log("Listening at " + port);
});