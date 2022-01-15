const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");
const string = require("joi/lib/types/string");
const etatSchema = new mongoose.Schema({

    ref:{
        type:String,
        required:true,

    },
    nom:{
        type:String,
        required:true,

    },

    createdOn: { type: Date, default: Date.now },



})
const Etat = mongoose.model("Etat", etatSchema);

function validateEtat(etat) {
  
  const schema = {
    ref:Joi.string().required(),
    
    nom:Joi.string().required(),

    

  }
  return Joi.validate(etat, schema);
}
exports.etatSchema = etatSchema;
exports.Etat = Etat;
exports.validateEtat = validateEtat;

