const { Sequelize } = require("sequelize");
const envConfig = require("../config/env.config");

const sequelize = new Sequelize(
  envConfig.MYSQL_DB,
  envConfig.MYSQL_USER,
  envConfig.MYSQL_PASSWORD,
  {
    host: envConfig.MYSQL_HOST || "localhost",
    dialect: "mysql",
    logging: false, // disable raw SQL logs
  }
);

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL Database connected successfully");
  } catch (error) {
    console.error("❌ Failed to connect to Database:", error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectToDB };
