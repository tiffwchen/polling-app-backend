const db = require("../models");
const Teacher = db.teachers;

exports.createTeacher = (req, res) => {
    const teacher = {
        name: req.body.name
    };
    Teacher.create(teacher)
      .then(data => {
        console.log(">> Created teacher: " + JSON.stringify(teacher, null, 4));
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the teacher."
            });
      });
  };

  exports.findAll = (req, res) => {
    Teacher.findAll({ include: ["questions", "students"] })
    .then(data => {
      res.send(data);
    }).catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving teachers."
        });
    });
  };

  exports.findTeacherById = (req, res) => {
    const id = req.params.id;

    Teacher.findByPk(id, { include: ["questions", "students"] })
      .then(data => {
        if(data){
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find Teacher with id=${id}.`
            });
        }
      })
      .catch((err) => {
        res.status(500).send({
            message: "Error retrieving Teacher with id=" + id
        });
      });
  };