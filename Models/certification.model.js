import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema({
  certificateName: {
    type: String,
    required: true,
  },
  issuedBy: {
    type: String,
    required: true,
  },
  certificateUrl: {
    type: String,
    required: true,
  },
  validity: {
    year: {
      type: String,
    },
    month: {
      type: String,
    },
  },
});

const Certification = mongoose.model("Certification", certificationSchema);
export default Certification;
