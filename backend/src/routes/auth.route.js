const { Router } = require("express");
const { login, signup, loginAdmin } = require("../controllers/auth.controller");

const authRoute = Router();

// ✅ POST /api/auth/register
authRoute.route("/register").post(signup);

// ✅ POST /api/auth/login
authRoute.route("/login").post(login);

authRoute.route('/admin/login').post(loginAdmin);


module.exports = authRoute;
