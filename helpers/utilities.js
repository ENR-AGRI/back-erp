module.exports = {
  //pour generer la matricule de client automatique avec des condition bien definie
  //la formule est précisé dans la documentation

  pad: (rep) => {
    while (rep.length < 3) rep = "0" + rep;
    return rep;
  },
  //
  randString: (length, CHR) => {
    var result = "";
    var characters = CHR;
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * charactersLength) + 1
      );
    }
    return result;
  },
  //fonction qui retourne somme de deux dernier chiffre de l'annee
  twoLastYearSum: () => {
    let newString = "";
    var numString = new Date().getFullYear().toString().substr(-2);

    newString = (parseInt(numString[0]) + parseInt(numString[1])).toString();

    if (newString.length < 10) {
      newString = "0" + newString;
      return newString;
    }

    return str.toLowerCase();
  },
  //fonction qui donne le mois courant
  getCurrentMonth: () => {
    return new Date().getMonth() + 1;
  },
};
