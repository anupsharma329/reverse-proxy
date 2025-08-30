const express = require("express");
const app = express();
const PORT = 5000;

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from backend! (no DB)" });
});

app.get("/", (req, res) => {
  res.send("Backend is up. Try /api/data for DB message.");
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
