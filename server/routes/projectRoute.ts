import express from 'express';
import { createProject } from '../controllers/projecttemplateController.js';
import { getAllProjectNames, findProject } from '../controllers/projectController.js';

const router = express.Router();

//* POST /api/project
router.post('/project', createProject);

//* GET /api/project
router.get('/project', getAllProjectNames);

//* GET /api/project/find?name=XYZ
router.get('/project/find', findProject);

export default router;
