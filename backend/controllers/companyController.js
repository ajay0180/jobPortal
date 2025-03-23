const Company = require("../models/companyModel");
const { getDataUri } = require("../utils/data_uri");
const cloudinary = require("../utils/Cloudinary.js");

exports.registerComapny = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });
    }

    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message: "You can't register an already existing company",
        success: false,
      });
    }
    company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company registered successfully",
      success: true,
      company,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getCompany = async (req, res) => {
  try {
    const userId = req.id;
    const companies = await Company.find({ userId });
    if (!companies) {
      return res
        .status(404)
        .json({ message: "Companies not found", success: false });
    }

    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res
        .status(404)
        .json({ message: "Company not found", success: false });
    }

    return res.status(200).json({ company, success: true });
  } catch (e) {
    console.log(e);
  }
};

exports.updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const companyId = req.params.id;
    const file = req.file;

    //cloudinary...
    //////////////////
    const fileuri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileuri.content);
    const logo = cloudResponse.secure_url;

    const company = await Company.findByIdAndUpdate(
      companyId,
      {
        name,
        description,
        website,
        location,
        logo,
      },
      { new: true }
    );
    if (!company) {
      return res
        .status(404)
        .json({ message: "Company not found", success: false });
    }

    return res.status(200).json({
      company,
      message: "Companies updated successfully",
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
};
