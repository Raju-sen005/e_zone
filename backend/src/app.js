const express = require("express");
const cors = require("cors");

const envConfig = require("./config/env.config");
const { connectToDB, sequelize } = require("./db/connection"); // ✅ Sequelize connection
const router = require("./routes/api.route");

const app = express();

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Database connection
connectToDB();

// Sync models with database (tables auto create/update)
sequelize.sync({ alter: false })
  .then(() => console.log("✅ All models synced with MySQL"))
  .catch((err) => console.error("❌ Sync error:", err));

// Routes
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Server is running with MySQL ✅");
});

// Start server
app.listen(envConfig.PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${envConfig.PORT}`);
});
