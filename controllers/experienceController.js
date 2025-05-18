const Experience = require('../models/Experience');

exports.getAllExperience = async (req, res) => {
  try {
    const experiences = await Experience.find();
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getExperienceById = async (req, res) => {
  try {
    const experience = await Experience.findById(req.params.id);
    if (!experience) return res.status(404).json({ message: 'Experience not found' });
    res.json(experience);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createExperience = async (req, res) => {
  try {
    const newExperience = new Experience(req.body);
    const savedExperience = await newExperience.save();
    res.status(201).json(savedExperience);
  } catch (error) {
    res.status(400).json({ message: 'Bad request', error: error.message });
  }
};

exports.updateExperience = async (req, res) => {
  try {
    const updatedExperience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedExperience) return res.status(404).json({ message: 'Experience not found' });
    res.json(updatedExperience);
  } catch (error) {
    res.status(400).json({ message: 'Bad request', error: error.message });
  }
};

exports.deleteExperience = async (req, res) => {
  try {
    const deletedExperience = await Experience.findByIdAndDelete(req.params.id);
    if (!deletedExperience) return res.status(404).json({ message: 'Experience not found' });
    res.json({ message: 'Experience deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
