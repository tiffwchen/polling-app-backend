module.exports = app => {
    const answers = require("../controllers/answer.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Answer
    router.post("/", answers.createAnswer);
  
    // Retrieve all Answers
    router.get("/", answers.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", answers.findAnswerById);

    app.use('/api/answers', router);
  };