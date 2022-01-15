const express = require("express");
const router = express.Router();
const { Activite, validateActivite } = require("../models/activite");

const asyncMiddleware = require("../middleware/async");

const validate = require("../middleware/validateRequest");

router.post(
  "/activites",
  [ validate(validateActivite)],
  async (req, res) => {

    let activite = await Activite.findOne({
      ref: req.body.ref,
    });

    if (activite) return res.status(400).json({msgsrv:`${req.body.nom} with reference : ${req.body.ref} already registered.`}
      );

      activite = new Activite(req.body);
      activite = await activite.save();

    res.send(activite);
  }
);

router.get(
  "/activites",
  asyncMiddleware(async (req, res) => {
    const activite = await Activite.find().sort("createdOn");
    res.send(activite);
  })
);
module.exports = router;