var express = require("express");
var app = express();
var path = require('path');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));


//- config containing models
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(8000, function() {
    console.log("listening on port 8000");
})
