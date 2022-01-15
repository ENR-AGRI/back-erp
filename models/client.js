const Joi = require("joi");
const mongoose = require("mongoose");

mois = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
fiscale = ["03", "04", "05"];

const clientSchema = new mongoose.Schema({

  fiscale: {
    type: String,
    default: "03",
    required: true,
  },
  Src_Client: {
    type: String,
  },
  Date_src: {
    type: String,
  },
  Date_StatQ: {
    type: String,
  },
  Date_StatCC: {
    type: String,
  },
  Date_StatCp: {
    type: String,
  },
  Date_StatCs: {
    type: String,
  },
  Date_StatEs: {
    type: String,
  },

  //   projet: {
  //     type: projetSchema,
  //   },

  matricule: {
    type: String,
    default: "",
  },
  mois: {
    type: String,
    default: "1",
  },
  prenom: {
    type: String,
  },
  nom: {
    type: String,
  },
  fonction: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  tel: {
    type: String,
    required: true,
  },
  rue: {
    type: String,
  },
  ville: {
    type: String,
  },
  pays: {
    type: String,
  },

  num_client: {
    type: String,
  },
  descriptionClient: {
    type: String,
  },
  quantite: {
    type: String,
  },
  dateEmbauche: {
    type: String,
  },
  contactUrgence1: {
    type: String,
  },
  contactUrgence2: {
    type: String,
  },
  contactUrgenceTel: {
    type: String,
  },
  email2: {
    type: String,
  },
  tel2: {
    type: String,
  },
  manager: {
    type: String,
  },


  createdOn: { type: Date, default: Date.now },
});

const Client = mongoose.model("Client", clientSchema);

function validateClient(client) {
  const schema = {
    // etat_id: Joi.objectId().optional().empty(""),
    // // projet_id: Joi.objectId(),
    // // fiche_id:Joi.objectId(),
    // activite_id: Joi.objectId().optional().empty(""),
    // operation_id: Joi.objectId().optional().empty(""),

    descriptionClient: Joi.string(),
    quantite: Joi.string(),
    matricule: Joi.string(),
    mois: Joi.string().valid(...mois),
    fiscale: Joi.string().valid(...fiscale),
    prenom: Joi.string(),
    nom: Joi.string(),
    fonction: Joi.string(),
    email: Joi.string().email(),
    tel: Joi.string(),
    rue: Joi.string(),
    ville: Joi.string(),
    pays: Joi.string(),
    type: Joi.string(),
    num_client: Joi.string(),
    dateEmbauche: Joi.string(),
    contactUrgence1: Joi.string(),
    contactUrgence2: Joi.string(),
    contactUrgenceTel: Joi.string(),
    manager: Joi.string().empty(""),
    email2: Joi.string(),
    tel2: Joi.string(),
    //projet: Joi.string(),

    Src_Client: Joi.string(),
    Date_src: Joi.string(),
    Date_StatQ: Joi.string(),
    Date_StatCC: Joi.string(),
    Date_StatCp: Joi.string(),
    Date_StatCs: Joi.string(),
    Date_StatEs: Joi.string(),
  };
  return Joi.validate(client, schema);
}
exports.clientSchema = clientSchema;
exports.Client = Client;
exports.validateClient = validateClient;
