module.exports = function (req, res, next) {
  // 401 Unauthorized : try
  // 403 Forbidden : dont try again

  // empecher un autre utilisateur de prendre l'acces de ladmin
  let role = req.user.role;
  console.log("role from admin middleware", role, typeof (role !== "Admin"));
  if (role !== "Admin")
    return res.status(403).json({ msgsrv: "Access denied." });

  next();
};
