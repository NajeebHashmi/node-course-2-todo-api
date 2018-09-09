const {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());

app.post('/todos',(req, res) => {
    var todo = new Todo({
        text:req.body.text
    });
    
    todo.save().then((doc)=> {
        res.send(doc);
    },(err)=>{
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    console.log('Received request');
    Todo.find().then((todo)=>{
        console.log(todo);
        res.status(200).send({todo});
    },(err)=>{
        res.status(400).send(err);
    });
});

// GET /todos/1234
app.get('/todos/:id',(req, res) => {
    
    var id = req.params.id;
    //Validate ID using IsValid, respond with 404
    console.log('ID:',id);
    if (!ObjectID.isValid(id))
    {
        res.status(404).send();
    }

    //Query the database, FindbyID
    Todo.findOne({
        _id: id,
        //_creator: req.user._id
      }).then((todo) => {
        if (!todo) {
          return res.status(404).send();
        }
    
        res.send({todo});
      }).catch((e) => {
        res.status(400).send();
      });
    });
    //Error->Send back 400 and send back nothing
    //Succes->if todo, send it back
    // if no todo, call succeeded but ID not found, send 404 with empty body




app.listen(port, ()=>{
    console.log(`Started on port ${port}`);


module.exports = {app};
});