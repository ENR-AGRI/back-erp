
const Joi = require("joi");
const mongoose = require("mongoose");

const descriptionSchema = new mongoose.Schema({
    

    description:{
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
    },
    ic2: {
        type: new mongoose.Schema({
        
          nom: {
            type: String,
          },
         
         
        }),
    
      },


    createdOn: { type: Date, default: Date.now },



})
descriptionSchema.statics.lookup = function (type_id, ic1_id,ic2_id) {
  return this.findOne({
    "type._id": type_id,
    "ic1._id": ic1_id,
    "ic2._id": ic2_id,
  });
};
const DescriptionBiblio = mongoose.model("DescriptionBiblio", descriptionSchema);

function validateDescription(descriptionBiblio) {
  
  const schema = {
    // type_id:Joi.objectId().required(),
    ic2_id:Joi.objectId(),
    
    type_id:Joi.objectId(),
    ic1_id:Joi.objectId(),
    
    description:Joi.string(),

    

  }
  return Joi.validate(descriptionBiblio, schema);
}
exports.descriptionSchema = descriptionSchema;
exports.DescriptionBiblio = DescriptionBiblio;
exports.validateDescription = validateDescription;







