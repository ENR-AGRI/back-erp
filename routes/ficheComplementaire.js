const express = require("express");
const router = express.Router();
const { Fiche } = require("../models/ficheComplementaire");

const asyncMiddleware = require("../middleware/async");

router.post(
  "/fiches",

  asyncMiddleware(async (req, res) => {
    console.log(req.body);
    fiche = new Fiche(req.body);
    fiche = await fiche.save();
    res.send(fiche);
  })
);
router.post(
  "/updateValeur",

  async (req, res) => {
    fiche = new Fiche(req.body);
    fiche = await fiche.save();
    res.send(fiche);
  }
);

router.get(
  "/fiches",
  asyncMiddleware(async (req, res) => {
    console.log("meeeee");
    const fiche = await Fiche.find().sort("IC1");
    //  result = JSON.parse(JSON.stringify(fiche))
    for (let f of fiche) {
      console.log("***-----fiche description ", f.Description);
      f.Description = f.Description?.replace(
        / [`~!@#$%^&*()_|\-=?;:'",.<>\{\}\[\]\\\/]/g,
        ""
      );
    }

    res.send(fiche);
  })
);
module.exports = router;
//function (err, docs) {
//console.log("doxxx", docs);
// return docs.forEach(function (field) {
//   console.log("filed 0", field[0]);
//   return field.forEach(function (loop) {
//     if (loop.Description.match("/[^a-zA-Z ]/g")) {
//       loop.Description = loop.Description.replace(/[^a-zA-Z ]/g, "");
//     }
//   });
// });
// replace(/[\(,\),\.,\/,\-,\_, ,]/g, "");
//}
