const express = require("express");
const {
  registerComapny,
  getCompany,
  getCompanyById,
  updateCompany,
} = require("../controllers/companyController");
const { protect } = require("../middlewares/Authentication");

const companyRoutes = express.Router();

companyRoutes.use(protect);
companyRoutes.post("/register", registerComapny);
companyRoutes.get("/get", getCompany);
companyRoutes.get("/get/:id", getCompanyById);
companyRoutes.put("/update/:id", updateCompany);

module.exports = companyRoutes;
