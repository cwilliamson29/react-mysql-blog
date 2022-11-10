require("dotenv").config();
require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("_middleware/errorHandler");
const authenticate = require("./users/users.service");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(errorHandler);

//app.use("/users", authenticate);
app.use("/users", require("./users/users.controller"));

const port = 4000;
app.listen(port, () => {
    console.log("Server Listening on http://localhost:" + port);
});
