const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()
Todo.findOneAndRemove({_id:'5b959042fe5506b4a8a1589a'}).then((todo)=>{
    console.log(todo);
});
// Todo.findByIdAndRemove('5b958f5bfe5506b4a8a15835').then((todo)=>{
//     console.log(todo);
// });