const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");
const string = require("joi/lib/types/string");
const { role } = require("./role");
const staffSchema = new mongoose.Schema({
  matricule: {
    type: String,
  },
  role: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  secteur: {
    type: String,
  },
  fonction: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  manager: {
    type: String,
    required: true,
  },
  dateEmbauche: {
    type: String,
    required: true,
  },
  rue: {
    type: String,
  },
  Complement_adresse: {
    type: String,
    required: true,
  },
  cp: {
    type: String,
  },
  ville: {
    type: String,
  },
  pays: {
    type: String,
  },
  tel2: {
    type: String,
  },
  email2: {
    type: String,
  },
  contactUrgence1: {
    type: String,
  },
  contactUrgence2: {
    type: String,
  },
  contactUrgence3: {
    type: String,
  },

  createdOn: { type: Date, default: Date.now },
});
const Staff = mongoose.model("Staff", staffSchema);

function validateStaff(staff) {
  const schema = {
    matricule: Joi.string(),
    prenom: Joi.string().required(),

    nom: Joi.string().required(),
    email: Joi.string().required().email(),
    fonction: Joi.string().required(),
    manager: Joi.string().required(),
    dateEmbauche: Joi.string().required(),
    Complement_adresse: Joi.string().required(),
    tel: Joi.string(),
    cp: Joi.string(),
    ville: Joi.string(),
    pays: Joi.string(),
    tel2: Joi.string(),
    email2: Joi.string().email(),
    contactUrgence1: Joi.string(),
    contactUrgence2: Joi.string(),
    contactUrgence3: Joi.string(),
    rue: Joi.string(),
    secteur: Joi.string(),
    role:Joi.string().valid(...role).required(),
  };
  return Joi.validate(staff, schema);
}

exports.staffSchema = staffSchema;
exports.Staff = Staff;
exports.validateStaff = validateStaff;
