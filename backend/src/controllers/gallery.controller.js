const Gallery = require("../models/gallery.model");
const uploadImage = require("../utils/uploadImage");
const cloudinary = require("cloudinary").v2;

// ➕ Create Gallery
exports.createGallery = async (req, res) => {
  try {
    const galleryData = req.body; // direct le lo, parse mat karo

    const gallery = await Gallery.create(galleryData);

    res.status(201).json({
      success: true,
      message: "gallery added successfully",
      gallery,
    });
  } catch (err) {
    res.status(400).json({
      message: "Failed to create gallery item",
      error: err.message,
    });
  }
};


// 📂 Get All Galleries
exports.getGallerys = async (req, res) => {
  try {
    const gallery = await Gallery.findAll({ order: [["createdAt", "DESC"]] });
    res.status(200).json({
      success: true,
      message: "Gallery fetched successfully",
      gallery,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching gallery items" });
  }
};

// 🔍 Get Gallery by ID
exports.getGalleryById = async (req, res) => {
  try {
    const gallery = await Gallery.findByPk(req.params.id);

    if (!gallery) return res.status(404).json({ message: "Gallery not found" });

    res.status(200).json({
      success: true,
      message: "Gallery fetched successfully",
      gallery,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// ✏️ Update Gallery
exports.updateGallery = async (req, res) => {
  try {
    const galleryId = req.params.id;
    const galleryData = JSON.parse(req.body.gallery);

    const existingGallery = await Gallery.findByPk(galleryId);
    if (!existingGallery) {
      return res.status(404).json({ error: "Gallery not found" });
    }

    let imageUrl = existingGallery.imageUrl;
    let publicId = existingGallery.publicId;

    if (req.file && req.file.buffer) {
      // Purana image delete karo
      if (publicId) {
        await cloudinary.uploader.destroy(publicId);
      }

      const imageResult = await uploadImage(req.file.buffer, "gallery");
      imageUrl = imageResult.url;
      publicId = imageResult.public_id;
    }

    const updated = await existingGallery.update({
      title: galleryData.title,
      description: galleryData.description,
      imageUrl,
      publicId,
    });

    res.status(200).json({
      success: true,
      message: "Gallery updated successfully",
      updated,
    });
  } catch (err) {
    res.status(400).json({ message: "Failed to update", error: err.message });
  }
};

// ❌ Delete Gallery
exports.deleteGallery = async (req, res) => {
  try {
    const existingGallery = await Gallery.findByPk(req.params.id);
    if (!existingGallery) return res.status(404).json({ message: "Item not found" });

    // Cloudinary se bhi delete karo
    if (existingGallery.publicId) {
      await cloudinary.uploader.destroy(existingGallery.publicId);
    }

    await existingGallery.destroy();

    res.status(200).json({ success: true, message: "Gallery item deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
};
