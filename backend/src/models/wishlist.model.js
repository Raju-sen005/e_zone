const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');
const User = require('./user.model'); // assume aapke paas User model hai
const Product = require('./product.model'); // assume Product model hai

const Wishlist = sequelize.define('Wishlist', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true,
});

// Junction table for many-to-many
const WishlistItem = sequelize.define('WishlistItem', {
  wishlistId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
});

Wishlist.belongsTo(User, { foreignKey: 'userId' });
Wishlist.belongsToMany(Product, { through: WishlistItem, foreignKey: 'wishlistId', otherKey: 'productId' });
Product.belongsToMany(Wishlist, { through: WishlistItem, foreignKey: 'productId', otherKey: 'wishlistId' });

module.exports = { Wishlist, WishlistItem };
