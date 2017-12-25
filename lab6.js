var express = require('express');
var bodyParser = require('body-parser');
var Linter = require('eslint').Linter;
var linter = new Linter();
var app = express();
var urlencodedParser = bodyParser.urlencoded({extended:false});
app.use(express.static(__dirname));
app.post('/register4',urlencodedParser,function(req,res) {
		var messages = linter.verifyAndFix(req.body.userName, {
    rules: {
        semi: 2
    }
});
	if(!req.body) return res.sendStatus(400);
	console.log(req.body);
	res.send(`${messages.output}`);
});
app.get('/',function (req,res) {
	res.send('Hello');
});
app.listen(3000);