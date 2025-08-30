const express = require("express");
const app = express();
const PORT = 5001;
var cors = require("cors");

app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from backend! (no DB)" });
});

app.get("/api/status", (req, res) => {
  res.send("Backend is up. Try /api/data for DB message.");
});

app.get("/api/health", (req, res) => {
  res.send("hi");
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
