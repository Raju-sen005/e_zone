const Contact = require("../models/contact.model");
const ContactUs = require("../models/contact-us.model");

// Simple Contact form
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newContact = await Contact.create({ name, email, phone, message });

    res.status(201).json({
      success: true,
      message: "Message submitted successfully.",
      data: newContact,
    });
  } catch (error) {
    console.error("Contact error:", error.message);
    res.status(500).json({ message: "Something went wrong." });
  }
};

// Contact Us form
exports.submitContactUsForm = async (req, res) => {
  try {
    const { name, email, subject, phone, message } = req.body;

    if (!name || !email || !subject || !phone || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newContactUs = await ContactUs.create({
      name,
      email,
      subject,
      phone,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message submitted successfully.",
      data: newContactUs,
    });
  } catch (error) {
    console.error("ContactUs error:", error.message);
    res.status(500).json({ message: "Something went wrong." });
  }
};
