import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './Config/Db.js';
import { router as userRoutes } from './Routes/Routes.js';
import { errorHandler } from './Middleware/errorHandler.js'; 

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRoutes); 
app.use(errorHandler); 

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
