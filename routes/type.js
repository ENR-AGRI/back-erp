const express = require("express");
const router = express.Router();
const { Type, validateType } = require("../models/type");

const asyncMiddleware = require("../middleware/async");

const validate = require("../middleware/validateRequest");

router.post(
  "/types",
  [validate(validateType)],
  async (req, res) => {

    let type = await Type.findOne({
      nom: req.body.nom,
    });

    if (type) return res.status(400).json({msgsrv:`${req.body.nom} with name : ${req.body.nom} already registered.`}
      );

    type = new Type({
        nom:req.body.nom,
        nom1:req.body.nom1
    });
    console.log('tyyyype',type)
    await type.save();
    res.send(type);
  }
);

router.get(
  "/types",
  asyncMiddleware(async (req, res) => {
    const type = await Type.find().sort("createdOn");
    res.send(type);
  })
);
module.exports = router;