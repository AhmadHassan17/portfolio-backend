const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  period: { type: String, required: true },
  title: { type: String, required: true },
  company: { type: String },
  description: { type: String },
  extra: { type: String },
});

module.exports = mongoose.model('Experience', ExperienceSchema);
