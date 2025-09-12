const { Sequelize } = require("sequelize");
require("dotenv").config(); // Load environment variables from .env

// Create Sequelize instance using .env variables
const sequelize = new Sequelize(
  process.env.MYSQL_DB,       // Database name
  process.env.MYSQL_USER,     // MySQL username
  process.env.MYSQL_PASSWORD, // MySQL password
  {
    host: process.env.MYSQL_HOST || "127.0.0.1", // Default to localhost
    dialect: "mysql",
    port: process.env.MYSQL_PORT || 3306,        // Default MySQL port
    logging: false,
  }
);

// Test the connection
sequelize
  .authenticate()
  .then(() => console.log("✅ MySQL connection successful"))
  .catch((err) => console.error("❌ MySQL connection failed:", err));

module.exports = sequelize;
