const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

router.get("/hash", async (req, res) => {
  const hash = await bcrypt.hash("Admin@1234", 10);
  res.send(hash);
});

module.exports = router;
