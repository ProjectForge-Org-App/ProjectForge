import express from 'express';
import documentationController from '../controllers/documentationController.js';

const router = express.Router();

router.post('/documentation/new');
router.get('/documentation');

export default router;
