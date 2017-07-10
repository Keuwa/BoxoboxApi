// Init variable
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// Define users schema
var MessageSchema = new mongoose.Schema({
  message: {
    type: 'String',
    required: true
  },
  date: {
    type:'Date',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

// Export the Mongoose model
module.exports = mongoose.model('Message', MessageSchema);
