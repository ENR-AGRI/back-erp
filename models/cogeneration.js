var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CogenerationSchema = new Schema({
  Tab_560: {
    Ouverture_chantier: {
      Controle_technique_SPS: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Frais_dossier: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Conseil_suivi: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Aleas: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      TRCME: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Achat_Terrain: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Frais_notaire: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },

    //2
    Lot_1_Process_methanisation: {
      Process_methanisation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Pieces_usure_premiere_urgence_Lot_1: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },

    //3
    Lot_2_Valorisation: {
      Epuration_Compression_Chaudiere: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Cogenerateur: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //4
    Lot_3_Terrassement_Grande_Masse_Talutage_VRD: {
      Terrassement_Grande_Masse_Talutafe_VRD: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //5
    Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
      Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //6
    Lot_5_Genie_Civil_ouvrages_peripheriques: {
      Genie_Civil_ouvrages_peripheriques: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //7
    Lot_6_Charpente_Batiment_Couverture: {
      Charpente_Batiment_Couverture: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //8
    Lot_7_Courant_fort_Soutirage_Electricite_Generale: {
      Courant_fort_Soutirage_Electricite_Generale: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //9
    Maitrise_oevre: {
      Maitrise_oevre: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //10
    Assistance_maitrise_ouvrage: {
      AMO: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //11
    Materiel: {
      Matrriels_agricoles: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Pont_bascule_Reserve_Incendie: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Hygenisiation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Semi_remorque_44_t: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
  },
  Tab_760: {
    Ouverture_chantier: {
      Controle_technique_SPS: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Frais_dossier: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Conseil_suivi: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Aleas: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      TRCME: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Achat_Terrain: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Frais_notaire: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },

    //2
    Lot_1_Process_methanisation: {
      Process_methanisation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Pieces_usure_premiere_urgence_Lot_1: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },

    //3
    Lot_2_Valorisation: {
      Epuration_Compression_Chaudiere: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Cogenerateur: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //4
    Lot_3_Terrassement_Grande_Masse_Talutage_VRD: {
      Terrassement_Grande_Masse_Talutafe_VRD: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //5
    Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
      Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //6
    Lot_5_Genie_Civil_ouvrages_peripheriques: {
      Genie_Civil_ouvrages_peripheriques: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //7
    Lot_6_Charpente_Batiment_Couverture: {
      Charpente_Batiment_Couverture: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //8
    Lot_7_Courant_fort_Soutirage_Electricite_Generale: {
      Courant_fort_Soutirage_Electricite_Generale: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //9
    Maitrise_oevre: {
      Maitrise_oevre: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //10
    Assistance_maitrise_ouvrage: {
      AMO: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //11
    Materiel: {
      Matrriels_agricoles: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Pont_bascule_Reserve_Incendie: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Hygenisiation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Semi_remorque_44_t: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
  },
  Tab_960: {
    Ouverture_chantier: {
      Controle_technique_SPS: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Frais_dossier: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Conseil_suivi: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Aleas: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      TRCME: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Achat_Terrain: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Frais_notaire: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },

    //2
    Lot_1_Process_methanisation: {
      Process_methanisation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Pieces_usure_premiere_urgence_Lot_1: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },

    //3
    Lot_2_Valorisation: {
      Epuration_Compression_Chaudiere: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Cogenerateur: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //4
    Lot_3_Terrassement_Grande_Masse_Talutage_VRD: {
      Terrassement_Grande_Masse_Talutafe_VRD: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //5
    Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
      Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //6
    Lot_5_Genie_Civil_ouvrages_peripheriques: {
      Genie_Civil_ouvrages_peripheriques: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //7
    Lot_6_Charpente_Batiment_Couverture: {
      Charpente_Batiment_Couverture: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //8
    Lot_7_Courant_fort_Soutirage_Electricite_Generale: {
      Courant_fort_Soutirage_Electricite_Generale: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //9
    Maitrise_oevre: {
      Maitrise_oevre: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //10
    Assistance_maitrise_ouvrage: {
      AMO: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //11
    Materiel: {
      Matrriels_agricoles: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Pont_bascule_Reserve_Incendie: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Hygenisiation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Semi_remorque_44_t: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
  },
  Tab_1120: {
    Ouverture_chantier: {
      Controle_technique_SPS: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Frais_dossier: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Conseil_suivi: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Aleas: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      TRCME: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Achat_Terrain: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Frais_notaire: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },

    //2
    Lot_1_Process_methanisation: {
      Process_methanisation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Pieces_usure_premiere_urgence_Lot_1: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },

    //3
    Lot_2_Valorisation: {
      Epuration_Compression_Chaudiere: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Cogenerateur: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //4
    Lot_3_Terrassement_Grande_Masse_Talutage_VRD: {
      Terrassement_Grande_Masse_Talutafe_VRD: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //5
    Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
      Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //6
    Lot_5_Genie_Civil_ouvrages_peripheriques: {
      Genie_Civil_ouvrages_peripheriques: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //7
    Lot_6_Charpente_Batiment_Couverture: {
      Charpente_Batiment_Couverture: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //8
    Lot_7_Courant_fort_Soutirage_Electricite_Generale: {
      Courant_fort_Soutirage_Electricite_Generale: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //9
    Maitrise_oevre: {
      Maitrise_oevre: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //10
    Assistance_maitrise_ouvrage: {
      AMO: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
    //11
    Materiel: {
      Matrriels_agricoles: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Pont_bascule_Reserve_Incendie: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Hygenisiation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },
      Semi_remorque_44_t: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Constru: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente_Constru: String,
      Marge_totaux: String,
    },
  },
});

const Cogeneration = mongoose.model("Cogeneration", CogenerationSchema);

exports.CogenerationSchema = CogenerationSchema;
exports.Cogeneration = Cogeneration;
