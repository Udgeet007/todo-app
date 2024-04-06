const express = require('express')
const app = express();

const createTodo = require('createTodo');
const updateTodo = require('updateTodo') ;

app.use(express.json());

//body {
  //title: string;
  //description: string;
//}

app.post("/todo", function(req, res) {

});

app.get('/todos', function(req,res) {

})

app.put('/completed', function(req, res) {

})

//write basic express boilerplate code
// with express.json() middleware

const PORT = 8000;