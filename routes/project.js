const express = require("express");
const router = express.Router();
const { Project, validateProject } = require("../models/project");
const authorization = require("../middleware/auth");
const asyncMiddleware = require("../middleware/async");
const validateObjectId = require("../middleware/validObjectId");
const validate = require("../middleware/validateRequest");
const { User } = require("../models/user.model");
router.post(
  "/",
  [ validate(validateProject)],
  asyncMiddleware(async (req, res) => {

    let projet = await Project.findOne({
      ref: req.body.ref,
    });

    if (projet) return res.status(400).json({msgsrv:`${req.body.nom} with reference : ${req.body.ref} already registered.`}
      );
//

const user = await User.findById(req.body.user_id);

    if (!user) return res.status(400).send("Invalid user.");



    
      projet = new Project({
       
        ref:0,
        acces: req.body.acces,
        dateQuotation: req.body.dateQuotation,
        dateContrat: req.body.dateContrat,
        dateDeConception:req.body.dateDeConception,
        dateConstruction:req.body.dateConstruction,
        dateEnService:req.body.dateEnService,
        dateAbandon:req.body.dateAbandon,
        commentaire:req.body.commentaire,
        status: req.body.status,
        project_name: req.body.project_name,
        user: {
          _id: user._id,
          nom: user.nom,
          prenom: user.prenom,
          tel: user.tel,
          email: user.email,
          fonction: user.fonction,
          societe: user.societe,
          nom_societe: user.nom_societe,
          ville: user.ville,
          codePostal: user.codePostal,
          tel_Domicile: user.tel_Domicile,
        },
      });
      const l = await Project.find().countDocuments();
      for (let i = 1; i < l + 1; i++) {
        let ref = {
          ref: `${0 + i}`,
        };
        await projet.set(ref);
      }
      //
      projet = await projet.save();

    res.send(projet);
  }
)
)
router.get(
  "/",
  asyncMiddleware(async (req, res) => {
    const projet = await Project.find().sort("createdOn");
    res.send(projet);
  })
);
router.delete(
  "/:id",
  [authorization, validateObjectId],
  asyncMiddleware(async (req, res) => {
    const projet = await Project.findByIdAndRemove(req.params.id);

    if (!projet)
      return res.status(404).send("The projet with the given ID was not found.");
    //if (projet.photo) fs.unlinkSync("public/images/" + projet.photo);
    res.send(projet._id);
  })
);
module.exports = router;