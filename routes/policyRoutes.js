import express from 'express';
import { getPolicies, calculateBenefits } from '../controllers/policyController.js';

const router = express.Router();
router.get('/policies', getPolicies);
router.post('/calculate', calculateBenefits);

export default router;
