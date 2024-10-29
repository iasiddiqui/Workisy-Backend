// controllers/careerDetails.controller.js
import CareerDetails from '../Models/careerDetails.model.js'; // Ensure this path is correct

export const createCareerDetails = async (req, res) => {
    try {
        const careerDetailsData = req.body; // Get data from request body
        const newCareerDetails = new CareerDetails(careerDetailsData); // Create a new instance of the model
        await newCareerDetails.save(); // Save the data to the database
        res.status(201).json(newCareerDetails); // Send a success response
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: error.message }); // Send an error response
    }
};
