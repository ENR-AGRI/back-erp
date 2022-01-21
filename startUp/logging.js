//chaque erreur de login s'affiche ici
const winston = require("winston");
require("winston-mongodb");
const asyncMiddleware = require("../middleware/async");

module.exports = function () {
  //Error out side express===out process

  winston.handleExceptions(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  );
  process.on(
    "unhandledRejection",
    asyncMiddleware((ex) => {
      throw ex;
    })
  );

  //winston : file transport : msg from console,file,http
  winston.add(winston.transports.File, { filename: "logfile.log" });
  //mongodb transport msg from db..level=info so  err warnig and info would be logged
  winston.add(winston.transports.MongoDB, {
    db: "mongodb://localhost/MonBD",
    level: "info",
  });
};
