var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DadaSchema = new Schema({
  da: String,
  Interet_porteur_projet: [
    {
      Etude_preleminaire_biomasse: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          marge_totale: String,
          Prix_vente_Concep: String,
        },
      ],
      Rapport_prefaisabilite: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          marge_totale: String,
          Prix_vente_Concep: String,
        },
      ],

      Impact_economique_exploitant: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          marge_totale: String,
          Prix_vente_Concep: String,
        },
      ],
      Bilan_agronomique_sols: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          marge_totale: String,
          Prix_vente_Concep: String,
        },
      ],
      Apres_Avis_favorable_Creation_SPV: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          marge_totale: String,
          Prix_vente_Concep: String,
        },
      ],

      Sous_Total_Conception: String,
      Sous_Total_Prix_vente_Concep: String,
      Marge_totaux: String,
    },
  ],
});

const Dada = mongoose.model("Dada", DadaSchema);

exports.DadaSchema = DadaSchema;
exports.Dada = Dada;
