const { DataTypes } = require('sequelize');
const {sequelize} = require('../db/connection'); // apna sequelize instance

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  city: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.STRING
  }
}, { timestamps: true });

module.exports = Order;
