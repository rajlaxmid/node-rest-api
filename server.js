var express = require('express');
var app = express();

var bodyParser  = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


var port = 4000

var list = [
  {id: 1, name:'name 1', age: 23},
  {id: 1, name:'name 1', age: 23},
  {id: 1, name:'name 1', age: 23},
  {id: 1, name:'name 1', age: 23},
  {id: 1, name:'name 1', age: 23}
];

//Test Route
app.get('/', (req, res)=>{
	res.json({list: list});
});

//Test Route
app.get('/:id', (req, res)=>{
  res.json({list: list, id: req.params.id});
});

//Test Route
app.post('/', (req, res)=>{
  res.json({list: list, req: req.body});
});

//Test Route
app.put('/', (req, res)=>{
  res.json({list: list, req: req.body});
});

//Test Route
app.delete('/', (req, res)=>{
  res.json({list: list, req: req.body});
});


//Start the server
app.listen(port);
console.log('server listening on port: '+port);