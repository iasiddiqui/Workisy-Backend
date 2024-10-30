import express from 'express';
import { createUserProfile } from '../controllers/userProfileController.js';
import { createPersonalDetails } from "../controllers/personalDetails.controller.js";
import { createCareerDetails } from '../controllers/careerDetails.controller.js';
import { createCertification } from '../controllers/certification.controller.js';
import { createAward } from '../controllers/award.controller.js';

const router = express.Router();

router.post('/adminProfile', createUserProfile);
router.post("/personalDetails", createPersonalDetails);
router.post('/careerDetails',createCareerDetails);
router.post('/certification',createCertification); 
router.post('/award',createAward)


export { router }; 
