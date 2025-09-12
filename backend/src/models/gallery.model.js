const { DataTypes } = require("sequelize");
const {sequelize }= require("../db/connection"); // apna sequelize instance import karo

const Gallery = sequelize.define(
  "Gallery",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    imageUrl: {
      type: DataTypes.STRING, // Cloudinary ka URL store hoga
    },
    publicId: {
      type: DataTypes.STRING, // Cloudinary ka public_id
    },
  },
  { timestamps: true }
);

module.exports = Gallery;
