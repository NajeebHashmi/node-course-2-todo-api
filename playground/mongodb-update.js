// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client)=>{
    if (err)
    {
        return console.log('Unable to connect to the mongo database server.')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    db.collection('Todos').findOneAndUpdate({_id:new ObjectID('5b9087cb6875e7176820e686')},{$set:{completed:true}},{returnOriginal:false}).then((result)=>{
        console.log(result);
    })

    db.collection('Users').findOneAndUpdate({_id:new ObjectID('5b907424ca4a3848c411f9dc')},{$set:{name:'Najeeb'},$inc:{age:1}},{returnOriginal:false}).then((result)=>{
        console.log(result);
    });
    
    

    // client.close();
});