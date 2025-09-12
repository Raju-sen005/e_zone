const express = require("express");
const {
  createBlog,
  getBlogs,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog.controller");
const { isAuth, authorize } = require("../middlewares/auth.middleware");
const { ROLES } = require("../constants/common");
const upload = require("../middlewares/multer.middleware");

const blogRouter = express.Router();

const adminMiddleware = [isAuth, authorize(ROLES.ADMIN)];

// CREATE - Add a new blog
blogRouter
  .route("/")
  .post(...adminMiddleware, upload.single("image"), createBlog);

// READ - Get all blogs
blogRouter.route("/").get(getBlogs);

// READ - Get single blog by ID
blogRouter.route("/:id").get(getBlog);

// UPDATE - Edit blog by ID
blogRouter
  .route("/:id")
  .put(...adminMiddleware, upload.single("image"), updateBlog);

// DELETE - Remove blog by ID
blogRouter.route("/:id").delete(...adminMiddleware, deleteBlog);

module.exports = blogRouter;
