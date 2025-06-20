import { Request, Response, NextFunction } from 'express';
import Project from '../models/projectModel.js';

export const findProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name } = req.query;
    if (!name) {
      res.status(400).json({ error: 'Missing project name' });
      return;
    }

    const data = await Project.findOne({ projectName: name });
    if (!data) {
      res.status(404).json({ error: 'Project not found' });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    console.error('Error in findProject:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

export const getAllProjectNames = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const projects = await Project.find({}, 'projectName');
    const projectNames = projects.map((p) => p.projectName);
    //res.status(200).json(projectNames);
    res.status(200).json(projects);
    console.log('in controller', projects);
  } catch (err) {
    console.error('Failed to fetch project names:', err);
    res.status(500).json({ error: 'Server error fetching projects' });
  }
};
