import { Request, Response } from 'express';
import Project from '../models/projectModel.js';

export const createProject = async (req: Request, res: Response) => {
  console.log('📦 Received body:', req.body); // <-- ADD THIS

  try {
    const newProject = new Project(req.body);
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    console.error('❌ Error saving project:', error);
    if (error && typeof error === 'object' && 'errors' in error) {
      res.status(400).json({ error: 'Validation failed', details: (error as any).errors });
    } else {
      res.status(400).json({ error: 'Validation failed', details: error });
    }
  }
};
