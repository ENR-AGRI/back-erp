const mongoose = require("mongoose");
const Joi = require("joi");
const {userSchema}=require('./user.model')
const Contact = mongoose.model(
  "Contact",
  new mongoose.Schema({
    user: {type: userSchema,required: true},
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 255,
    },
 
    subject: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },

    message: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
  
    createdOn: { type: Date, default: Date.now },
  })
);

function validateContact(contact) {
  const schema = {
    user_id: Joi.objectId().required(),
    email: Joi.string().min(5).max(255).trim().required(),
    subject: Joi.string().min(5).trim().required(),
    message: Joi.string().min(2).trim().required(),
  
  };

  return Joi.validate(contact, schema);
}

exports.Contact = Contact;
exports.validateContact = validateContact;
