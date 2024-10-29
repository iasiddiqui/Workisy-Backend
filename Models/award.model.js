import mongoose from 'mongoose';

const awardSchema = new mongoose.Schema({
    awardName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dateOfAward: {
        year: {
            type: String,
            required: true,
        },
        month: {
            type: String,
            required: true,
        },
    },
});

const Award = mongoose.model('Award', awardSchema);
export default Award;
