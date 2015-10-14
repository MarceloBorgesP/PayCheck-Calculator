var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.redirect('/index.html');
});

app.get('/api/PayCheck', function(req, res) {
	var
		salary = parseFloat(req.query.salary)
		PayCheckService = require('./app/PayCheckService'),
		salaryResult = 0;
	
	salaryResult = PayCheckService.getSalary(salary);
	
	res.send(salaryResult);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
});