// models/user.js
const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  recipe: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pantry: [foodSchema], // embedding the applicationSchema here
});

const User = mongoose.model('User', userSchema);

module.exports = User;
