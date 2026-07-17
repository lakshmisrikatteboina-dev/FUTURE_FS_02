const express = require("express");
const router = express.Router();

const {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
} = require("../controllers/leadController");

// Create Lead
router.post("/", createLead);

// Get All Leads
router.get("/", getLeads);

// Update Lead
router.put("/:id", updateLead);

// Delete Lead
router.delete("/:id", deleteLead);

module.exports = router;