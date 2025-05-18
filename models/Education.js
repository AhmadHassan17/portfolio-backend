// models/Education.js
const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  period: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  extra: { type: String },
});

module.exports = mongoose.model('Education', EducationSchema);
