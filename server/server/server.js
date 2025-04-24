const express = require("express");
const cors = require("cors"); // <--- import it
const sequelize = require("./config/database");
const User = require("./models/user");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allow requests from your frontend
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // Optional: allow cookies/auth headers
  })
);

app.use(express.json());

// Test DB
sequelize
  .authenticate()
  .then(() => console.log("✅ Connected to PostgreSQL database"))
  .catch((err) => console.error("❌ DB Connection Error:", err));

//Model synchronization, handles Table and create if doesnot exists
sequelize
  .sync()
  .then(() => console.log("✅ Table created"))
  .catch((err) => console.error("❌ Table creation error:", err));

// Routes
app.post("/api/add-users", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/api/get-users", async (req, res) => {
  try {
    //give data to user by setting order of it as desc order of createdAT col
    const users = await User.findAll({ order: [["createdAt", "DESC"]] });
    res.status(200).json({ status: "success", data: users });
  } catch (err) {
    res.status(500).json({ status: "failed", message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
