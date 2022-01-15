const express = require("express");
const router = express.Router();
const { User, validateUser } = require("../models/user.model");
const Helpers = require('../helpers/utilities');
const validate = require("../middleware/validateRequest");
const asyncMiddleware = require("../middleware/async");
const Joi = require("joi");
const _ = require("lodash");
const bcrypt = require("bcrypt");

const authorization = require("../middleware/auth");

const isAdmin = require("../middleware/admin");
const sendEmail = require('../helpers/send-email');
const config=require('config')

router.get("/verify-email/:tokenForMailVerif",
asyncMiddleware(async (req, res) => {

  let token = req.params.tokenForMailVerif;
  if (!token){
    return res.status(400).send({msgsrv:'Your verification link may have expired. Please click on resend for verify your Email.'});
}
  const user = await User.findOne({ activationToken: token,emailTokenExpires: { $gt: Date.now() }});
  if (!user) {
    return res.status(401).json({msgsrv:'We were unable to find a user for this verification. Please SignUp ! Or resend Email'});
  }
  
  else if (user.activatedMail){
    return res.status(200).json({msgsrv:'User has been already verified. Please Login'});
}
  else{
    user.activationToken = "";
    user.emailTokenExpires = null;
    user.activatedMail = true;
    console.log("activatedMail-L24",user.activatedMail)
    await user.save();
   
  
    return   res.redirect(`${config.get('url-front')}/login`);

   
  } 


}

));


// const randString=()=>{
//   const len=20
//   let randStr=""
//   for(let i=0;i<len;i++){
//     const ch =Math.floor((Math.random()*10)+1)
//     randStr+=ch
//   }
//   return randStr
// }



//Register
router.post("/register", validate(validateUser), 

asyncMiddleware(async (req, res) => {

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send({ msgsrv: "User already registered." });
  user = new User(
    _.pick(req.body, [
      "email",
      "password",
      "activatedMail",
      "activationToken",
      "nom",
      "prenom",
      "tel",
    ])
  );
  user.rep="EA000"

  //hach password
 
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
 //remove the confirmPassword field from the result as we dont need to save this in the db.
 delete user.confirm_password;
  //user.activationToken = await bcrypt.hash(user.activationToken, salt);
  let expiry = Date.now() + 60 * 1000 * 15;  //Set expiry 15 mins ahead from now
  tokenForMailVerif= Helpers.randString(25,'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789')

  user.activationToken =tokenForMailVerif
  user.emailTokenExpires = new Date(expiry);


  user.role="Client"
  await user.save();

  verifyUrl = `${config.get('url-front')}/verify-email/${tokenForMailVerif}`

  await sendEmail({
    from:"contact@erpenragri.com",
    to: user.email,
    subject: `Activation du compte ${user.prenom} ${user.nom}`,
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
    <p>Bonjour  ${user.prenom},bienvenue sur ENR agri</p> 
     
    <p>
        Voici le lien pour activer votre compte. <strong strong style="color:blue"><a href="${verifyUrl}">${verifyUrl}</a></strong> 
    </p>
    <p>
        Après avoir activer votre compte, 
        vous pourrez vous 
        connecter sur <a href="${config.get('url-front')+'/login'}">${config.get('url-front')+"/login"}</a> 
         en utilisant :
        <p>
        nom d'utilisateur : ${user.email}
        
        </p>
        <p>mot de passe : Votre mot de passe</p>
        </p>
    <p>
      <strong>NOTE : </strong>  Le lien n'est valide aprés 15 minute. 
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


  const token = user.generateAuthToken();
  //res.send({email:user.email,name:user.name}) //no password !
  res.header("x-auth-token", token).send(_.pick(user, ["_id", "email", "nom","activatedMail"]));
}));


router.post("/forgotPassword",asyncMiddleware(
async (req, res) => {


    const user=await User.findOne({email:req.body.email})
    if(!user){res.status(404).json({ msgsrv: "User not found" })}
   
    user.resetPasswordToken =Math.floor(100000 + Math.random() * 900000);  //Generate random 6 digit code.
    user.resetPasswordExpires= new Date(Date.now() + 60 * 1000 * 15); // 15 minutes
    console.log("user from forgot pwd",user)
    await user.save();
    await sendEmail({
      from:"contact@erpenragri.com",
      to: user.email,
      subject: 'Réinitialisation de mot de passe',
      html: `
      <!DOCTYPE html>
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
<p>Bonjour  ${user.prenom},</p> 
<p>
    Vous avez demandé la réinitialisation de votre mot de passe ERP ENR AGRI pour votre compte 
    ${user.email}

</p>  
<p>
    Voila le code pour commencer le processus de réinitialisation. <strong style="color:blue">${user.resetPasswordToken}</strong> 
</p>
<p> Ce Code ne peut être utilisé qu'une 
seule fois et vous redirigera vers une page où vous pourrez choisir votre mot de passe.
</p>
<p>
<p>
Après avoir reinitialiser votre mot de passe, 
vous pourrez vous 
connecter sur <a href="${config.get('url-front')+'/login'}">${config.get('url-front')+"/login"}</a> 
 en utilisant :
<p>
nom d'utilisateur : ${user.email}

</p>
<p>mot de passe : Votre mot de passe</p>
</p>
  <strong>NOTE : </strong>  Le code n'est valide aprés 15 minute. 
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
</html>
      `,
      attachments: [{
        filename: 'logo.png',
        path: 'public/images/logo.png',
        cid: 'logo' //same cid value as in the html img src
    }]
  });

  res.status(200).json({msgsrv:"password reset link sent to your email account"});

  }
)
);


router.post(
  "/resetPassword",asyncMiddleware(
  async (req, res) => {
    console.log("hi reset pwd")
    const { resetPasswordToken, newPassword, confirmPassword } = req.body;
    console.log("reset pwd body",req.body,resetPasswordToken,newPassword, confirmPassword )
    if (!resetPasswordToken || !newPassword || !confirmPassword) {
      return res.status(403).json({msgsrv:"Couldn't process request. Please provide all mandatory fields",
      });
    }
    const user = await User.findOne({
      resetPasswordToken: resetPasswordToken,
      resetPasswordExpires: { $gt: Date.now() },
    });
    console.log("user reset",user)
    if (!user) {
      return res.status(400).json({
       
        msgsrv: "Password reset code is invalid or has expired.",
      });
    }
    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        error: true,
        message: "Passwords didn't match",
      });
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.newPassword, salt);
    user.resetPasswordToken = null;
    user.resetPasswordExpires = "";
    await user.save()
    return  res.status(200).json({msgsrv:"password changed with succes"});
 
  }
  )


)







//Login
router.post("/login",validate(validateEmailPwd), async (req, res) => {
  // const { error } = validateEmailPwd(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  console.log("data from front LOGIN",req.body)
  let user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).send({ msgsrv: "Invalid email" });
  if (user.activatedMail != true) {
    return res.status(401).send({
      msgsrv: "Pending Account. Please Verify Your Email!",
    });
  }
  if (user.isDeleted == true) {
    return res.status(401).send({
      msgsrv: "This account is deleted!",
    });
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(400).send({ msgsrv: "Invalid password." });

  const token = user.generateAuthToken();
  res.send({ token: token });
});

//extension of login method
function validateEmailPwd(req) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  };

  return Joi.validate(req, schema);
}





//Profil

// not :/id bcz u can send another id and show profil of other users dont return pwd to user =>select
router.get("/profile", [authorization], async (req, res) => {
  console.log(req.user._id);
  const user = await User.findById(req.user._id).select("-password");
  res.status(200).json(user);
});



router.post(
  "/updateProfile",
  [authorization,],
  async (req, res) => {
    const user = await User.findById(req.body.user_id);
    console.log("user update****",user)
 user.role=req.body.role
 user.password=req.body.password
user.fonction=req.body.fonction
user.societe=req.body.societe
user.nom_societe=req.body.nom_societe
user.ville=req.body.ville
user.codePostal=req.body.codePostal
user.tel_Domicile=req.body.tel_Domicile
console.log("user update",user)
    await user.save();
    res.status(200).json({
      msgsrv: `${user.nom} with email : ${user.email} modifiée avec success.`,
    });
  }
);
// add role and create user

router.post(
  "/addUser",

  [authorization, isAdmin, validate(validateUser)],
  async (req, res) => {
    console.log("user", req.body);

    user = new User({
      matricule: req.body.matricule,
      nom: req.body.nom,
      prenom: req.body.prenom,
      password: req.body.password,
      confirm_password: req.body.confirm_password,
      email: req.body.email,
      fonction: req.body.fonction,
      manager: req.body.manager,
      dateEmbauche: req.body.dateEmbauche,
      Complement_adresse: req.body.Complement_adresse,

      role: req.body.role,
    });
    //hach password
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    res.status(200).json({
      msgsrv: `${user.nom} with email : ${user.email} registred with success.`,
    });
  }
);




router.get(
  "/getAllUser",
  asyncMiddleware(async (req, res) => {
    const users = await User.find().sort("createdOn");
    res.send(users);
  })
);

//sent notif
router.put(
  "/not",
  asyncMiddleware(async (req, res) => {
    const dateValue = moment().format('YYYY-MM-DD');
    await User.findOneAndUpdate(
      {
        _id: req.body.id,
        'notifications.date': { $ne: [dateValue, ''] },
        'notifications.senderId': { $ne: req.user._id }
      },
      {
        $push: {
          notifications: {
            senderId: req.user._id,
            message: `${req.user.username} viewed your profile`,
            created: new Date(),
            date: dateValue,
           
          }
        }
      }
  )
})
);

//sendMessage to rep
router.post(
  "/messageToRepOrToClient",[authorization],
  asyncMiddleware(async (req, res) => {

 
    const user = await User.findById(req.user._id)

    if(user && user.role=="Client"){
    
      const message=req.body.message
      const msgToRep=await User.findOneAndUpdate({ matricule: user.rep}
        , {
          $push: {
            notifications: {
              senderId: req.user._id,
              senderName:`${user.nom}${user.prenom}`,
              matriculeClient:user.matricule,
              message: `${message}`,
              created: new Date(),
            }
          }
        } 
      );
      if (!msgToRep)
       await User.findOneAndUpdate({ matricule: "EA001"}
        , {
          $push: {
            notifications: {
              senderId: req.user._id,
              senderName:`${user.nom}${user.prenom}`,
              matriculeClient:user.matricule,
              message: `${message}`,
              created: new Date(),
            }
          }
        } 
      );
  
      res.status(200).json({msgsrv:'message sent to your Commercial with success'})
    }

    if(user && user.role=="REP"){

      let clientId =req.body.id
      const message=req.body.message


      console.log("req",req.body)
 
let strnom=user.nom
let str= strnom.concat('',user.prenom)

      const msgToClient=await User.findOneAndUpdate({ _id: clientId}
        , {
          $push: {
            notifications: {
              senderId: req.user._id,
              senderName:`${str}`,
              matriculeClient:user.matricule,
              message: `${message}`,
              created: new Date(),
            }
          }
        } 
      );
      if (!msgToClient )
  
      res.status(400).json({msgsrv:'cant sent message to this client'})

      res.status(200).json({msgsrv:`message sent to ${msgToClient.nom} ${msgToClient.prenom}  with success.`})
    }

})
);

// MarkAllNotifications
router.post(
  "/MarkAllNotifications",[authorization],
  asyncMiddleware(async (req, res) => {

    // const message=req.body.message
    // const client = await User.findById(req.user._id)
    const rep =  await User.findOneAndUpdate(
      {
        _id: req.user._id
      },
      { $set: { 'notifications.$[elem].read': true } },
      { arrayFilters: [{ 'elem.read': false }], multi: true }
    )
 
    if (!rep) return res.status(404).json({ msgsrv: 'Error occured User not found' });

  

    res.status(200).json({ msgsrv: 'Marked all successfully' })


})
);

// Mark OR delete Notifications
router.post(
  "/MarkOrDeleteNotification/:id",[authorization],
  asyncMiddleware(async (req, res) => {
    console.log("req.body",req.body)
    if (!req.body.deleteValue) {
     
    const result=  await User.updateOne(
        {
          _id: req.user._id,
          'notifications._id': req.params.id
        },
        {
          $set: { 'notifications.$.read': true }
        }
      )
      if (!result) return res.status(404).json({ msgsrv: 'Error occured,cant mark notification' });

       res.status(200).json({ msgsrv: 'Marked successfully' })
    }
    else {
     let result= await User.updateOne(
        {
          _id: req.user._id,
          'notifications._id': req.params.id
        },
        {
          $pull: {
            notifications: { _id: req.params.id }
          }
        }
      )
      if (!result) return res.status(404).json({ msgsrv: 'Error occured,cant delete notification' });

      res.status(200).json({ msgsrv: 'Deleted successfully' })
    }

})
);


module.exports = router;
