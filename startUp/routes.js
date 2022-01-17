const express = require("express");
const auth = require("../routes/auth");
const client = require("../routes/client");

const staff = require("../routes/staff");

const fiche = require("../routes/ficheComplementaire");
const role = require("../routes/role");
const donnee = require("../routes/DonneeConstruction");
const construction = require("../routes/Construction");

const exploitation = require("../routes/Exploitation");
const contact = require("../routes/messageContact");

const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json({ limit: "50mb", extended: true }));
  app.use(
    express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
  );

  app.use(express.static("public"))

  app.use("", auth);
  app.use("/clients", client);

 
 

  app.use("", staff);
 
  app.use("", fiche);
  app.use("", role);
  app.use("", construction);
  app.use("", exploitation);

  app.use("/message",contact);
 
  app.use("", donnee);
  app.use(error); //pass refrence to the function not calling error()
};
