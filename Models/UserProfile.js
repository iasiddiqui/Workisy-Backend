// models/UserProfile.js
import mongoose from "mongoose";

const personalDetailsSchema = new mongoose.Schema({
  gender: { type: String, required: true },
  personalValues: [{ type: String }],
  maritalStatus: { type: String },
  dateOfBirth: {
    day: { type: Number },
    month: { type: Number },
    year: { type: Number },
    required: true,
  },
  category: { type: String },
  abledPerson: { type: Boolean },
  disableType: { type: String },
  disTypeDescr: { type: String },
  careerBreak: { type: Boolean },
  workPermit: { type: String },
  selectCountries: [{ type: String }],
  address: { type: String },
  hometown: { type: String },
  pincode: { type: String },
  languages: [{ type: String }],
});

const careerProfileSchema = new mongoose.Schema({
  currentIndustry: { type: String },
  department: { type: String },
  jobRole: { type: String },
  radioValue: { type: String },
  jobType: {
    permanent: { type: String },
    contractual: { type: String },
  },
  employmentType: {
    fulltime: { type: String },
    parttime: { type: String },
  },
  locations: [{ type: String }],
  expSalary: { type: String },
});

// Define other schemas similarly...

const UserProfileSchema = new mongoose.Schema({
  personalDetails: personalDetailsSchema,
  careerProfile: careerProfileSchema,
  // Add other components as needed
});

const UserProfile = mongoose.model("UserProfile", UserProfileSchema);

module.exports = UserProfile;
