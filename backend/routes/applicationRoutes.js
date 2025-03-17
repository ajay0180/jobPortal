const express = require("express");
const { protect } = require("../middlewares/Authentication");
const {
  applyJob,
  getAppliedJobs,
  getApplicants,
  updateStatus,
} = require("../controllers/applicationController");

const applicationRoutes = express.Router();

applicationRoutes.use(protect);
applicationRoutes.get("/apply/:id", applyJob);
applicationRoutes.get("/get", getAppliedJobs);
applicationRoutes.get("/:id/applicants", getApplicants);
applicationRoutes.post("/status/:id/update", updateStatus);

module.exports = applicationRoutes;
