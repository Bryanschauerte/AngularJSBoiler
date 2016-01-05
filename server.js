var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 8811;



app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'))
app.use(cors());

var config = module.exports = {};
config.portNum = port;

var portNum = config.portNum;

app.listen(portNum, function () {
    console.log('Making some magic on port:', portNum);
});
