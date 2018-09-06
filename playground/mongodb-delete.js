// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true}, (err, client)=>{
    if (err)
    {
        return console.log('Unable to connect to the mongo database server.')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // delete many
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // delete One
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
            console.log(result);
        });

    // client.close();
});