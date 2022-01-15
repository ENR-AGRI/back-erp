const Joi = require("joi");

const mongoose = require("mongoose");
const {userSchema}=require('./user.model')

 
 const status=[
  "Client En Quotation",
  
  "Contrat Cadre",
  
  "Client En Conception",
  
  "Client En Construction",
  
  "Client En service",
  "Client En Abandon"
  ]
const projectSchema = new mongoose.Schema({

user: {type: userSchema,required: true},
status: {type: String},
ref:{type:String},
acces:{type:String},

dateQuotation:{type:String},
dateContrat :{type:String},
dateDeConception:{type:String},
dateConstruction:{type:String},
dateEnService:{type:String},
dateAbandon:{type:String},

commentaire:{type:String},
createdOn: { type: Date, default: Date.now() },
project_name:{type: String},

});

const Project = mongoose.model("Project", projectSchema);

function validateProject(project) {
  const schema = {
    user_id: Joi.objectId().required(),
    ref:Joi.string(),
    acces: Joi.string(),
    dateQuotation: Joi.string().empty(''),
    dateContrat: Joi.string().empty(''),
    dateDeConception:Joi.string().empty(''),
    dateConstruction:Joi.string().empty(''),
    dateEnService:Joi.string().empty(''),
    dateAbandon:Joi.string().empty(''),
    commentaire:Joi.string(),
    status: Joi.string().valid(...status),
    project_name: Joi.string(),
  
  };
  //photo:Joi.string()
  return Joi.validate(project, schema);
}

exports.projectSchema = projectSchema;
exports.Project = Project;
exports.validateProject = validateProject;
