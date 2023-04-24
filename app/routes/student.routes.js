module.exports = app => {
    const students = require("../controllers/student.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Student
    router.post("/", students.createStudent);
  
    // Retrieve all Students
    router.get("/", students.findAll);
  
    // Retrieve a single Student with id
    router.get("/:id", students.findStudentById);
  
    app.use('/api/students', router);
  };