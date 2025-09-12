// config/env.config.js
const dotenv = require("dotenv");
const { ENV_FILE, ENV_MODE } = require("../constants/common");

const environment = process.env.NODE_ENV;

const envFilePath =
  environment === ENV_MODE.DEVELOPMENT
    ? ENV_FILE.DEVELOPMENT_ENV
    : environment === ENV_MODE.TESTING
      ? ENV_FILE.TESTING_ENV
      : environment === ENV_MODE.PRODUCTION
        ? ENV_FILE.PRODUCTION_ENV
        : ".env";   // default

dotenv.config({ path: envFilePath });

const envConfig = Object.freeze({
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,

  // ✅ map correctly
  MYSQL_DB: process.env.MYSQL_DB,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_HOST: process.env.MYSQL_HOST,


  JWT_SECRET: process.env.JWT_SECRET,

  // Cloudinary
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
});

module.exports = envConfig;
