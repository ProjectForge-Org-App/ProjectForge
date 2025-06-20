import { Request, Response } from 'express';
import Project from '../models/projectModel.js';

const createProject = async (req: Request, res: Response) => {
  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error('Error saving project:', error);
    res.status(500).json({ error: 'Failed to save project' });
  }
};

export default createProject;
