const bodyParser = require('body-parser');
const crypto = require('crypto');
const mongoose = require('mongoose');
const express = require('express')
const path = require('path');
const uuidv4 = require('uuid/v4');

const User = require('./user');
const UserModel = mongoose.model('user');

mongoose.connect('mongodb://mongo/user');

mongoose.connection
  .once('open', () => { 
    console.log('Connection established')
  })
  .on('error', (error) => {
    throw error;
  });

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

  UserModel.findOne({ email: email }).then((err, existingUser) => {
    if (existingUser) {
      response.status(409).send('Email is already registered.')
    }
  });

  if (password != verifyPassword) {
    response.status(400).send('Passwords do not match.')
  }

  const salt = uuidv4();
  const saltedPassword = password + salt;
  const hashedPassword = crypto.createHash('sha256').update(saltedPassword).digest('hex');

  const newUser = new User({
    email: email,
    password: hashedPassword,
    salt: salt
  });
  console.log("New user created: ", newUser);
  newUser.save();
  console.log("New user saved");

  // TODO: We need to actually add the user to the DB
  response.json({
    email: email,
    password: password,
    salt: salt,
    saltedPassword: saltedPassword,
    hashedPassword: hashedPassword
  })
})

app.post('/login', (request, response) => {
  const email = request.body.email;
  const password = request.body.password;

  response.json({
    email: email,
    password: password,
  })
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
