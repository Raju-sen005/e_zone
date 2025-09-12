// controllers/enquiry.controller.js
const Enquiry = require("../models/enquiry.model");

// ➕ Create Enquiry
exports.createEnquiry = async (req, res) => {
  const { name, email, subject, phone, message } = req.body;
  try {
    const newEnquiry = await Enquiry.create({ name, email, subject, phone, message });
    res.status(201).json(newEnquiry);
  } catch (err) {
    res.status(400).json({ message: "Failed to save enquiry", error: err.message });
  }
};

// 📄 Get All Enquiries
exports.getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.findAll({ order: [["createdAt", "DESC"]] });
    res.status(200).json({
      success: true,
      message: "Enquiries fetched successfully",
      enquiries,
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch enquiries", error: err.message });
  }
};

// 🗑 Delete Enquiry
exports.deleteEnquiry = async (req, res) => {
  try {
    const deleted = await Enquiry.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "Enquiry not found" });
    res.json({ message: "Enquiry deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete enquiry", error: err.message });
  }
};
