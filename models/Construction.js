var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//Creation de table Construction avec tous les attributs qu'on besoin
var ConstructionSchema = new Schema({
  //construction
  totaux_SS_traitance_Total: String,
  totaux_marge_Total: String,
  totaux_prixVente_Total: String,
  totaux_SS_traitance_Total_190: String,
  totaux_marge_Total_190: String,
  totaux_prixVente_Total_190: String,
  totaux_SS_traitance_Total_240: String,
  totaux_marge_Total_240: String,
  totaux_prixVente_Total_240: String,
  totaux_SS_traitance_Total_280: String,
  totaux_marge_Total_280: String,
  totaux_prixVente_Total_280: String,
  totaux_SS_traitance_Total_560: String,
  totaux_marge_Total_560: String,
  totaux_prixVente_Total_560: String,
  totaux_SS_traitance_Total_760: String,
  totaux_marge_Total_760: String,
  totaux_prixVente_Total_760: String,
  totaux_SS_traitance_Total_960: String,
  totaux_marge_Total_960: String,
  totaux_prixVente_Total_960: String,
  totaux_SS_traitance_Total_1120: String,
  totaux_marge_Total_1120: String,
  totaux_prixVente_Total_1120: String,

  Tab_140: {
    Ouverture_chantier: {
      Controle_technique_SPS: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Frais_dossier: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Conseil_suivi: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Aleas: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      TRCME: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Achat_Terrain: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Frais_notaire: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },

    //2
    Lot_1_Process_methanisation: {
      Process_methanisation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Pieces_usure_premiere_urgence_Lot_1: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },

    //3
    Lot_2_Valorisation: {
      Epuration_Compression_Chaudiere: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Cogenerateur: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //4
    Lot_3_Terrassement_Grande_Masse_Talutage_VRD: {
      Terrassement_Grande_Masse_Talutafe_VRD: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //5
    Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
      Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //6
    Lot_5_Genie_Civil_ouvrages_peripheriques: {
      Genie_Civil_ouvrages_peripheriques: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //7
    Lot_6_Charpente_Batiment_Couverture: {
      Charpente_Batiment_Couverture: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //8
    Lot_7_Courant_fort_Soutirage_Electricite_Generale: {
      Courant_fort_Soutirage_Electricite_Generale: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //9
    Maitrise_oevre: {
      Maitrise_oevre: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //10
    Assistance_maitrise_ouvrage: {
      AMO: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //11
    Materiel: {
      Matrriels_agricoles: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Pont_bascule_Reserve_Incendie: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Hygenisiation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Semi_remorque_44_t: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
  },
  Tab_190: {
    Ouverture_chantier: {
      Controle_technique_SPS: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Frais_dossier: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Conseil_suivi: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Aleas: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      TRCME: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Achat_Terrain: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Frais_notaire: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },

    //2
    Lot_1_Process_methanisation: {
      Process_methanisation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Pieces_usure_premiere_urgence_Lot_1: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },

    //3
    Lot_2_Valorisation: {
      Epuration_Compression_Chaudiere: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Cogenerateur: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //4
    Lot_3_Terrassement_Grande_Masse_Talutage_VRD: {
      Terrassement_Grande_Masse_Talutafe_VRD: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //5
    Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
      Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //6
    Lot_5_Genie_Civil_ouvrages_peripheriques: {
      Genie_Civil_ouvrages_peripheriques: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //7
    Lot_6_Charpente_Batiment_Couverture: {
      Charpente_Batiment_Couverture: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //8
    Lot_7_Courant_fort_Soutirage_Electricite_Generale: {
      Courant_fort_Soutirage_Electricite_Generale: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //9
    Maitrise_oevre: {
      Maitrise_oevre: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //10
    Assistance_maitrise_ouvrage: {
      AMO: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //11
    Materiel: {
      Matrriels_agricoles: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Pont_bascule_Reserve_Incendie: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Hygenisiation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Semi_remorque_44_t: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
  },
  Tab_240: {
    Ouverture_chantier: {
      Controle_technique_SPS: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Frais_dossier: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Conseil_suivi: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Aleas: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      TRCME: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Achat_Terrain: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Frais_notaire: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },

    //2
    Lot_1_Process_methanisation: {
      Process_methanisation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Pieces_usure_premiere_urgence_Lot_1: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },

    //3
    Lot_2_Valorisation: {
      Epuration_Compression_Chaudiere: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Cogenerateur: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //4
    Lot_3_Terrassement_Grande_Masse_Talutage_VRD: {
      Terrassement_Grande_Masse_Talutafe_VRD: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //5
    Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
      Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //6
    Lot_5_Genie_Civil_ouvrages_peripheriques: {
      Genie_Civil_ouvrages_peripheriques: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //7
    Lot_6_Charpente_Batiment_Couverture: {
      Charpente_Batiment_Couverture: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //8
    Lot_7_Courant_fort_Soutirage_Electricite_Generale: {
      Courant_fort_Soutirage_Electricite_Generale: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //9
    Maitrise_oevre: {
      Maitrise_oevre: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //10
    Assistance_maitrise_ouvrage: {
      AMO: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //11
    Materiel: {
      Matrriels_agricoles: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Pont_bascule_Reserve_Incendie: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Hygenisiation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Semi_remorque_44_t: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
  },
  Tab_280: {
    Ouverture_chantier: {
      Controle_technique_SPS: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Frais_dossier: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Conseil_suivi: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Aleas: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      TRCME: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Achat_Terrain: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Frais_notaire: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },

    //2
    Lot_1_Process_methanisation: {
      Process_methanisation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Pieces_usure_premiere_urgence_Lot_1: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },

    //3
    Lot_2_Valorisation: {
      Epuration_Compression_Chaudiere: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Cogenerateur: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //4
    Lot_3_Terrassement_Grande_Masse_Talutage_VRD: {
      Terrassement_Grande_Masse_Talutafe_VRD: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //5
    Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
      Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //6
    Lot_5_Genie_Civil_ouvrages_peripheriques: {
      Genie_Civil_ouvrages_peripheriques: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //7
    Lot_6_Charpente_Batiment_Couverture: {
      Charpente_Batiment_Couverture: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //8
    Lot_7_Courant_fort_Soutirage_Electricite_Generale: {
      Courant_fort_Soutirage_Electricite_Generale: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //9
    Maitrise_oevre: {
      Maitrise_oevre: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //10
    Assistance_maitrise_ouvrage: {
      AMO: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //11
    Materiel: {
      Matrriels_agricoles: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Pont_bascule_Reserve_Incendie: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Hygenisiation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Semi_remorque_44_t: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
  },
  Tab_560: {
    Ouverture_chantier: {
      Controle_technique_SPS: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Frais_dossier: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Conseil_suivi: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Aleas: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      TRCME: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Achat_Terrain: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Frais_notaire: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },

    //2
    Lot_1_Process_methanisation: {
      Process_methanisation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Pieces_usure_premiere_urgence_Lot_1: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },

    //3
    Lot_2_Valorisation: {
      Epuration_Compression_Chaudiere: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Cogenerateur: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //4
    Lot_3_Terrassement_Grande_Masse_Talutage_VRD: {
      Terrassement_Grande_Masse_Talutafe_VRD: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //5
    Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
      Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //6
    Lot_5_Genie_Civil_ouvrages_peripheriques: {
      Genie_Civil_ouvrages_peripheriques: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //7
    Lot_6_Charpente_Batiment_Couverture: {
      Charpente_Batiment_Couverture: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //8
    Lot_7_Courant_fort_Soutirage_Electricite_Generale: {
      Courant_fort_Soutirage_Electricite_Generale: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //9
    Maitrise_oevre: {
      Maitrise_oevre: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //10
    Assistance_maitrise_ouvrage: {
      AMO: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //11
    Materiel: {
      Matrriels_agricoles: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Pont_bascule_Reserve_Incendie: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Hygenisiation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Semi_remorque_44_t: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
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
        Prix_vente_Concep: String,
      },

      Frais_dossier: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Conseil_suivi: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Aleas: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      TRCME: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Achat_Terrain: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Frais_notaire: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },

    //2
    Lot_1_Process_methanisation: {
      Process_methanisation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Pieces_usure_premiere_urgence_Lot_1: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },

    //3
    Lot_2_Valorisation: {
      Epuration_Compression_Chaudiere: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Cogenerateur: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //4
    Lot_3_Terrassement_Grande_Masse_Talutage_VRD: {
      Terrassement_Grande_Masse_Talutafe_VRD: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //5
    Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
      Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //6
    Lot_5_Genie_Civil_ouvrages_peripheriques: {
      Genie_Civil_ouvrages_peripheriques: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //7
    Lot_6_Charpente_Batiment_Couverture: {
      Charpente_Batiment_Couverture: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //8
    Lot_7_Courant_fort_Soutirage_Electricite_Generale: {
      Courant_fort_Soutirage_Electricite_Generale: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //9
    Maitrise_oevre: {
      Maitrise_oevre: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //10
    Assistance_maitrise_ouvrage: {
      AMO: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //11
    Materiel: {
      Matrriels_agricoles: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Pont_bascule_Reserve_Incendie: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Hygenisiation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Semi_remorque_44_t: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
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
        Prix_vente_Concep: String,
      },

      Frais_dossier: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Conseil_suivi: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Aleas: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      TRCME: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Achat_Terrain: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Frais_notaire: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },

    //2
    Lot_1_Process_methanisation: {
      Process_methanisation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Pieces_usure_premiere_urgence_Lot_1: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },

    //3
    Lot_2_Valorisation: {
      Epuration_Compression_Chaudiere: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Cogenerateur: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //4
    Lot_3_Terrassement_Grande_Masse_Talutage_VRD: {
      Terrassement_Grande_Masse_Talutafe_VRD: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //5
    Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
      Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //6
    Lot_5_Genie_Civil_ouvrages_peripheriques: {
      Genie_Civil_ouvrages_peripheriques: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //7
    Lot_6_Charpente_Batiment_Couverture: {
      Charpente_Batiment_Couverture: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //8
    Lot_7_Courant_fort_Soutirage_Electricite_Generale: {
      Courant_fort_Soutirage_Electricite_Generale: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //9
    Maitrise_oevre: {
      Maitrise_oevre: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //10
    Assistance_maitrise_ouvrage: {
      AMO: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //11
    Materiel: {
      Matrriels_agricoles: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Pont_bascule_Reserve_Incendie: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Hygenisiation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Semi_remorque_44_t: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
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
        Prix_vente_Concep: String,
      },

      Frais_dossier: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Conseil_suivi: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Aleas: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      TRCME: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Achat_Terrain: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Frais_notaire: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },

    //2
    Lot_1_Process_methanisation: {
      Process_methanisation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Pieces_usure_premiere_urgence_Lot_1: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },

    //3
    Lot_2_Valorisation: {
      Epuration_Compression_Chaudiere: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Cogenerateur: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //4
    Lot_3_Terrassement_Grande_Masse_Talutage_VRD: {
      Terrassement_Grande_Masse_Talutafe_VRD: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //5
    Lot_4_Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
      Genie_Civil_circulaire_digestat_liquide_couverture_simple: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //6
    Lot_5_Genie_Civil_ouvrages_peripheriques: {
      Genie_Civil_ouvrages_peripheriques: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //7
    Lot_6_Charpente_Batiment_Couverture: {
      Charpente_Batiment_Couverture: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //8
    Lot_7_Courant_fort_Soutirage_Electricite_Generale: {
      Courant_fort_Soutirage_Electricite_Generale: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //9
    Maitrise_oevre: {
      Maitrise_oevre: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //10
    Assistance_maitrise_ouvrage: {
      AMO: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
    //11
    Materiel: {
      Matrriels_agricoles: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Pont_bascule_Reserve_Incendie: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Hygenisiation: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },
      Semi_remorque_44_t: {
        SS_Traitance: String,
        marge_percent: String,
        marge_euro: String,
        marge_totale: String,
        Prix_vente_Concep: String,
      },

      Sous_Total_Construction: String,
      Sous_Total_Prix_vente: String,
      Marge_totaux: String,
    },
  },
});

const Construction = mongoose.model("Construction", ConstructionSchema);

exports.ConstructionSchema = ConstructionSchema;
exports.Construction = Construction;
