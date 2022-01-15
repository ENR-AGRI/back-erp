const express = require("express");
const router = express.Router();
const { Cogeneration } = require("../models/cogeneration");

const asyncMiddleware = require("../middleware/async");

router.post(
  "/cogeneration",

  asyncMiddleware(async (req, res) => {
    let cogenerations = await Cogeneration.findOne();

    // if (donnees)
    //   return res.status(400).json({
    //     msgsrv: `already registered.`,
    //   });

    cogenerations = new Cogeneration(req.body);
    cogenerations = await cogenerations.save();

    res.send(cogenerations);
  })
);
router.put(
  "/updateDate/:id",

  asyncMiddleware(async (req, res) => {
    console.log("id cogeneration :", id);
    const cogeneration = await Cogeneration.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );

    if (!cogeneration)
      return res
        .status(404)
        .send("The cogeneration with the given ID was not found.");

    res.send(cogeneration);
  })
);

router.get(
  "/getcogeneration",
  asyncMiddleware(async (req, res) => {
    const cogeneration = await Cogeneration.find();
    //  result = JSON.parse(JSON.stringify(fiche))

    res.send(cogeneration);
  })
);
module.exports = router;
