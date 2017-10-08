const bodyParser = require('body-parser');
const crypto = require('crypto');
const mongoose = require('mongoose');
const express = require('express')
const path = require('path');
const uuidv4 = require('uuid/v4');

mongoose.connect('mongodb://mongo/serene');

mongoose.connection
  .once('open', () => { 
    console.log('Connection established')
  })
  .on('error', (error) => {
    throw error;
  });

const User = require('./user');

const app = express()

app.use(express.static('/ui'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.sendFile('index.html');
})

app.post('/signup', (request, response) => {
  const email = request.body.email;
  const password = request.body.password;
  const verifyPassword = request.body.verifyPassword;

  User.findOne({ email: email }).then((user) => {
    if (user) {
      return response.status(409).send('Email is already registered.');
    }

    if (password != verifyPassword) {
      return response.status(400).send('Passwords do not match.');
    }

    const salt = uuidv4();
    const saltedPassword = password + salt;
    const hashedPassword = crypto.createHash('sha256').update(saltedPassword).digest('hex');

    const newUser = new User({
      email: email,
      password: hashedPassword,
      salt: salt
    });

    // TODO: Use promise here and wrap the respose.json() call
    newUser.save();

    response.json({
      email: email,
      password: password,
      salt: salt,
      saltedPassword: saltedPassword,
      hashedPassword: hashedPassword
    })
  });
})

app.post('/login', (request, response) => {
  const email = request.body.email;
  const password = request.body.password;

  User.findOne({ email: email }).then((user) => {
    if (user) {
      const saltedPassword = password + user.salt;
      const hashedPassword = crypto.createHash('sha256').update(saltedPassword).digest('hex');

      if (hashedPassword === user.password) {
        response.json({
          email: email
        })
      }
    }

    response.status(401).send('Invalid email or password.');
  });
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
