import express from 'express';
import { createUserProfile } from '../controllers/userProfileController.js';

const router = express.Router();

// Route for creating user profile
router.post('/adminProfile', createUserProfile);

export { router }; // Named export
