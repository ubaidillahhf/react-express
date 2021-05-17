const express = require("express");
const routers = express.Router();

routers.get("/cek-router-pisah", (req, res) => res.send("It's Work!!"));
routers.post("/test-post", (req, res) => {
  res.send("TEST METHOD POST");
});

module.exports = routers;
