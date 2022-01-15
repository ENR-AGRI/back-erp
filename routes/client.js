const express = require("express");
const router = express.Router();
const { User, validateClient } = require("../models/user.model");

const asyncMiddleware = require("../middleware/async");
const validateObjectId = require("../middleware/validObjectId");
const validate = require("../middleware/validateRequest");
const { Type } = require("../models/type");
const { IC1 } = require("../models/IC1");
const { IC2 } = require("../models/IC2");
const { DescriptionBiblio } = require("../models/DescriptionBiblio");
const authorize = require("../middleware/role");
const authorization = require("../middleware/auth");
const Helpers = require('../helpers/utilities');
const bcrypt = require("bcrypt");
const sendEmail = require('../helpers/send-email');
const config=require('config')
router.post(
  "/",
  [authorization, authorize(["Admin","SupperAdmin","REP"])],

  asyncMiddleware(async (req, res) => {

    let eneragri = "C";
    let matClient =Helpers.twoLastYearSum() + Helpers.getCurrentMonth() + eneragri + 100

    let client = await User.findOne({
      email: req.body.email,
    });
    if (client && client.isDeleted==true)
    return res.status(400).json({
      msgsrv: `${req.body.nom} with email : ${req.body.email} deleted.`,
    });

    if (client)
      return res.status(400).json({
        msgsrv: `${req.body.nom} with email : ${req.body.email} already registered.`,
      });


    client = new User({
      matricule: matClient,
     
      nom: req.body.nom,
      role:"Client",
      prenom: req.body.prenom,
      fonction: req.body.fonction,
      descriptionClient:req.body.descriptionClient,
      email: req.body.email,
      tel: req.body.tel,
      rue: req.body.rue,
      ville: req.body.ville,
      pays: req.body.pays,
      type: req.body.type,
      email2: req.body.email2,
      Complement_adresse: req.body.Complement_adresse,
      cp: req.body.cp,
      tel2: req.body.tel2,
      Src_Client: "prospect",
      Date_src: req.body.Date_src,
      Date_StatQ: req.body.Date_StatQ,
      Date_StatCC: req.body.Date_StatCC,
      Date_StatCp: req.body.Date_StatCp,
      Date_StatCs: req.body.Date_StatCs,
      Date_StatEs: req.body.Date_StatEs
    });

    const l = await User.find({role:"Client"}).countDocuments();

    for (let i = 1; i < l + 1; i++) {
      let _matricule = {
        matricule:Helpers.twoLastYearSum() + Helpers.getCurrentMonth()  + eneragri + `${100 + i}`,
      };

      await client.set(_matricule);
    }

    let currentUser = await User.findOne({
      _id: req.user._id
    });
 
    if (!currentUser)
      return res.status(400).json({
        msgsrv: "Unauthorized,user not found ! ",
      });
      client.rep=currentUser.matricule
  
 
      const  salt = await bcrypt.genSalt(10);
      let _password =Helpers.randString(8,'ENRAGRIenragri02021*-_@')
      client.password = await bcrypt.hash(_password, salt);
      client.activatedMail=true
    
console.log("_password",_password)

  // await sendEmail({
  //     from:"contact@erpenragri.com",
  //     to: client.email,
  //     subject: `Identifiants de compte ${client.prenom} ${client.nom}`,
  //     html: `<!DOCTYPE html>
  //     <html lang="en">
  //     <head>
  //         <meta charset="UTF-8">
  //         <meta http-equiv="X-UA-Compatible" content="IE=edge">
  //         <meta name="viewport" content="width=device-width, initial-scale=1.0">
  //         <title>Document</title>
  //         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  //     
  //         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  //     </head>
  //     <body>
  //         <div class="container" >
  //             <div class="row">
  //     <p>Bonjour  ${client.prenom},bienvenue sur ENR agri</p> 
  //      
  //     <p>
  //     
  //         vous pourrez vous 
  //         connecter sur <a href="${config.get('url-front')+'/login'}">${config.get('url-front')+"/login"}</a> 
  //          en utilisant :
  //         <p>
  //         nom d'utilisateur : ${client.email}
  //         
  //         </p>
  //         <p>mot de passe :${_password}</p>
  //         <p>STAFF  :${client.rep}</p>
  //         </p>
  //  
  //     
  //     <p>Si vous avez besoin d’une assistance immédiate, contactez le Centre de relation clientèle par téléphone. </p>
  //     <p>Cordialement, </p>
  //     
  //             </div>
  //             <div class="row" style="padding-top: 10px;">
  //                 <div class="col-md-1 col-lg-1 col-sm-1">
  //                     <img src="cid:logo" alt="enragri_photo" style="width: 100px;height: 100px;">
  //                 </div>
  //                 <div class="col-md-1">
  //                     <span style=" border-left: 2px solid #00ae81;
  //     
  //                     display: inline-block;
  //                     
  //                     height: 170px;
  //                     
  //                     margin: 0 20px;"></span> 
  //                 </div>
  //                 <div class="col-md-7">
  //                     <h1 style="color:#00ae81">ENR agri </h1>
  //                     <h4>La solution méthanisation</h4>
  //                      <h4>
  //                    <span style="color:#00ae81">
  //                     E 
  //                     </span>
  //                      <a href="mailto:contact@enragrie.com">contact@enragrie.com</a>  
  //     
  //                     <span style="color:#00ae81">W</span> 
  //                      <a href="https://erpenragri.com" target="_blank">www.erpenragrie.com </a></h4>
  //                      <div style="margin-top: 15px;">
  //                         <a href="#" style="  padding: 8px;
  //                         font-size: 30px;
  //                         width: 30px;
  //                         text-align: center;
  //                         text-decoration: none;
  //                         border-radius: 40%; background: #3B5998;
  //                         color: white;" >f</a>
  //                         <a href="#" style=" padding: 7px;
  //                         font-size: 30px;
  //                         width: 30px;
  //                         text-align: center;
  //                         text-decoration: none;
  //                         margin: 5px 2px;border-radius: 40%;  background: #007bb5;
  //                         color: white;">in</a>
  //                      </div>
  //                    
  //                 </div>
  //             </div>
  //     
  //     
  //     <div>
  //      
  //     </div>
  //     
  //     
  //         </div>
  //     </body>
  //     </html>`,
  //     attachments: [{
  //       filename: 'logo.png',
  //       path: 'public/images/logo.png',
  //       cid: 'logo' //same cid value as in the html img src
  //   }]
  // });

  await client.save();
    res.status(200).json({msgsrv:client});
  })
);

// router.get(
//   "/", [authorization, authorize(["Admin","SupperAdmin","REP"])],
//   asyncMiddleware(async (req, res) => {
// 
// 
//     let currentUser = await User.findOne({
//       _id: req.user._id
//     });
// 
//     if (!currentUser)
//       return res.status(400).json({
//         msgsrv: "Unauthorized,user not found ! ",
//       });
// 
// if(currentUser.role==="Admin" || currentUser.role==="SuperAdmin")
//  clients = await User.find({role:'Client',rep:currentUser.matricule,isDeleted:false});
// if(currentUser.role==="REP")
//  clients = await User.find({role:'Client',rep:currentUser.matricule,isDeleted:false});
// 
//  res.status(200).json(clients);
//   })
// );


router.delete(
  "/:id",
  [authorization, authorize(["Admin","SupperAdmin","REP"]),validateObjectId],
  asyncMiddleware(async (req, res) => {

    let currentUser = await User.findOne({
      _id: req.user._id
    });

    if (!currentUser)
      return res.status(400).json({
        msgsrv: "Unauthorized,user not found ! ",
      });

if(currentUser.role==="Admin" || currentUser.role==="SuperAdmin"){
  client = await User.findOne({role:'Client',rep:currentUser.matricule})
 await User.findByIdAndUpdate(req.params.id,{isDeleted:true})

}

if(currentUser.role==="REP"){
  client = await User.findOne({role:'Client',rep:currentUser.matricule})
  await User.findByIdAndUpdate(req.params.id,{isDeleted:true})
}

res.status(200).json({msgsrv:client});

  })
);

//
router.get(
  "/ClientsNumber",
  asyncMiddleware(async (req, res) => {
    const count = await User.find({role:'Client',isDeleted:false}).countDocuments();
    res.status(200).json(count);
  })
);

//, validate(validateNews)
router.put(
  "/:id",
  [authorization,authorize(["Admin","SupperAdmin","REP"]), validateObjectId],
  asyncMiddleware(async (req, res) => {
    console.log("id client",req.body)
    console.log("id client params",req.params.id)
    // const client = await User.findById(req.body.id);
    // if (!client) return res.status(400).send("Invalid Client.");

    //console.log('client ID ',client)
    
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        tel: req.body.tel,
      
      },
      { new: true }
    );

    if (!user)
      return res.status(404).send("The user with the given ID was not found.");

    res.status(200).json(user);
  })
);


//extension of get method :apply paging
async function  applayPaging(count,pageSize,pageNumber) {

  //try{}catch()

 
  //total pages 
  const pages = pageSize > 0 ? Math.ceil(count / pageSize) || 1 : null;
  //pageNumber=pageNumber <= 0? 1:pageNumber;
  const hasNextPage = pageNumber < pages ? true : false;
  const hasPreviousPage = pageNumber > 1 ? true : false;
  const nextPage = hasNextPage ? pageNumber + 1 : null;
  const previousPage = hasPreviousPage ? pageNumber - 1 : null;

    let paginationData= {
      count: count,
      nextPage: nextPage,
      previousPage: previousPage,
      hasNextPage: hasNextPage,
      hasPreviousPage: hasPreviousPage,
      pages: pages,
      pageNumber: pageNumber,
    }

    return paginationData
}

//extension method 
async function isThereCurrentUser(req,res){
  let currentUser = await User.findOne({
    _id: req.user._id
  });
  
  if (!currentUser)
    return res.status(400).json({
      msgsrv: "Unauthorized,user not found ! ",
    });

    return currentUser

 
}

router.get( "/", [authorization, authorize(["Admin","SupperAdmin","REP"])],
asyncMiddleware(async (req, res) => {

 const currentUser=await isThereCurrentUser(req, res)
//le numero des client demande pour afficher 
let ps=req.query.pageSize ? parseInt(req.query.pageSize): 100
const pageSize = ps > 0 ? ps  :100;

//le num de page
let pn=req.query.pageNumber ? parseInt(req.query.pageNumber) : 1
const pageNumber = pn > 0 ? pn : 1;

//jibli fil page numero :"1(pageNumber)",un nombre de client = pageSize: 
//http://localhost:3000/clients/pagination?pageNumber=1&pageSize=1

const result = await User.find({role:'Client',rep:currentUser.matricule,isDeleted:false})
.skip((pageNumber - 1) * pageSize)
.limit(pageSize)
.lean();
const count = await User.find({role:'Client',isDeleted:false}).countDocuments();
 let paginationData=await applayPaging(count,pageSize,pageNumber)

   return res.status(200).json({
   result: result,
   paginationData:paginationData
});


}))






// 
// router.get(
//   "/:id",
//   validateObjectId,
// 
//   asyncMiddleware(async (req, res) => {
//     const client = await Client.findById(req.params.id);
// 
//     if (!client)
//       return res
//         .status(404)
//         .send("The client with the given ID was not found.");
// 
//     res.send(client);
//   })
// );
// router.put(
//   "/:id",
//   [validateObjectId, validate(validateClient)],
// 
//   asyncMiddleware(async (req, res) => {
//     const type = await Type.findById(req.body.type_id);
// 
//     if (!type) return res.status(400).send("Invalid type.");
// 
//     console.log("tyyyype", type);
// 
//     const description = await DescriptionBiblio.findById(
//       req.body.description_id
//     );
// 
//     if (!description) return res.status(400).send("Invalid description.");
// 
//     const ic1 = await IC1.findById(req.body.ic1_id);
// 
//     if (!ic1) return res.status(400).send("Invalid ic1.");
// 
//     const ic2 = await IC2.findById(req.body.ic2_id);
// 
//     if (!ic2) return res.status(400).send("Invalid ic2.");
// 
//     console.log("bodyyyyyyyyyyyy", req.body);
//     const client = await Client.findById(req.params.id);
// 
//     if (!client)
//       return res
//         .status(404)
//         .send("The client with the given ID was not found.");
// 
//     // await client.set(_matricule)
//     await client.set({
//       descriptionClient: req.client.descriptionClient,
//       quantite: req.client.quantite,
//       // unite:req.client.fiche.unite,
//     });
//     console.log("client", client);
//     await client.save();
// 
//     res.send(client);
//   })
// );
// 
// router.put(
//   "/:id",
//   [validateObjectId, validate(validateClient)],
//   asyncMiddleware(async (req, res) => {
//     const client = await Client.findByIdAndUpdate(
//       req.params.id,
//       { ...req.body },
//       { new: true }
//     );
// 
//     if (!client)
//       return res
//         .status(404)
//         .send("The client with the given ID was not found.");
// 
//     res.send(client);
//   })
// );
// 
// router.delete(
//   "/:id",
//   validateObjectId,
//   asyncMiddleware(async (req, res) => {
//     const client = await Client.findByIdAndRemove(req.params.id);
// 
//     if (!client)
//       return res
//         .status(404)
//         .send("The client with the given ID was not found.");
// 
//     res.status(200).json({ msgsrv: "deleted with success" });
//   })
// );



module.exports = router;
