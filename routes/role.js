const express = require("express");
const router = express.Router();
const asyncMiddleware = require("../middleware/async");
const { role } = require("../models/role");

router.get(
  "/roles",
  asyncMiddleware(async (req, res) => {
    res.send(role);
  })
);

module.exports = router;
