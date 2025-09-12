const express = require("express");
const router = express.Router();

const { createOrder, getPaymentStatus, orders } = require("../controllers/order.controller");
const { isAuth, authorize } = require('../middlewares/auth.middleware');
const { ROLES } = require("../constants/common");

const adminMiddleware = [isAuth, authorize(ROLES.ADMIN)]

router.post('/create-order', isAuth, createOrder);
router.post('/status', getPaymentStatus);
router.route("/get-orders").get(...adminMiddleware, orders)

module.exports = router;