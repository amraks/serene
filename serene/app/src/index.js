const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const crypto = require('crypto');
const express = require('express')
const fs = require('fs');
const mongoose = require('mongoose');
const os = require('os');
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

app.post('/runcode', (request, response) => {
  const code = request.body.code.replace(/\\n/, os.EOL);
  const tempFile = '/coderunner/' + uuidv4();

  console.log(`Creating file ${tempFile} with contents: \n${code}`);

  fs.writeFile(tempFile, code, (err) => {
    if (err) {
      response.status(500).send('Could not create source file to run.');
      throw err;
    }
  });

  p = spawn('docker', ['run', '-v', 'coderunner:/coderunner', 'python2:coderunner', tempFile])

  p.stdout.on('data', (data) => {
    response.json({
      data: data.toString()
    })
  });
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
