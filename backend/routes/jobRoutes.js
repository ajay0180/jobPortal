const express = require("express");
const jobController = require("../controllers/jobController");
const { protect } = require("../middlewares/Authentication");

const JobRoutes = express.Router();
JobRoutes.post("/post", protect, jobController.postJob);
JobRoutes.get("/get", protect, jobController.getAllJobs);
JobRoutes.get("/getadminjobs", protect, jobController.getAdminJobs);
JobRoutes.get("/get/:id", protect, jobController.getJobById);

module.exports = JobRoutes;
