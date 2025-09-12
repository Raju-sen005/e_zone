const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const { isAuth, authorize } = require("../middlewares/auth.middleware");
const { ROLES } = require("../constants/common");
const upload = require("../middlewares/multer.middleware");

const adminMiddleware = [isAuth, authorize(ROLES.ADMIN)];
router
  .route("/")
  .post(...adminMiddleware, upload.single("image"), createProduct);

// Route: GET /api/products
router.route("/").get(getAllProducts);

// Route: GET /api/products/:id
router.route("/:id").get(getProductById);

router.route("/:id").put(...adminMiddleware, upload.single("image"), updateProduct);

router.route("/:id").delete(...adminMiddleware, deleteProduct);

module.exports = router;
