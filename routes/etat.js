const express = require("express");
const router = express.Router();
const { Etat, validateEtat } = require("../models/etat");

const asyncMiddleware = require("../middleware/async");

const validate = require("../middleware/validateRequest");

router.post(
  "/etats",
  [ validate(validateEtat)],
  async (req, res) => {

    let etat = await Etat.findOne({
      ref: req.body.ref,
    });

    if (etat) return res.status(400).json({msgsrv:`${req.body.nom} with reference : ${req.body.ref} already registered.`}
      );

    etat = new Etat(req.body);
    etat = await etat.save();

    res.send(etat);
  }
);

router.get(
  "/etats",
  asyncMiddleware(async (req, res) => {
    const etat = await Etat.find().sort("createdOn");
    res.send(etat);
  })
);
module.exports = router;