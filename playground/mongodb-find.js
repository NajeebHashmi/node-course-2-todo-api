// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client)=>{
    if (err)
    {
        return console.log('Unable to connect to the mongo database server.')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // db.collection('Todos').find({_id:new ObjectID('5b907c436875e7176820e26f')}).toArray().then ((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos',err);
    // });
    
    // db.collection('Todos').find().count().then ((count) => {
    //     console.log(`Todos count:${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos',err);
    // });
    db.collection('Users').find({name:'Mike'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs),undefined,2);
    },(err) =>{
        console.log('Unable to get records:',err);
    });
    // client.close();
});