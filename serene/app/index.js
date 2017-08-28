const express = require('express')
const path = require('path');

const app = express()
const MongoClient = require('mongodb').MongoClient

let connection = null;

MongoClient.connect('mongodb://mongo:27017/serene', (err, db) => {
    if (err) throw err

    connection = db
    //connection.createCollection('user', {'strict': true}, (err, collection) => {
    //    if (err) throw err
    //    collection.insert({'email': 'dtangster@yahoo.com'})
    //})
})

app.use(express.static('ui'))

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.get('/login', (req, res) => {
    connection.collection('user').find().toArray((err, result) => {
        if (err) throw err
        res.send(result)
    })
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
