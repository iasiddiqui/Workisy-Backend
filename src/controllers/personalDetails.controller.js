import PersonalDetails from "../Models/personalDetails.model.js";

export const createPersonalDetails = async (req, res) => {
    try {
        const personalDetails = new PersonalDetails(req.body);
        await personalDetails.save();
        res.status(201).json(personalDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
