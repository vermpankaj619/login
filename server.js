var express = require('express');
var app = express();

 var port = 3001;

 app.use(express.static(__dirname + '/'));
 app.listen(port);
 
 console.log('Server Started at' + port);

 app.post('/api/login', function(req, res) {

 var results = [{
 	
	title: "C++",
	instructor: "PAnkaj VermA",
	level : "Bigineer",
	total_vedios: 20
},{
	title: "Java",
	instructor: "PAnkaj VermA",
	level : "Bignieer",
	total_vedios : 30
},{
	title: "JavaScript",
	instructor: "PAnkaj VermA",
	level : "Bigineer",
	total_vedios: 15
},{
	title: "C",
	instructor: "PAnkaj VermA",
	level : "Bigneer",
	total_vedios: 20
},{
	title: "Jquery",
	instructor: "PAnkaj VermA",
	level : "Bigineer",
	total_vedios: 15
},{
	title: "Python",
	instructor: "PAnkaj VermA",
	level : "Bigineer",
	total_vedios: 15
},{
	title: "Machine Learning",
	instructor: "PAnkaj VermA",
	level : "Bigineer",
	total_vedios: 15
}];


res.json(results);
  })