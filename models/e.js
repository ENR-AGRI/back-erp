const mongoose = require("mongoose");
const Joi = require("joi");

fromWho = ["Artiste", "Annonceur / Partenariat", "Autre"];
const Contact = mongoose.model(
  "Contact",
  new mongoose.Schema({
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 255,
    },
    fromWho: {
      type: String,
      default: "Autre",
      required: true,
    },
    // confirmEmail: {
    //   type: String,
    //   required: true,
    //   trim: true,
    //   minlength: 5,
    //   maxlength: 255,
    // },
    text: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },

    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    isSeen: { type: Boolean, default: false },
    createdOn: { type: Date, default: Date.now },
  })
);

function validateContact(contact) {
  const schema = {
    email: Joi.string().min(5).max(255).trim().required(),
    //confirmEmail: Joi.string().min(5).max(255).trim(),
    text: Joi.string().min(5).trim().required(),
    name: Joi.string().min(2).trim().required(),
    fromWho: Joi.string()
      .valid(...fromWho)
      .required(),
  };

  return Joi.validate(contact, schema);
}

exports.Contact = Contact;
exports.validateContact = validateContact;