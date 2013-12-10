// Define routes for simple SSJS web app. 
// Writes Coinbase orders to database.
var express = require('express')
  , fs      = require('fs')
  , http    = require('http')
  , https   = require('https')

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var html = fs.readFileSync('index.html').toString();
  response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("listening on " + port);
});
