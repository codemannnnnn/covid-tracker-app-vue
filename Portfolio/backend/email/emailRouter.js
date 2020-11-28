const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(201).json({ response: "You have reached the email router!" });
});

module.exports = router;
