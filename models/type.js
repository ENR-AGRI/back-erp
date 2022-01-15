const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");
const string = require("joi/lib/types/string");
const typeSchema = new mongoose.Schema({

    nom:{
        type:String,
        required:true,

    },
    nom1:{
      type:String,
      required:true,
    },
   
    createdOn: { type: Date, default: Date.now },



})
const Type = mongoose.model("Type", typeSchema);

function validateType(type) {
  
  const schema = {
 
    
    nom:Joi.string().required(),
    nom1:Joi.string().required(),

    

  }
  return Joi.validate(type, schema);
}
exports.typeSchema = typeSchema;
exports.Type = Type;
exports.validateType = validateType;

