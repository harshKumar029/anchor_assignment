const mongoose = require('mongoose');

const Login = new mongoose.Schema({
  userEmail: { type: String, required: true },
});

module.exports = mongoose.model('Login', Login);