const Product = require("../models/product.model"); // Sequelize model
const uploadImage = require("../utils/uploadImage");
const cloudinary = require("cloudinary");

// ➕ CREATE Product
exports.createProduct = async (req, res) => {
  try {
    // Agar body me direct JSON bhejoge to yeh use karega
    const productData = req.body;

    let imageUrl = productData.imageUrl || null;
    let imagePublicId = productData.imagePublicId || null;

    // Agar file upload hui ho to Cloudinary par bhej do
    if (req.file && req.file.buffer) {
      const result = await uploadImage(req.file.buffer, "products");
      if (!result || !result.url) {
        return res.status(500).json({ error: "Image upload failed" });
      }
      imageUrl = result.url;
      imagePublicId = result.public_id;
    }

    const product = await Product.create({
      ...productData,
      imageUrl,
      imagePublicId,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (err) {
    res.status(400).json({
      error: "Failed to create product",
      details: err.message || err,
    });
  }
};


// 📦 GET all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ order: [["createdAt", "DESC"]] });

    // rename imageUrl -> image
    const formatted = products.map(p => ({
      ...p.dataValues,
      image: p.imageUrl,   // 👈 yaha rename ho raha hai
    }));

    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      products: formatted,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      details: error.message,
    });
  }
};


// 🔎 GET product by id
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product)
      return res.status(404).json({ success: false, message: "Product not found" });

    res.status(200).json({
      success: true,
      message: "Product detail fetched successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
      details: error.message,
    });
  }
};

// ✏️ UPDATE product
exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    let productData = {};
    if (req.body.product) {
      try {
        productData = JSON.parse(req.body.product);
      } catch {
        productData = req.body;
      }
    }

    const product = await Product.findByPk(productId);
    if (!product) return res.status(404).json({ error: "Product not found" });

    let imageUrl = product.imageUrl;
    let imagePublicId = product.imagePublicId;

    // Agar new image upload hui hai
    if (req.file && req.file.buffer) {
      if (product.imagePublicId) {
        await cloudinary.v2.uploader.destroy(product.imagePublicId);
      }

      const result = await uploadImage(req.file.buffer, "products");
      if (!result || !result.url) {
        return res.status(500).json({ error: "Image upload failed" });
      }

      imageUrl = result.url;
      imagePublicId = result.public_id;
    }

    await product.update({
      ...productData,
      imageUrl,
      imagePublicId,
    });

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (err) {
    res.status(400).json({
      error: "Failed to update product",
      details: err.message || err,
    });
  }
};

// ❌ DELETE product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    // Cloudinary se bhi delete karo
    if (product.imagePublicId) {
      await cloudinary.v2.uploader.destroy(product.imagePublicId);
    }

    await product.destroy();
    res.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "Failed to delete product",
      details: err.message || err,
    });
  }
};
