const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const mongoose = require("mongoose");
const extendSchema = require('mongoose-extend-schema');
const { role } = require("../models/role");

const userSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  email: String,
  password: String,
  confirm_password: String,
  matricule: String,
  fonction: String,
  isDeleted: { type: Boolean, default: false },
  role: {
    type: String,
    default: "anonyme",
  },
  
  //mail
  activatedMail: { type: Boolean, default: false },
  activationToken: { type: String, default: "" },
  emailTokenExpires:{type:Date, default: null },
  //reset password
  resetPasswordToken: { type: String, default: "" },  
  resetPasswordExpires:{type:Date,default: null},
Complement_adresse: String,
ville: String,
pays: String,
cp: String,
tel: String,
tel2: String,
email2: String,
rue: String,
createdOn: { type: Date, default: Date.now },
  // email: {
  //   type: String
  // , required: true
  // , validate: [
  //     { validator: validators.notEmpty, msg: 'Email is empty' }
  //   , { validator: validators.isEmail, msg: 'Invalid email' }
  //   ]
  // }
 
//   sourceClient:{
//     type: String,
//     enum: ["prospect","externe"],
//     default:"externe"
//   },
//   rep:{type: String,default:"EA000"},
// 
//   repCommercial:{
// type: String,default:"EA000"
//   },

  //manager: String,
  ///dateEmbauche: String,

  
//societe: String,//client
//nom_societe: String,//client
//chkoun soun3ha
rep:{
  type: String,
  default:"EA000"
},

 Src_Client: {
  type: String,
  enum: ["prospect","externe"],
  default:"externe"
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
descriptionClient: {
  type: String,
},

//Staff
secteur: {
  type: String,
},
manager: {
  type: String,
 
},
dateEmbauche: {
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

//NOTIFICATION
notifications: [
  {
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    message: { type: String },
    matriculeClient:{ type: String },
    senderName: { type: String },
    created: { type: Date, default: Date.now() },
    read: { type: Boolean, default: false },
    date: { type: String, default: '' }
  }
],
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, role: this.role },
    config.get("jwtPrivateKey")
  );
  return token;
};
const User = mongoose.model("User", userSchema);
//email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }) + complexity joi pws

const user_schema =Joi.object().keys(
{
  role: Joi.string().valid(...role),
  email: Joi.string().min(5).max(255).required().email(),
  password: Joi.string().min(5).max(255),
  confirm_password:Joi.string().valid(Joi.ref('password')),
  activatedMail:Joi.boolean(),
  activationToken:Joi.string().empty(""),
  confirm_password: Joi.string(),
  tel: Joi.string(),
  rue: Joi.string(),
  ville: Joi.string(),
  cp: Joi.string(),
  matricule: Joi.string().empty(""),
  prenom: Joi.string(),
  nom: Joi.string().required(),
  fonction: Joi.string(),
  Complement_adresse: Joi.string(),
  }
)
function validateUser(user) {
 
  
  return Joi.validate(user, user_schema);
}


//STAFF
const staffSchema = extendSchema(userSchema, {
  secteur: {
    type: String,
  },
  manager: {
    type: String,
   
  },
  dateEmbauche: {
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
  }
});

function validateStaff(staff) {
  const schema = user_schema.keys({
  role: Joi.string().valid(...role).required(),
  manager: Joi.string().required(),
  secteur: Joi.string(),
  dateEmbauche: Joi.string().required(),
  contactUrgence1: Joi.string(),
  contactUrgence2: Joi.string(),
  contactUrgence3: Joi.string(),
  })

  return Joi.validate(staff, schema);
}

//Client 
const clientSchema = extendSchema(userSchema, {
 //chkoun soun3ha
  rep:{
    type: String,
    default:"EA000"
  },

   Src_Client: {
    type: String,
    enum: ["prospect","externe"],
    default:"externe"
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
  descriptionClient: {
    type: String,
  }
});
function validateClient(client) {
  const schema = user_schema.keys({
    rep:Joi.string(),
    Src_Client: Joi.string(),
    Date_src: Joi.string(),
    Date_StatQ: Joi.string(),
    Date_StatCC: Joi.string(),
    Date_StatCp: Joi.string(),
    Date_StatCs: Joi.string(),
    Date_StatEs: Joi.string(),
    descriptionClient: Joi.string(),
  })

  return Joi.validate(client, schema);
}


exports.userSchema = userSchema;
exports.User = User;
exports.validateUser = validateUser;

exports.staffSchema = staffSchema;
exports.validateStaff = validateStaff;

exports.clientSchema = clientSchema;
exports.validateClient = validateClient;
// const Client = mongoose.model("Client", clientSchema);
// exports.Client = Client;