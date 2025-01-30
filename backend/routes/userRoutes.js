const express = require("express");
const userController = require("../controllers/userController");
const { protect } = require("../middlewares/Authentication");
const { singleUpload } = require("../middlewares/multer");

const userRoutes = express.Router();

userRoutes.post("/register", singleUpload, userController.register);
userRoutes.post("/login", userController.login);
userRoutes.get("/logout", userController.logout);
userRoutes.post("/profile/update", protect, userController.updateProfile);

module.exports = userRoutes;
