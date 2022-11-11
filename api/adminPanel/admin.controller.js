const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validateRequest = require("_middleware/validateRequest");
const authorize = require("_middleware/authorize");
const userService = require("../users/users.service");

router.get("/", authorize(), isAdmin, getAll);

module.exports = router;

function isAdmin(req, res, next) {
    if (req.user.userType !== "admin") {
        return res.status(401).send({ msg: "Not an admin, sorry" });
    }
    next();
}

function getAll(req, res, next) {
    userService
        .getAll()
        .then((users) => res.json(users))
        .catch(next);
}
