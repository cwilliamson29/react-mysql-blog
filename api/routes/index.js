import express from "express";
import postRoutes from "./posts.js";
import authRoutes from "./auth.js";
import userRoutes from "./users.js";

const router = express.Router();

//const categoryRoute = require("./categories");

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
//router.use("/categories", categoryRoute);

export default router;
