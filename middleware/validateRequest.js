module.exports = (validator) => {
  //validator can be : validate/validateUser/validateNews DYNAMIQUE.....ect //conste validate=(validator)=>{//..code}
  //return a middleware function to give to expresse
  //express will call that middleware
  return (req, res, next) => {
    const { error } = validator(req.body);
    if (error)
      return res.status(400).json({ msgsrv: error.details[0].message });
    next();
  };
};
