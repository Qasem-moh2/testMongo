const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const dbName = 'test';
let db;

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
    if (err) {
        console.log(err);
        return;
    }
    db = client.db(dbName);
    console.log(`Connected to MongoDB: ${url}`);
    console.log(`Database: ${dbName}`);
});