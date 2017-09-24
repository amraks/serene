const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  salt: String
});

const User = mongoose.model('user', UserSchema);

module.exports = User;