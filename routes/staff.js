const express = require("express");
const router = express.Router();
const { User,validateStaff} = require("../models/user.model");
const authorization = require("../middleware/auth");
const Helpers = require('../helpers/utilities');
const asyncMiddleware = require("../middleware/async");
const validate = require("../middleware/validateRequest");
const authorize = require("../middleware/role");
const bcrypt = require("bcrypt");
const sendEmail = require('../helpers/send-email');
const config=require('config')

router.post("/staffs", [authorization,authorize(["Admin","SuperAdmin"]),validate(validateStaff)],
asyncMiddleware (
  async (req, res) => {

  let staff = await User.findOne({
    email: req.body.email,
  });

  if (staff)
    return res.status(400).json({
      msgsrv: `${req.body.nom} ${req.body.prenom} with email : ${req.body.email} already registered.`,
    });
  //staff = new Staff(req.body);
  staff = new User({
      matricule:"EA"+ Helpers.pad(''+1),
      role: req.body.role,
      nom: req.body.nom,
      prenom: req.body.prenom,
      email: req.body.email,
      fonction: req.body.fonction,
      secteur: req.body.secteur,
      tel: req.body.tel,
      manager: req.body.manager,
      dateEmbauche: req.body.dateEmbauche,
      rue: req.body.rue,
      Complement_adresse: req.body.Complement_adresse,
      cp: req.body.cp,
      ville: req.body.ville,
      pays: req.body.pays,
      tel2: req.body.tel2,
      email2: req.body.email2,
      contactUrgence1: req.body.contactUrgence1,
      contactUrgence2: req.body.contactUrgence2,
      contactUrgence3: req.body.contactUrgence3

  })

  const salt = await bcrypt.genSalt(10);
  let _password =Helpers.randString(10,'ENRAGRIenragri02021*-_@')
  console.log("_password",_password)
  staff.password = await bcrypt.hash(_password, salt);
  staff.activatedMail=true
  const l = await User.find({role:{$nin :'Client'}}).countDocuments();
  for (let i = 2; i < l + 2; i++) {
    let matricule = {
      matricule: "EA"+ Helpers.pad(''+i),
    };

    await staff.set(matricule);
  
  }
  await sendEmail({
    from:"contact@erpenragri.com",
    to: staff.email,
    subject: `Identifiants de compte ${staff.prenom} ${staff.nom}`,
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
        <div class="container" >
            <div class="row">
    <p>Bonjour  ${staff.prenom},bienvenue sur ENR agri</p> 
     
    <p>
    
        vous pourrez vous 
        connecter sur <a href="${config.get('url-front')+'/login'}">${config.get('url-front')+"/login"}</a> 
         en utilisant :
        <p>
        nom d'utilisateur : ${staff.email}
        
        </p>
        <p>mot de passe :${_password}</p>
        <p>Role :${staff.role}</p>
        </p>
 
    
    <p>Si vous avez besoin d’une assistance immédiate, contactez le Centre de relation clientèle par téléphone. </p>
    <p>Cordialement, </p>
    
            </div>
            <div class="row" style="padding-top: 10px;">
                <div class="col-md-1 col-lg-1 col-sm-1">
                    <img src="cid:logo" alt="enragri_photo" style="width: 100px;height: 100px;">
                </div>
                <div class="col-md-1">
                    <span style=" border-left: 2px solid #00ae81;
    
                    display: inline-block;
                    
                    height: 170px;
                    
                    margin: 0 20px;"></span> 
                </div>
                <div class="col-md-7">
                    <h1 style="color:#00ae81">ENR agri </h1>
                    <h4>La solution méthanisation</h4>
                     <h4>
                   <span style="color:#00ae81">
                    E 
                    </span>
                     <a href="mailto:contact@enragrie.com">contact@enragrie.com</a>  
    
                    <span style="color:#00ae81">W</span> 
                     <a href="https://erpenragri.com" target="_blank">www.erpenragrie.com </a></h4>
                     <div style="margin-top: 15px;">
                        <a href="#" style="  padding: 8px;
                        font-size: 30px;
                        width: 30px;
                        text-align: center;
                        text-decoration: none;
                        border-radius: 40%; background: #3B5998;
                        color: white;" >f</a>
                        <a href="#" style=" padding: 7px;
                        font-size: 30px;
                        width: 30px;
                        text-align: center;
                        text-decoration: none;
                        margin: 5px 2px;border-radius: 40%;  background: #007bb5;
                        color: white;">in</a>
                     </div>
                   
                </div>
            </div>
    
    
    <div>
     
    </div>
    
    
        </div>
    </body>
    </html>`,
    attachments: [{
      filename: 'logo.png',
      path: 'public/images/logo.png',
      cid: 'logo' //same cid value as in the html img src
  }]
});

  staff = await staff.save();



  res.status(200).json({msgsrv:staff});
}));

//
router.get(
  "/staffs",[authorization,authorize(["Admin","SuperAdmin"])],
  asyncMiddleware(async (req, res) => {
    const staff = await User.find({role:{$nin : 'Client'},_id:{$nin : req.user._id}}).sort("createdOn");
    res.send(staff);
  }
  
  )
);

router.get(
  "/staffNumber",
  asyncMiddleware(async (req, res) => {
    const staff = await User.find({role:{$nin : 'Client'},isDeleted:false});
    res.status(200).json(staff.length);
  })
);
module.exports = router;
