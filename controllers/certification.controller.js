import Certification from "../Models/certification.model.js"; 

export const createCertification = async (req, res) => {
  try {
    const certData = req.body;
    const newCertification = new Certification(certData);
    await newCertification.save();
    res.status(201).json(newCertification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
