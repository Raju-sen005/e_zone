const express = require("express");
const router = express.Router();
const {
  submitContactForm,
  submitContactUsForm,
} = require("../controllers/contact.controller");

// Routes
router.post("/contacts", submitContactForm);     // POST /api/contacts
router.post("/contact-us", submitContactUsForm); // POST /api/contact-us

module.exports = router;
