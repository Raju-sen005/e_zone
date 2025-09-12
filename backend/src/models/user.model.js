const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection"); // ✅ Sequelize instance
const { ROLES } = require("../constants/common");

const User = sequelize.define(
  "User",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role: {
      type: DataTypes.ENUM,
      values: [ROLES.ADMIN, ROLES.USER],
      defaultValue: ROLES.USER,
    },
  },
  { timestamps: true }
);

module.exports = User;
