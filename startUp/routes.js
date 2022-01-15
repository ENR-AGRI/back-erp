const express = require("express");
const auth = require("../routes/auth");
const client = require("../routes/client");
const etat = require("../routes/etat");
const activite = require("../routes/activite");
const operation = require("../routes/operation");
const project = require("../routes/project");
const staff = require("../routes/staff");
const type = require("../routes/type");
const ic1 = require("../routes/IC1");
const ic2 = require("../routes/IC2");
const description = require("../routes/DescriptionBiblio");
const fiche = require("../routes/ficheComplementaire");
const role = require("../routes/role");
const donnee = require("../routes/DonneeConstruction");
const construction = require("../routes/Construction");
const cogeneration = require("../routes/cogeneration");
const exploitation = require("../routes/Exploitation");
const contact = require("../routes/messageContact");
const dada = require("../routes/dada");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(express.json({ limit: "50mb", extended: true }));
  app.use(
    express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
  );

  app.use(express.static("public"))

  app.use("", auth);
  app.use("/clients", client);

  app.use("", etat);
  app.use("/projets", project);
  app.use("", activite);
  app.use("", operation);
  app.use("", staff);
  app.use("", type);
  app.use("", ic1);
  app.use("", ic2);
  app.use("", description);
  app.use("", fiche);
  app.use("", role);
  app.use("", construction);
  app.use("", exploitation);
  app.use("", cogeneration);
  app.use("/message",contact);
  //app.use("", dada);
  app.use("", donnee);
  app.use(error); //pass refrence to the function not calling error()
};
