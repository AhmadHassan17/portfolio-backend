// controllers/educationController.js
const Education = require('../models/Education');

exports.getAllEducation = async (req, res) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getEducationById = async (req, res) => {
  try {
    const education = await Education.findById(req.params.id);
    if (!education) return res.status(404).json({ message: 'Education not found' });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createEducation = async (req, res) => {
  try {
    const newEducation = new Education(req.body);
    const savedEducation = await newEducation.save();
    res.status(201).json(savedEducation);
  } catch (error) {
    res.status(400).json({ message: 'Bad request', error: error.message });
  }
};

exports.updateEducation = async (req, res) => {
  try {
    const updatedEducation = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEducation) return res.status(404).json({ message: 'Education not found' });
    res.json(updatedEducation);
  } catch (error) {
    res.status(400).json({ message: 'Bad request', error: error.message });
  }
};

exports.deleteEducation = async (req, res) => {
  try {
    const deletedEducation = await Education.findByIdAndDelete(req.params.id);
    if (!deletedEducation) return res.status(404).json({ message: 'Education not found' });
    res.json({ message: 'Education deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
