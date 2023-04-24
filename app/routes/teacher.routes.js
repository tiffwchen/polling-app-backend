module.exports = app => {
    const teachers = require("../controllers/teacher.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Question
    router.post("/", teachers.createTeacher);
  
    // Retrieve all Questions
    router.get("/", teachers.findAll);
  
    // Retrieve a single Question with id
    router.get("/:id", teachers.findTeacherById);
  
    app.use('/api/teachers', router);
  };