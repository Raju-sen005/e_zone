const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection'); // Your Sequelize instance

const Product = sequelize.define(
  'Product',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    imageUrl: {       // Flattened from { url, public_id }
      type: DataTypes.STRING,
      allowNull: true,
    },
    imagePublicId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mrp: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sellPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: { min: 0 },
    },
  },
  {
    timestamps: true,
    tableName: 'products',
  }
);

module.exports = Product;
