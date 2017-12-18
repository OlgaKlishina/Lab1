var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended:false});
app.use(express.static(__dirname));
app.post('/register3',urlencodedParser,function(req,res) {
	if(!req.body) return res.sendStatus(400);
	console.log(req.body);
	res.send(`${req.body.EnterCode}`);
});
app.get('/',function (req,res) {
	res.send('Hello');
});
app.listen(3000);
