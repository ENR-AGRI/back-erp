const express = require("express");
const router = express.Router();
const { Contact, validateContact } = require("../models/messageContact");
const authorization = require("../middleware/auth");
const asyncMiddleware = require("../middleware/async");

const validate = require("../middleware/validateRequest");
const { User } = require("../models/user.model");
const sendEmail = require('../helpers/send-email');

router.post(
  "/",
  [ authorization,validate(validateContact)],
  asyncMiddleware(async (req, res) => {

console.log("messages");

const user = await User.findById(req.body.user_id);

if (!user) return res.status(400).send("Invalid user.");
console.log("messages",user);
let contact = new Contact({
    email:req.body.email,
    message:req.body.message,
    subject:req.body.subject,
    user:{
        _id:user._id,
        nom:user.nom,
        prenom:user.prenom,
        tel:user.tel
    }
});
await sendEmail({
    from:user.email,
    to: "enragri@gmail.com",
    subject: req.body.subject,
    html: req.body.message,

});
await contact.save();

res.status(200).json({
    msgsrv:
      "Merci de nous avoir contacté ! Nous vous contacterons rapidement.",
  });
})
  

)
router.get(
    "/",
    asyncMiddleware(async (req, res) => {
      const contact = await Contact.find().sort("-createdOn");
      res.send(contact);
    })
  );
module.exports = router;