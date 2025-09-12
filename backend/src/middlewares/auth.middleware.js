const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

exports.isAuth = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Login first to access this resource." });
    }

    const token = authorizationHeader.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Login first to access this resource." });
    }

    // Verify token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key");
    } catch (err) {
      console.error("JWT verification failed:", err.message);
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    // Find user
    const user = await userModel.findByPk(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    return res.status(500).json({ message: "Authentication failed" });
  }
};

exports.authorize =
  (...requiredRoles) =>
  (req, res, next) => {
    if (!req.user) {
      return res
        .status(401)
        .json({ message: "Not authenticated" });
    }

    if (!requiredRoles.includes(req.user.role)) {
      return res
        .status(403) // Forbidden (better than 401 here)
        .json({ message: "You are not authorized to access this resource" });
    }

    next();
  };
