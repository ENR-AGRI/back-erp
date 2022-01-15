
let now_date=Date.now()
let new_date=new Date()
let x=new Date().getMonth() + 1


var numString = new Date().getFullYear().toString().substr(-2);

let newString = (parseInt(numString[0]) + parseInt(numString[1])).toString(); // (2)
  
if (newString.length<10) {
    newString = "0" + newString
};

  console.log("xxxx date ",x,newString);


  function pad(s) 
  { 
     while (s.length < 3) 
        s = '0' + s; 
     return s; 
  };
  
  console.log("pad",pad('9'));
  // your code
  
  for (var i=1; i<10; i++) { 
   let mm=  pad(''+i);
   console.log("mm","EA"+mm)
  }

  

// 
//   //hach password
//   const salt = await bcrypt.genSalt(10);
// 
//   let activeToken = await bcrypt.hash(Date.now().toLocaleString(), salt);
// 
//   user.activationToken = activeToken;
// 
//   user.password = await bcrypt.hash(user.password, salt);
// 
//   console.log("user", user);
//   //save user in database
//   await user.save();
//   //let verifURl = "http://localhost:3000/verify/" + activeToken;
//   verifURl = "erpenragri.com/verify/" + activeToken;
//   //send mail
//   var smtpTransport = nodemailer.createTransport({
// 
//     host:"SSL0.OVH.NET",
//     port: 465,
//     secure: true,
//     auth: { user:"contact@erpenragri.com", pass: "**G2loq**"},
//     tls: {
//       cipher: "SSLv3",
//       rejectUnauthorized: false,
//     }, // do not fail on invalid certs
//   });
// 
//   var mailOptions = {
//     to: user.email,
//     from: "contact@erpenragri.com",
//     subject: "Activation compte",
//     html: `<div>
//     <h1>Please confirm your account</h1>
//     <h2>Hello ${user.prenom}</h2>
//     <p>Thank you for for having signed. Please confirm your email by clicking on the following link</p>
// 
//     <a href =${verifURl}>verfi</a> 
//      </div>`,
//   };
// 
//   try {
//     await smtpTransport.sendMail(mailOptions);
//   } catch (err) {
//     console.log(err.message);
//   }


var i=3;

function change(j){
   j=4
}
change(i)
console.log("######################",i,change(i))













