var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Go grocery shopping',
	completed: false
}, {
	id: 2,
	description: 'Go home',
	completed: false
}, {
	id: 3,
	description: 'Go to work',
	completed: true
}];

// GET /
app.get('/', function (req, res) {
	res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function (req, res) {
	res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function (req, res) {
	var todoId = parseInt(req.params.id);
	for (var i = 0, len = todos.length; i < len; i++) {
		if (todos[i].id === todoId) {
			res.json(todos[i]);
		}
	}	
	res.status(404).send();
});

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});