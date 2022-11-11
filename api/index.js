require("dotenv").config();
require("rootpath")();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("_middleware/errorHandler");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

/*******ERROR HANDLING********/
app.use(errorHandler);

//*********ROUTES*************/
app.use("/users", require("./users/users.controller"));
app.use("/adminpanel", require("./adminPanel/admin.controller"));
//app.use("/adminpanel", require("./adminPanel/admin.controller"));

/********SERVER LISTEN********/
const port = 4000;
app.listen(port, () => {
    console.log("Server Listening on http://localhost:" + port);
});
