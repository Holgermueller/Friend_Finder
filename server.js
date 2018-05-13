//requires
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

//get server running
const app = express()
const PORT = process.env.PORT || 3000;

//parse data with express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//ROUTER
let apiRoute = require('./app/routing/apiRoutes.js')(app);
let htmlRoute = require('./app/routing/htmlRoutes.js')(app);

app.listen(3000, () => console.log('Example app listening on port: ' + PORT + '!'))