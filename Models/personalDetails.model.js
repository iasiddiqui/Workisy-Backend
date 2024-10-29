import mongoose from "mongoose";

const personalDetailsSchema = new mongoose.Schema({
  gender: { type: String, required: true },
  personalValues: [{ type: String }],
  maritalStatus: { type: String },
  dateOfBirth: {
    day: { type: Number, required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
  },
  category: { type: String },
  abledPerson: { type: Boolean },
  disableType: { type: String },
  disTypeDescr: { type: String },
  careerBreak: { type: Boolean },
  workPermit: { type: String },
  selectCountries: [{ type: String,required: true }],
  address: { type: String,required: true },
  hometown: { type: String,required: true },
  pincode: { type: String ,required: true},
  languages: [{ type: String }],
});

const PersonalDetails = mongoose.model(
  "PersonalDetails",
  personalDetailsSchema
);
export default PersonalDetails;
