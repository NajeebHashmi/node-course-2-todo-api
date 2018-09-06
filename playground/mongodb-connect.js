// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client)=>{
    if (err)
    {
        return console.log('Unable to connect to the mongo database server.')
    }
    console.log('Connected to MongoDB server')

    // const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, results)=>{
    //     if (err)
    //     {
    //         return console.log('Unable to insert todo');
    //     }

    //     console.log(JSON.stringify(results.ops,undefined,2));
    // })
    //Insert a new doc into Users (name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Najeeb',
    //     age: 50,
    //     location: 'San Jose'
    // }, (err, results)=>{
    //     if (err)
    //     {
    //         return console.log('Unable to insert into Users',err);
    //     }

    //     console.log(JSON.stringify(results.ops[0]._id.getTimestamp()));
    // })
    client.close();
});