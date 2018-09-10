const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.json());

// GET /todos/1234
app.get('/todos/:id',(req, res) => {
    
    var id = req.params.id;
    if (!ObjectID.isValid(id))
    {
        return res.status(404).send();
    }

    //Query the database, FindbyID
    Todo.findOne({
        _id: id,
      }).then((todo) => {
        if (!todo) {
          return res.status(404).send();
        }
    
        res.send({todo});
      }).catch((e) => {
        res.status(400).send();
      });
    });

    app.delete('/todos/:id',(req, res) => {
        console.log('reached here');
        var id = req.params.id;
        if (!ObjectID.isValid(id))
        {
            console.log('Bad ID');
            return res.status(404).send();
        }
        Todo.findByIdAndRemove(id).then((todo)=>{
            if (!todo)
            {
                console.log(todo);
                return res.status(404).send();
                
            }
            res.send(todo);
         }).catch((e) => {
            console.log('Error',e);
            return res.status(404).send();
         });
    });
    
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

    app.patch('/todos/:id', (req, res) => {
        var id = req.params.id;
        var body = _.pick(req.body,['text','completed']);
        if (!ObjectID.isValid(id))
        {
            return res.status(404).send();
        }

        if (_.isBoolean(body.completed) && body.completed) {
            body.completedAT = new Date().getTime();
            console.log(body);
        } else {
            body.completed = false;
            body.completedAt = null
        }

        Todo.findByIdAndUpdate(id, {$set: body},{new: true}).then((todo) => {
            if (!todo){
                return res.status(404).send();
            }
            res.send({todo});
        }).catch((e) => {
            res.status(400).send();
        })
    });
    
    
    



app.listen(port, ()=>{
    console.log(`Started on port ${port}`);


module.exports = {app};
});