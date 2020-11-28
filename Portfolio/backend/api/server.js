const express = require("express");

const server = express();

const emailRouter = require("../email/emailRouter.js");

server.use(express.json());

server.use("/email", emailRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
