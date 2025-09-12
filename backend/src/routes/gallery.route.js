const express = require("express");

const { deleteGallery, updateGallery, createGallery, getGalleryById, getGallerys } = require("../controllers/gallery.controller");
const upload = require("../middlewares/multer.middleware");

const router = express.Router();

// ✅ Create new gallery item with image
router.post("/", upload.single("image"), createGallery);

// ✅ Get all gallery items
router.get("/", getGallerys);

// ✅ Get single item by ID
router.get("/:id", getGalleryById);

// ✅ Update gallery item (image optional)
router.put("/:id", upload.single("image"), updateGallery);

// ✅ Delete gallery item
router.delete("/:id", deleteGallery);

module.exports = router;