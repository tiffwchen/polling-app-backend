module.exports = app => {
    const questions = require("../controllers/question.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Question
    router.post("/", questions.createQuestion);
  
    // Retrieve all Questions
    router.get("/", questions.findAll);
  
    // Retrieve a single Question with id
    router.get("/:id", questions.findQuestionById);
  
    app.use('/api/questions', router);
  };