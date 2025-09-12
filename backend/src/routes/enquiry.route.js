const express = require("express");
const { createEnquiry, getEnquiries, deleteEnquiry } = require("../controllers/enquiy.controller");

const router = express.Router();

// Get all enquiries
router.get("/", getEnquiries);

// Optionally: Create enquiry (for frontend form submissions)
router.post("/", createEnquiry);

// Optionally: Delete enquiry
router.delete("/:id", deleteEnquiry);

module.exports = router;