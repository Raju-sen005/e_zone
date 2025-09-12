// const mongoose = require("mongoose"); // ✅ Required line

// const blogSchema = new mongoose.Schema(
//   {
//     title: String,
//     description: String,
//     author: String,
//     image: {
//       url: String,
//       public_id: String,
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Blog", blogSchema);
const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection"); // Your Sequelize instance

const Blog = sequelize.define("Blog", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false, // Required field
  },
  description: {
    type: DataTypes.TEXT, // Use TEXT for long content
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true, // Optional field
  },
  image_public_id: {
    type: DataTypes.STRING,
    allowNull: true, // Optional field
  },
}, {
  timestamps: true, // Adds createdAt & updatedAt
  tableName: "blogs", // Optional: explicitly set table name
});

module.exports = Blog;
