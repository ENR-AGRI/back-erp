const express = require("express");
const router = express.Router();
const { Operation, validateOperation } = require("../models/operation");

const asyncMiddleware = require("../middleware/async");

const validate = require("../middleware/validateRequest");

router.post(
  "/operations",
  [ validate(validateOperation)],
  async (req, res) => {

    let operation = await Operation.findOne({
      ref: req.body.ref,
    });

    if (operation) return res.status(400).json({msgsrv:`${req.body.nom} with reference : ${req.body.ref} already registered.`}
      );

      operation = new Operation(req.body);
      operation = await operation.save();

    res.send(operation);
  }
);

router.get(
  "/operations",
  asyncMiddleware(async (req, res) => {
    const operation = await Operation.find().sort("createdOn");
    res.send(operation);
  })
);
module.exports = router;