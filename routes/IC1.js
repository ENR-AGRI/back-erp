const express = require("express");
const router = express.Router();
const { Type } = require("../models/type");

const { IC1,validateIC1 } = require("../models/IC1");

const asyncMiddleware = require("../middleware/async");
const validate = require("../middleware/validateRequest");



router.post(
  "/ic1s",
  [validate(validateIC1)],
  asyncMiddleware(
  async (req, res) => {

    let ic1 = await IC1.findOne({
      nom: req.body.nom,
    });

   
 

  const type = await Type.findById(req.body.type_id);

  if (!type) return res.status(400).send("Invalid Type.");

  

  
  ic1 = new IC1({
   
    nom: req.body.nom,
   
   
    type: {
      _id: type._id,
    
      nom: type.nom,
    },
   

  });
  
  await ic1.save();

  res.send(ic1);
}
  )
);

router.get(
  "/ic1s",
  asyncMiddleware(async (req, res) => {
    const ic1 = await IC1.find().sort("createdOn");
    res.send(ic1);
  })
);

//
// router.get(
//   "/allNews",
//   asyncMiddleware(async (req, res) => {
//     const news = await News.find();
//     res.send(news);
//   })
// );
// router.put(
//   "/updateNews/:id",
//   [authorization, isAdmin, validateObjectId, validate(validateNews)],
//   asyncMiddleware(async (req, res) => {
//     const artiste = await Artiste.findById(req.body.artiste_id);
//     if (!artiste) return res.status(400).send("Invalid Artiste.");

//     const news = await News.findByIdAndUpdate(
//       req.params.id,
//       {
//         news_name: req.body.news_name,
//         description: req.body.description,
//         video: req.body.video,
//         photo: req.body.photo,
//         artiste: {
//           _id: artiste._id,
//           artiste_name: artiste.artiste_name,
//           short_description: artiste.short_description,
//         },
//       },
//       { new: true }
//     );

//     if (!news)
//       return res.status(404).send("The news with the given ID was not found.");

//     res.send(news);
//   })
// );

// router.delete(
//   "/deleteNews/:id",
//   [authorization, isAdmin, validateObjectId],
//   asyncMiddleware(async (req, res) => {
//     const news = await News.findByIdAndRemove(req.params.id);

//     if (!news)
//       return res.status(404).send("The news with the given ID was not found.");

//     res.send(news);
//   })
// );





module.exports = router;
