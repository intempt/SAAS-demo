import express from 'express';
const router = express.Router();

import { asyncHandler } from '../Middleware/asyncErrorHandler.js';
import { requireAuth } from '../Middleware/auth.js';
import { GetOptimization } from '../Controllers/intempt.js';

// Get Intempt experience
router.get('/intempt/optimization', requireAuth, asyncHandler(GetOptimization));

export default router;
