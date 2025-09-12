
const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,     // 👈 .env से लोड होगा
    pass: process.env.GMAIL_PASSWORD  // 👈 .env से लोड होगा
  }
});

module.exports = transporter;