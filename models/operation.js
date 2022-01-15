const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");
const string = require("joi/lib/types/string");
const operationSchema = new mongoose.Schema({

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
const Operation = mongoose.model("Operation", operationSchema);

function validateOperation(operation) {
  
  const schema = {
    ref:Joi.string().required(),
    
    nom:Joi.string().required(),

    

  }
  return Joi.validate(operation, schema);
}
exports.operationSchema = operationSchema;
exports.Operation = Operation;
exports.validateOperation = validateOperation;

