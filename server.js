const express = require("express");
//const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// https://stackoverflow.com/questions/66548302/body-parser-deprecated
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(express.json());


const db = require("./app/models");
db.sequelize.sync();

// re-doing db
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

// routes
require("./app/routes/teacher.routes")(app);
require("./app/routes/student.routes")(app);
require("./app/routes/question.routes")(app);
require("./app/routes/answer.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});