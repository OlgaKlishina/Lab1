var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});
app.get('/profile', function(req, res) {
   res.json({Hello: req.query.name});
});
app.listen(3000);