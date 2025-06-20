import express from 'express';
import { DocumentationType } from '../types.js';
import * as documentationController from '../controllers/documentationController.js';

const router = express.Router();

router.post('/', documentationController.createDocumentation);
router.get('/', documentationController.getAllDocumentation);
router.get('/:projectName', documentationController.getDocsByProject);

export default router;
