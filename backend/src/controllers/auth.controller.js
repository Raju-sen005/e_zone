const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const crypto = require("crypto");
const { Op } = require("sequelize");
const nodemailer = require("nodemailer");
require("dotenv").config();
const transporter = require("../config/email");
const handleLogin = require("../utils/login.util");
const { ROLES } = require("../constants/common");

exports.signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const existinUser = await User.findOne({ where: { email } }) // ✅ सही

    if (existinUser)
      return res.status(400).send({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    res
      .status(201)
      .json({ success: true, message: "user is created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal server error" });
  }
};

exports.login = async (req, res) => {
  try {
    const { user, token } = await handleLogin(req, res);

    if (user.role !== ROLES.USER) {
      return res.status(403).json({ message: "Unauthorised user" });
    }

    res.status(200).json({ success: true, user, token });
  } catch (err) {
    console.log("==err===", err);
    res
      .status(err.status || 500)
      .json({ success: false, message: err.message || "Login failed" });
  }
};

exports.loginAdmin = async (req, res) => {
  try {
    const { user, token } = await handleLogin(req, res);

    if (user.role !== ROLES.ADMIN) {
      return res.status(403).json({ message: "Unauthorised user" });
    }

    res.status(200).json({ success: true, user, token });
  } catch (err) {
    res
      .status(err.status || 500)
      .json({ message: err.message || "Login failed" });
  }
};

// Step 1: Forgot Password Handler

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(200).json({
        message: "If account exists, a reset link was sent.",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");
    user.resetToken = token;
    user.resetTokenExpires = Date.now() + 15 * 60 * 1000; // 15 minutes
    await user.save();

    const resetLink = `http://127.0.0.1:5500/client/reset-password.html?token=${token}`;

    await transporter.sendMail({
      from: `"EditZone" <${process.env.GMAIL_USER}>`,
      to: user.email,
      subject: "Password Reset - EditZone",
      html: `
        <h2>Password Reset Request</h2>
        <p>You requested a password reset for your EditZone account.</p>
        <p>Click the link below to reset your password (valid for 15 minutes):</p>
        <a href="${resetLink}">Reset Password</a>
        <p>If you didn't request this, please ignore this email.</p>
      `,
    });

    res.json({ message: "Reset link sent to your email." });
  } catch (err) {
    console.error("Forgot password error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};

exports.resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        resetToken: token,
        resetTokenExpires: { [Op.gt]: Date.now() },
      },
    });

    if (!user) {
      return res.status(400).json({
        error: "Invalid or expired reset link",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetToken = null;
    user.resetTokenExpires = null;
    await user.save();

    res.json({
      message:
        "Password reset successful. You can now login with your new password.",
    });
  } catch (err) {
    console.error("Reset password error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
