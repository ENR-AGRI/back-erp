const express = require("express");
const router = express.Router();
const { Dada } = require("../models/dada");

const asyncMiddleware = require("../middleware/async");

router.post(
  "/donnees",

  asyncMiddleware(async (req, res) => {
    let donnees = await Dada.findOne();

    // if (donnees)
    //   return res.status(400).json({
    //     msgsrv: `already registered.`,
    //   });
    console.log("dada.js", req.body);
    donnees = new Dada(req.body);
    donnees = await donnees.save();

    res.send(donnees);
  })
);
router.put(
  "/updateDate/:id",

  asyncMiddleware(async (req, res) => {
    console.log("req.body", req.body);
    const donnees = await Dada.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );

    if (!donnees)
      return res
        .status(404)
        .send("The conception with the given ID was not found.");

    res.send(donnees);
  })
);

router.get(
  "/getDonnees",
  asyncMiddleware(async (req, res) => {
    const donnees = await Dada.find();
    //  result = JSON.parse(JSON.stringify(fiche))

    res.send(donnees);
  })
);
module.exports = router;
