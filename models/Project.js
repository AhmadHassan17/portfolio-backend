const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String },          // URL or path to image
  link: { type: String },         // Optional project link (e.g., GitHub, live demo)
});

module.exports = mongoose.model('Project', ProjectSchema);
