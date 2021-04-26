const router = require("express").Router();
const userRoutes = require("./userRoutes");
const docRoutes = require("./docsRoute");


router.use("/", docRoutes);
router.use("/users", userRoutes);