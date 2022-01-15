
const Joi = require("joi");
const mongoose = require("mongoose");

const IC2Schema = new mongoose.Schema({
    

    nom:{
        type:String,
       

    },
    
    type: {
      type: new mongoose.Schema({
      
        nom: {
          type: String,
        },
        nom1: {
          type: String,
        },
       
      }),
     
     
    },
    ic1: {
      type: new mongoose.Schema({
      
        nom: {
          type: String,
        },
       
       
      }),
     
     
    }

,
    createdOn: { type: Date, default: Date.now },



})
IC2Schema.statics.lookup = function (type_id, ic1_id) {
  return this.findOne({
    "type._id": type_id,
    "ic1._id": ic1_id,
  });
};
const IC2 = mongoose.model("IC2", IC2Schema);

function validateIC2(ic2) {
  
  const schema = {
    // type_id:Joi.objectId().required(),
    // ic1_id:Joi.objectId().rquired(),
    
    type_id:Joi.objectId(),
    ic1_id:Joi.objectId(),
    
    nom:Joi.string()

    

  }
  return Joi.validate(ic2, schema);
}
exports.IC2Schema = IC2Schema;
exports.IC2 = IC2;
exports.validateIC2 = validateIC2;







