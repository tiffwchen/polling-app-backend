const db = require("../models");
const Answer = db.answers;

exports.createAnswer = (req, res) => {
    const answer = {
        answer: req.body.answer,
        questionId: req.body.questionId,
        studentId: req.body.studentId
      };

    Answer.create(answer)
      .then(data => {
        console.log(">> Created answer: " + JSON.stringify(answer, null, 4));
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the answer."
        });
      });
  };

  exports.findAll = (req, res) => {
    Answer.findAll()
    .then(data => {
      res.send(data);
    }).catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving answers."
        });
    });
  };

exports.findAnswerById = (req, res) => {
    const id = req.params.id;

    Answer.findByPk(id)
      .then(data => {
        if(data){
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find Answer with id=${id}.`
            });
        }
      })
      .catch((err) => {
        res.status(500).send({
            message: "Error retrieving Answer with id=" + id
        });
      });
  };

