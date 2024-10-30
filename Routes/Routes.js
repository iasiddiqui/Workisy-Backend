import express from 'express';
import { createUserProfile } from '../src/controllers/userProfile.controller.js';
import { createPersonalDetails } from '../src/controllers/personalDetails.controller.js'; 
import { createCareerDetails } from '../src/controllers/careerDetails.controller.js'
import { createCertification} from '../src/controllers/certification.controller.js'
import { createAward } from '../src/controllers/award.controller.js'

const router = express.Router();

router.post('/adminProfile', createUserProfile);
router.post("/personalDetails", createPersonalDetails);
router.post('/careerDetails',createCareerDetails);
router.post('/certification',createCertification); 
router.post('/award',createAward)


export { router }; 
