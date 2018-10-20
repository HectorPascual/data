var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    id: Number,
    position: Number,
    best_score: Number,
    attempt_number: Number,
  });
module.exports = mongoose.model('User', UserSchema);
  