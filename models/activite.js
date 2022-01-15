const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");
const string = require("joi/lib/types/string");
const activiteSchema = new mongoose.Schema({

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
const Activite = mongoose.model("Activite", activiteSchema);

function validateActivite(activity) {
  
  const schema = {
    ref:Joi.string().required(),
    
    nom:Joi.string().required(),

    

  }
  return Joi.validate(activity, schema);
}
exports.activiteSchema = activiteSchema;
exports.Activite = Activite;
exports.validateActivite = validateActivite;

