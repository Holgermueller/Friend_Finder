//requires
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

//get server running
const app = express()
const PORT = 3000;

app.get('/', function(req, res) {
    res.send('Welcome to the friend finder!');
    res.sendFile(path.join(__dirname, "home.html"));
}); 