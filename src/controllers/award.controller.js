import Award from '../Models/award.model.js';

export const createAward = async (req, res) => {
    try {
        const awardData = req.body; 
        const newAward = new Award(awardData); 
        await newAward.save(); 
        res.status(201).json(newAward); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
