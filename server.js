const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const path = require('path');

const app = express()
const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'));

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

let apiRoute = require('./app/routing/apiRoutes.js')(app);
let htmlRoute = require('./app/routing/htmlRoutes.js')(app);

app.listen(3000, () => console.log('Example app listening on port: ' + PORT + '!'))