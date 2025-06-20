import Project from '../models/projectModel.js';
import { Request, Response, NextFunction } from 'express';

const projectController: Record<string, (req: Request, res: Response, next: NextFunction) => Promise<void>> = {};

projectController.findProject = async (req, res, next) => {
  const { name } = req.query;
  if (!name) {
    res.status(400).json({ error: 'Missing project name' });
    return;
  }

  try {
    const data = await Project.findOne({ name });
    if (!data) {
      res.status(404).json({ error: 'Project not found' });
      return;
    }

    res.locals.project = data;
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
    return;
  }
};

export default projectController;
