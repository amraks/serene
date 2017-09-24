const bodyParser = require('body-parser');
const crypto = require('crypto');
const hash = crypto.createHash('sha256');
const mongoose = require('mongoose');
const express = require('express')
const path = require('path');
const uuidv4 = require('uuid/v4');

const User = require('./user');

mongoose.connect('mongodb://mongo/user');

mongoose.connection
  .once('open', () => { 
    console.log('Connection established')
  })
  .on('error', (error) => {
    throw error;
  });

const app = express()

app.use(express.static('ui'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.sendFile('index.html');
})

app.post('/signup', (request, response) => {
  const email = request.body.email;
  const password = request.body.password;
  const verifyPassword = request.body.verifyPassword;

  // Placeholder until we implement the logic
  const userExists = false;
  if (userExists) {
    response.status(409).send('Email is already registered.')
  }

  if (password != verifyPassword) {
    response.status(400).send('Passwords do not match.')
  }

  const salt = uuidv4();
  const saltedPassword = password + salt;
  const hashedPassword = hash.update(saltedPassword).digest('hex');

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
