// Routes/Routes.js
import express from 'express';

const router = express.Router();

// Define your routes here
router.get('/example', (req, res) => {
    res.send('This is an example route.');
});

export { router }; // Named export
