const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  category: String
});

module.exports = mongoose.model('Travel', travelSchema);
