import { Request, Response } from 'express';
import Documentation from '../models/documentationModel.js';
import { DocumentationType } from '../types.js';

export const createDocumentation = async (req: Request, res: Response): Promise<void> => {
  try {
    const { projectName, docUrl, docLink } = req.body;

    if (!projectName || !docUrl || !docLink) {
      res.status(400).json({ message: 'All fields are required.' });
      return;
    }

    const newDoc = new Documentation({ projectName, docUrl, docLink });
    await newDoc.save();

    res.status(201).json(newDoc);
  } catch (err) {
    console.error('Error creating documentation', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAllDocumentation = async (req: Request, res: Response): Promise<void> => {
  try {
    const docs = await Documentation.find();
    res.status(200).json(docs);
  } catch (err) {
    console.error('Error fetching documentation:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getDocsByProject = async (req: Request, res: Response): Promise<void> => {
  try {
    const { projectName } = req.params;
    const docs = await Documentation.find({ projectName });
    res.status(200).json(docs);
  } catch (err) {
    console.error('Error fetching project documentation:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
