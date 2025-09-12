const { sequelize } = require("../db/connection");
const { DataTypes } = require("sequelize");
const User = require("./user.model");
const Product = require("./product.model");

// Cart Table
const Cart = sequelize.define(
  "Cart",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    totalAmount: { type: DataTypes.FLOAT, defaultValue: 0 },
  },
  {
    timestamps: true,
    tableName: "carts",
  }
);

// CartItem Table (Cart ke andar ke products)
const CartItem = sequelize.define(
  "CartItem",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    cartId: { type: DataTypes.INTEGER, allowNull: false },
    productId: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
  },
  {
    timestamps: true,
    tableName: "cart_items",
  }
);

// Associations
Cart.belongsTo(User, { foreignKey: "userId" });
Cart.hasMany(CartItem, { foreignKey: "cartId", as: "items" });
CartItem.belongsTo(Cart, { foreignKey: "cartId" });
CartItem.belongsTo(Product, { foreignKey: "productId" });

module.exports = { Cart, CartItem };
