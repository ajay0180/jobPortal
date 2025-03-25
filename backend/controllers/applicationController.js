const Application = require("../models/applicationModel");
const Job = require("../models/jobModel");

exports.applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res
        .status(400)
        .json({ message: "Job is required", success: false });
    }

    //check if the user has already applied for existing job...
    const existingApplication = await Application.findOne({
      jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res.status(404).json({
        message: "You have already applied for this job",
        success: false,
      });
    }

    //check if the job exists...
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found", success: false });
    }

    //create new application...
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    job.applications.push(newApplication._id);
    await job.save();
    return res.status(200).json({
      message: "job applied successfully",
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });
    if (!application) {
      return res
        .status(404)
        .json({ message: "no application", success: false });
    }

    return res.status(200).json({
      application,
      message: "fetched all applications successfully",
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
};

//admin dekhega kitna user ne apply kiya hai...
exports.getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
      },
    });
    if (!job) {
      return res.status(404).json({ message: "Job not found", success: false });
    }

    return res.status(200).json({ job, success: true });
  } catch (e) {
    console.log(e);
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res
        .status(404)
        .json({ message: "status is required", success: false });
    }

    //find the application by applicant's id...
    const application = await Application.findOne({ _id: applicationId });
    if (!application) {
      return res
        .status(404)
        .json({ message: "application not found", success: false });
    }

    //update the status...
    application.status = status.toLowerCase();
    await application.save();
    return res.status(200).json({
      application,
      message: "Application status updated",
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
};
