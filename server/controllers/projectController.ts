import Project from '../models/projectform.js';

const projectController = {};
projectController.findProject = async (req, res, next) => {
  const { name } = req.query;
  if (!name) return res.status(400).json({ error: 'Missing project name' });

  try {
    const data = await Project.findOne({ name });
    if (!data) return res.status(404).json({ error: 'Project not found' });

    res.locals.project = data;
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

export default projectController;
