// Models/careerDetails.model.js
import mongoose from 'mongoose';

const careerDetailsSchema = new mongoose.Schema({
    currentIndustry: { type: String, required: true },
    department: { type: String, default: "" },
    jobRole: { type: String, default: "" },
    radiovalue: { type: String, required: true },
    jobType: { type: String, required: true },
    employeementType: { type: String, required: true },
    locations: { type: [String], required: true },
    expSalary: { type: Number, required: true }
});

const CareerDetails = mongoose.model('CareerDetails', careerDetailsSchema);

export default CareerDetails;
