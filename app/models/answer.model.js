module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define("answer", {
      answer: {
        type: Sequelize.INTEGER
      }
    });
  
    return Answer;
  };