var express = require('express');
var app = express();

// app.use(express.directory('client'));
app.use(express.static('client'));

app.get('/', function(req, res){
  res.sendfile('client/index.html');
});

app.get('/user', function(req, res){
  res.sendfile('client/index.html');
});

app.get('/pick/color', function(req, res){
  res.sendfile('client/index.html');
});

app.listen(3000);
