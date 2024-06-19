const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    home_state: { type: String, required: true },
    lucky_number: { type: Number, required: true },
    birthday: {
        month: { type: Number, required: true },
        day: { type: Number, required: true },
        year: { type: Number, required: true },
    },
    interests: { type: [String], default: ["coding", "brunch", "MongoDB"] },
    belts_earned: { type: Number, default: 0 },
    updated_on: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Student', StudentSchema);
