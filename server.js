//requires
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

//get server running
const app = express()
const PORT = 3000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, "/app/public/home.html")));

app.listen(3000, () => console.log('Example app listening on port 3000!'))