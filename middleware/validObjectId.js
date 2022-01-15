const mongoose = require("mongoose");

module.exports = function (req, res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id))
    return res.status(404).json({ msgsrv: "Invalid ID." });

  //pass control to the next middleware function
  next();
};
