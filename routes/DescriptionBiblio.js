const express = require("express");
const router = express.Router();
const { Type } = require("../models/type");
const { IC2 } = require("../models/IC2");

const asyncMiddleware = require("../middleware/async");
const validate = require("../middleware/validateRequest");
const { IC1 } = require("../models/IC1");
const { DescriptionBiblio } = require("../models/DescriptionBiblio");

router.post(
  "/descriptions",
  asyncMiddleware(async (req, res) => {
    let description = await DescriptionBiblio.findOne({
      description: req.body.description,
    });

    description = await DescriptionBiblio.lookup(
      req.body.type_id,
      req.body.ic1_id,
      req.body.ic2_id
    );

    // if (description) return res.status(400).json({msgsrv:`${req.body.nom} with name : ${req.body.nom} already registered.`});

    const type = await Type.findById(req.body.type_id);

    if (!type) return res.status(400).send("Invalid Type.");

    const ic1 = await IC1.findById(req.body.ic1_id);

    if (!ic1) return res.status(400).send("Invalid IC1.");
    const ic2 = await IC2.findById(req.body.ic2_id);

    if (!ic2) return res.status(400).send("Invalid IC2.");

    description = new DescriptionBiblio({
      description: req.body.description,

      type: {
        _id: type._id,

        nom: type.nom,
        nom1: type.nom1,
      },
      ic1: {
        _id: ic1._id,

        nom: ic1.nom,
      },
      ic2: {
        _id: ic2._id,

        nom: ic2.nom,
      },
    });

    await description.save();

    res.send(description);
  })
);

router.get(
  "/descriptions",
  asyncMiddleware(async (req, res) => {
    const description = await DescriptionBiblio.find().sort("createdOn");
    res.send(description);
  })
);

module.exports = router;
