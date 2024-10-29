import UserProfile from "../Models/UserProfile.js"; // Make sure the path is correct

export const createUserProfile = async (req, res) => {
  try {
    const userProfileData = req.body;
    const newUserProfile = new UserProfile(userProfileData);
    await newUserProfile.save();
    res.status(201).json(newUserProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
