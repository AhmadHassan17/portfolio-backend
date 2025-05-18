const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String },        // e.g., Beginner, Intermediate, Expert
  description: { type: String },
});

module.exports = mongoose.model('Skill', SkillSchema);
