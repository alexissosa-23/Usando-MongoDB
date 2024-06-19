const Student = require('../models/student.model');

module.exports = {
    createStudent: (req, res) => {
        Student.create(req.body)
            .then(student => res.json(student))
            .catch(err => res.json(err));
    },

    getAllStudents: (req, res) => {
        Student.find()
            .then(students => res.json(students))
            .catch(err => res.json(err));
    },

    getStudentsByState: (req, res) => {
        Student.find({ home_state: { $in: ["California", "Washington"] } })
            .then(students => res.json(students))
            .catch(err => res.json(err));
    },

    getStudentsByLuckyNumber: (req, res) => {
        const { operator, value } = req.params;
        let query;
        if (operator === "gt") {
            query = { lucky_number: { $gt: value } };
        } else if (operator === "lte") {
            query = { lucky_number: { $lte: value } };
        } else if (operator === "range") {
            query = { lucky_number: { $gte: 1, $lte: 9 } };
        }
        Student.find(query)
            .then(students => res.json(students))
            .catch(err => res.json(err));
    },

    updateStudent: (req, res) => {
        Student.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(student => res.json(student))
            .catch(err => res.json(err));
    },

    deleteStudent: (req, res) => {
        Student.deleteOne({ _id: req.params.id })
            .then(result => res.json(result))
            .catch(err => res.json(err));
    },

    deleteStudentsByState: (req, res) => {
        Student.deleteMany({ home_state: "California" })
            .then(result => res.json(result))
            .catch(err => res.json(err));
    },

    incrementBelts: (req, res) => {
        Student.updateMany({ home_state: "Washington" }, { $inc: { belts_earned: 1 } })
            .then(result => res.json(result))
            .catch(err => res.json(err));
    },

    addInterest: (req, res) => {
        Student.updateOne({ _id: req.params.id }, { $push: { interests: req.body.interest } })
            .then(result => res.json(result))
            .catch(err => res.json(err));
    },

    removeInterest: (req, res) => {
        Student.updateOne({ _id: req.params.id }, { $pull: { interests: req.body.interest } })
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }
};
