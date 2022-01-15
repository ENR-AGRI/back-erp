const express = require("express");
const router = express.Router();
const { Type } = require("../models/type");
const { IC2 } = require("../models/IC2");

const asyncMiddleware = require("../middleware/async");
const validate = require("../middleware/validateRequest");
const { IC1 } = require("../models/IC1");



router.post(
  "/ic2s",
  asyncMiddleware(
  async (req, res) => {

    let ic2 = await IC2.findOne({
      nom: req.body.nom,

    });


     ic2 = await IC2.lookup(
        req.body.type_id,
        req.body.ic1_id
      );
  
      
    // if (ic2) return res.status(400).json({msgsrv:`${req.body.nom} with name : ${req.body.nom} already registered.`});

 

  const type = await Type.findById(req.body.type_id);

  if (!type) return res.status(400).send("Invalid Type.");

  const ic1 = await IC1.findById(req.body.ic1_id);

  if (!ic1) return res.status(400).send("Invalid IC1.");

  
  ic2 = new IC2({
   
    nom: req.body.nom,
   
   
    type: {
      _id: type._id,
    
      nom: type.nom,
    },
    ic1: {
        _id: ic1._id,
      
        nom: ic1.nom,
      },
  

  });
  
  await ic2.save();

  res.send(ic2);
}
  )
);

router.get(
  "/ic2s",
  asyncMiddleware(async (req, res) => {
    const ic2 = await IC2.find().sort("createdOn");
    res.send(ic2);
  })
);







module.exports = router;
