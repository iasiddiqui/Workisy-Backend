const express = require('express');
const { registerUser } = require('./userController'); // Update the path accordingly

const router = express.Router();

// Route for user registration
router.post('/register', registerUser);

module.exports = router;
