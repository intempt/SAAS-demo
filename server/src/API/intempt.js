import express from 'express';
const router = express.Router();

import { asyncHandler } from '../Middleware/asyncErrorHandler.js';
import { requireAuth } from '../Middleware/auth.js';
import { GetExperience } from '../Controllers/intempt.js';

// Get Intempt experience
router.get('/intempt/experience', requireAuth, asyncHandler(GetExperience));

export default router;
