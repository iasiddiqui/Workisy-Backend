import mongoose from "mongoose";

const personalDetailsSchema = new mongoose.Schema({
  gender: { type: String, required: true },
  personalValues: [{ type: String }],
  maritalStatus: { type: String },
  dateOfBirth: {
    day: { type: Number, required: true },
    month: { type: String, required: true },
    year: { type: Number, required: true },
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

// Career Profile Schema
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

// Certification Schema
const certificationSchema = new mongoose.Schema({
  certName: { type: String },
  certIssuedBy: { type: String },
  certificateURL: { type: String },
  certYear: { type: Number },
  certMonth: { type: String },
});

// Awards Schema
const awardsSchema = new mongoose.Schema({
  award: { type: String },
  year: { type: Number },
  month: { type: String },
  description: { type: String },
});

// Profile Summary Schema
const profileSummarySchema = new mongoose.Schema({
  summary: { type: String },
});

// IT Skills Schema
const itSkillsSchema = new mongoose.Schema({
  skill: { type: String },
  version: { type: String },
  lastUsed: { type: String },
  expYear: { type: Number },
  expMonth: { type: String },
});

// Project Schema
const projectSchema = new mongoose.Schema({
  title: { type: String },
  clientName: { type: String },
  status: { type: String },
  startDate: {
    year: { type: Number },
    month: { type: String },
  },
  endDate: {
    year: { type: Number },
    month: { type: String },
  },
  details: { type: String },
  site: { type: String },
  natureOfEmployment: { type: String },
  skillsUsed: [{ type: String }],
  roleDescription: { type: String },
  role: { type: String },
  teamSize: { type: Number },
});

// Education Schema
const educationSchema = new mongoose.Schema({
  educationType: { type: String },
  university: { type: String },
  course: { type: String },
  specialization: { type: String },
  startYear: { type: Number },
  endYear: { type: Number },
  gradeType: { type: String },
  marks: { type: String },
});

// Employment Schema
const employmentSchema = new mongoose.Schema({
  companyName: { type: String },
  jobTitle: { type: String },
  currentSalary: { type: String },
  skillsUsed: [{ type: String }],
  jobProfile: { type: String },
  joinDate: {
    year: { type: Number },
    month: { type: String },
  },
  endDate: {
    year: { type: Number },
    month: { type: String },
  },
});

// User Profile Schema
const UserProfileSchema = new mongoose.Schema({
  personalDetails: personalDetailsSchema,
  careerProfile: careerProfileSchema,
  certifications: [certificationSchema],
  awards: [awardsSchema],
  profileSummary: profileSummarySchema,
  itSkills: [itSkillsSchema],
  projects: [projectSchema],
  education: [educationSchema],
  employment: [employmentSchema],
});

const UserProfile = mongoose.model("UserProfile", UserProfileSchema);

export default UserProfile;
