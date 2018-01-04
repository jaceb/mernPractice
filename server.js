var path = require('path');
var fs = require('fs');
var express = require('express');

//create app//
var app = express();

app.set('view engine', 'html');
app.engine('html', function (path, options, callbacks) {
  fs.readFile(path, 'utf-8', callback);
});

//Middleware//
app.use(express.static(__dirname));

//routes //
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//error handling //
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
});

//serv app //
var port = 8080;
app.listen(port, function() {
  console.log('easy listening on port ' + port);
});
