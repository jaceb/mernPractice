var fs = require('fs');
var express = require('express');

//imports//
var indexRoutes = require('./routes/index');

//create app//
var app = express();

app.set('view engine', 'html');
app.engine('html', function (path, options, callbacks) {
  fs.readFile(path, 'utf-8', callback);
});

//Middleware//
app.use(express.static(path.join(__dirname, '../client')));

//routes//
app.use('/', indeRoutes);

//error handling //
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
});


module.exports = app;
