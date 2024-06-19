const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/student.controller');

router.post('/students', StudentController.createStudent);
router.get('/students', StudentController.getAllStudents);
router.get('/students/state', StudentController.getStudentsByState);
router.get('/students/lucky_number/:operator/:value', StudentController.getStudentsByLuckyNumber);
router.put('/students/:id', StudentController.updateStudent);
router.delete('/students/:id', StudentController.deleteStudent);
router.delete('/students/state', StudentController.deleteStudentsByState);
router.patch('/students/:id/add_interest', StudentController.addInterest);
router.patch('/students/:id/remove_interest', StudentController.removeInterest);
router.patch('/students/increment_belts', StudentController.incrementBelts);

module.exports = router;
