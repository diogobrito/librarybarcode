var express = require('express');
var app = express();

require('dotenv').config({silent: true});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

var port = process.env.PORT || process.env.VCAP_APP_PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on + 'port' + !');
});
