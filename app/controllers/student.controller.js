const db = require("../models");
const Student = db.students;

exports.createStudent = (req, res) => {
    const student = {
        name: req.body.name,
        teacherId: req.body.teacherId
    };

    Student.create(student)
      .then(data => {
        console.log(">> Created student: " + JSON.stringify(student, null, 4));
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the student."
            });
      });
  };

  exports.findStudentById = (req, res) => {
    const id = req.params.id;

    Student.findByPk(id, { include: ["answers"] })
      .then(data => {
        if(data){
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find student with id=${id}.`
            });
        }
      })
      .catch((err) => {
        res.status(500).send({
            message: "Error retrieving student with id=" + id
        });
      });
  };

  exports.findAll = (req, res) => {
    Student.findAll({ include: ["answers"] })
    .then(data => {
      res.send(data);
    }).catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving student."
        });
    });
  };