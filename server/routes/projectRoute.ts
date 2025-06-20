import express from 'express';
import { createProject } from '../controllers/projecttemplateController.js';
import * as projectController from '../controllers/projectController.js';

const router = express.Router();

//* POST /api/project – Create a new project
router.post('/', createProject);

//* GET /api/project/all – Get all project names (for dropdowns)
router.get('/all', projectController.getAllProjectNames);

//* GET /api/project/find?name=... – Get a project by name
router.get('/find', projectController.findProject);

export default router;
