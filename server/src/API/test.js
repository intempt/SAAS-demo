import express from 'express';
import { asyncHandler } from '../Middleware/asyncErrorHandler.js';
import { CreateIntemptProfile } from '../Services/test/test.js';

const router = express.Router();

/* Create Intempt Profile */
router.post('/intempt/profile', asyncHandler(CreateIntemptProfile));

export default router;
