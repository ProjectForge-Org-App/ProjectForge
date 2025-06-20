import { Request, Response, NextFunction } from 'express';
import Documenation from '../models/documentationModel.js';

const createDocumentation = async (req, res) => {
  try {
    const { projectName, docUrl, docLink } = req.body;

    if (!projectName || !docUrl || !docLink) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newDoc = new Documenation({ projectName, docUrl, docLink });
    await newDoc.save();

    res.status(201).json(newDoc);
  } catch (err) {
    console.error('Error creating documentation', err);
    res.status(500).json({ message: 'server error' });
  }
};

const getAllDocumentation = async (req, res) => {
  try {
    const docs = await Documentation.find();
    res.status(200).json(docs);
  } catch (err) {
    console.error('Error fetching documentation:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getDocsByProject = async (req, res) => {
  try {
    const { projectName } = req.params;
    const docs = await Documentation.find({ projectName });
    res.status(200).json(docs);
  } catch (err) {
    console.error('Error fetching project documentation:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export default {
  createDocumentation,
  getAllDocumentation,
  getDocsByProject,
};
