const express = require("express");
const router = express.Router();
const { Construction } = require("../models/Construction");

const asyncMiddleware = require("../middleware/async");

router.post(
  "/construction",

  asyncMiddleware(async (req, res) => {
    let constructions = await Construction.findOne();

    // if (donnees)
    //   return res.status(400).json({
    //     msgsrv: `already registered.`,
    //   });

    constructions = new Construction(req.body);
    constructions = await constructions.save();

    res.send(constructions);
  })
);
router.post(
  "/updateDate/:id",

  async (req, res) => {
    console.log("id conception :", req.params.id);

    const id = req.params.id;
    const constructions = await Construction.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );

    if (!constructions)
      return res
        .status(404)
        .send("The conception with the given ID was not found.");

    res.send(constructions);
  }
);

router.get(
  "/getconstructions",
  asyncMiddleware(async (req, res) => {
    const constructions = await Construction.find();
    //  result = JSON.parse(JSON.stringify(fiche))

    res.send(constructions);
  })
);
module.exports = router;
