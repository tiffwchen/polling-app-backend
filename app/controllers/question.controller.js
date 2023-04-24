const db = require("../models");
const Question = db.questions;

exports.createQuestion = (req, res) => {
    const question = {
        question: req.body.question,
        teacherId: req.body.teacherId
      };

    Question.create(question)
      .then(data => {
        console.log(">> Created question: " + JSON.stringify(question, null, 4));
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the question."
        });
      });
  };

  exports.findAll = (req, res) => {
    Question.findAll({
      include: ["answers"],
    }).then(data => {
      res.send(data);
    }).catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving questions."
        });
    });
  };

exports.findQuestionById = (req, res) => {
    const id = req.params.id;

    Question.findByPk(id, { include: ["answers"] })
      .then(data => {
        if(data){
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find Question with id=${id}.`
            });
        }
      })
      .catch((err) => {
        res.status(500).send({
            message: "Error retrieving Question with id=" + id
        });
      });
  };

