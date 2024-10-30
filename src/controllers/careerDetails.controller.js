import CareerDetails from '../Models/careerDetails.model.js'; 

export const createCareerDetails = async (req, res) => {
    try {
        const careerDetailsData = req.body; 
        const newCareerDetails = new CareerDetails(careerDetailsData); 
        await newCareerDetails.save();
        res.status(201).json(newCareerDetails);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: error.message }); 
    }
};
