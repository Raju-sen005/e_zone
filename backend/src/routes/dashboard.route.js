const { Router } = require("express");
const { getDashboardAnalysis } = require("../controllers/dashboard.controller");
const { isAuth, authorize } = require("../middlewares/auth.middleware");
const { ROLES } = require("../constants/common");

const dashboardRoute = Router();

const adminMiddleware = [isAuth, authorize(ROLES.ADMIN)];

dashboardRoute.route("/").get(...adminMiddleware, getDashboardAnalysis)

module.exports = dashboardRoute