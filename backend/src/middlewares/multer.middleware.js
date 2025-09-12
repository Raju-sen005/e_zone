const multer = require("multer");

const storage = multer.memoryStorage(); // file RAM me store hogi

const upload = multer({
  storage,
  limits: { fileSize: 20 * 1024 * 1024 }, // max 20MB
});

module.exports = upload;
