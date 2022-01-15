const express = require("express");
const router = express.Router();
const { Donnee } = require("../models/DonneeConstruction");

const asyncMiddleware = require("../middleware/async");

router.post(
  "/donnees",

  asyncMiddleware(async (req, res) => {
    const count = await Donnee.countDocuments();
    console.log("COUUUUNT", count);
    if (count == 0) {
      console.log("AAAAAJOUT", req.body.value);

      let donnees = new Donnee(req.body.value);

      donnees = await donnees.save();

      res.status(200).json(donnees);
    }

    if (count == 1) {
      const donnees = await Donnee.findByIdAndUpdate(
        req.body.id,
        { ...req.body.value },
        { new: true }
      );

      if (!donnees)
        return res
          .status(404)
          .json({ msgsrv: "The conception with the given ID was not found." });
      await donnees.save();
    }

    if (count > 2) {
      return res
        .status(404)
        .json({ msgsrv: "The conception with the given ID was  found." });
    }
  })
);
router.put(
  "/updateDate/:id",

  asyncMiddleware(async (req, res) => {
    console.group("from update donne construction", { ...req.body });
    const donnees = await Donnee.findByIdAndUpdate(
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
    const donnees = await Donnee.find(function (err, doc) {
      //console.log("doc", doc);
    });

    //console.log("donnes", donnees);
    res.send(donnees);
  })
);
module.exports = router;
