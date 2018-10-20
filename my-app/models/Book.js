var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    name: String,
    id: Number,
  });
module.exports = mongoose.model('Book', BookSchema);
  