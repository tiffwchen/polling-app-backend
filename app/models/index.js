const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.answers = require("./answer.model.js")(sequelize, Sequelize);
db.questions = require("./question.model.js")(sequelize, Sequelize);
db.students = require("./student.model.js")(sequelize, Sequelize);
db.teachers = require("./teacher.model.js")(sequelize, Sequelize);

db.teachers.hasMany(db.questions, {as: 'questions'});
db.questions.belongsTo(db.teachers, {foreignKey: 'teacherId'});

db.teachers.hasMany(db.students, {as: 'students'});
db.students.belongsTo(db.teachers, {foreignKey: 'teacherId'});

db.students.hasMany(db.answers, {as: 'answers'});
db.answers.belongsTo(db.students, {foreignKey: 'studentId'});

db.questions.hasMany(db.answers, {as: 'answers'});
db.answers.belongsTo(db.questions, {foreignKey: 'questionId'});

module.exports = db;