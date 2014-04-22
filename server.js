// Define routes for simple SSJS web app. 
// Writes Coinbase orders to database.
var express = require('express')
  , fs      = require('fs')
  , http    = require('http')
  , https   = require('https')

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8000);

var oneDay = 86400000;
app.use(express.compress());
app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

app.get('/', function(request, response) {
  var html = fs.readFileSync('./views/templates/index.html').toString();
  response.send(html);
});

app.get('/test', function(request, response) {
  var html = fs.readFileSync('./views/templates/example.html').toString();
  response.send(html);
});

http.createServer(app).listen(app.get('port'), function() {
  console.log("Listening on " + app.get('port'));
});