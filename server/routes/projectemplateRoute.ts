import express from 'express';
import createProject from '../controllers/projecttemplateController.js';

const router = express.Router();

router.post('/', createProject);

export default router;
