var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8001,
    app = express();

app.use(express.static(path.join(__dirname, './client')));

app.use(express.static(path.join(__dirname, './bower_components')));
app.use(bodyParser.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8001,function() {});
