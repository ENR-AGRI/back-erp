const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");
const string = require("joi/lib/types/string");
const { typeSchema } = require("../models/type");

const IC1Schema = new mongoose.Schema({

    nom:{
        type:String,
    

    },
    type: {
      type: typeSchema,
    
      },
     
      
    
 
    createdOn: { type: Date, default: Date.now },



})
const IC1 = mongoose.model("IC1", IC1Schema);

function validateIC1(ic1) {
  
  const schema = {
    type_id:Joi.objectId(),
 
    
    nom:Joi.string()

    

  }
  return Joi.validate(ic1, schema);
}
exports.IC1Schema = IC1Schema;
exports.IC1 = IC1;
exports.validateIC1 = validateIC1;

