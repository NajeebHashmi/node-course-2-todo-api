const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');



//var id = '5b91bc6b81872f48e018ddc44';
var id = '5b919b921d80164e50660652'
if (!ObjectID.isValid(id))
{
    console.log('ID not valid');
}

// Todo.find({
//     _id:id
// }).then((todos) =>{
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo) =>{
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) =>{
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('TodobyID',todo);
// }).catch((e)=>console.log(e));

User.findById(id).then((user) =>{
    if (!user) {
        return console.log('ID not found');
    }
    console.log('User by ID',user);
}).catch((e)=>console.log(e));
