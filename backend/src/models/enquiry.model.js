// models/enquiry.model.js
const { DataTypes } = require("sequelize");
const {sequelize} = require("../db/connection"); // yahan apna sequelize instance import karo

const Enquiry = sequelize.define("Enquiry", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true, // createdAt & updatedAt
});

module.exports = Enquiry;
