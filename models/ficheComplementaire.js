var mongoose = require("mongoose");
var Schema = mongoose.Schema;
base_prix = ["MB", "MS"];
var ficheSchema = new Schema({
  IC1: {
    type: String,
  },
  IC2: {
    type: String,
  },
  IC3: {
    type: String,
  },
  Description: {
    type: String,
  },
  Effluent_Delevage: {
    type: String,
  },
  unite: {
    type: String,
  },

  Taux_de_Presence_Rendement_par_ha: {
    type: String,
  },

  uMB_an: {
    type: String,
  },

  Unitee: {
    type: String,
  },

  Type: {
    type: String,
  },

  MS: {
    type: String,
  },

  MO_MS: {
    type: String,
  },

  Nm3_CH4_t_MO: {
    type: String,
  },
  Commentaire: {
    type: String,
  },

  Nm3_CH4_t_MB: {
    type: String,
  },
  Biogaz_m3_tMO: {
    type: String,
  },
  CH4percentMS: {
    type: String,
  },

  Nm3_CH4_m3_tMO: {
    type: String,
  },

  u_N_t: {
    type: String,
  },

  u_P2O5_t: {
    type: String,
  },

  u_K2O_t: {
    type: String,
  },
  t_MB_an: {
    type: String,
  },
  t_MS_an: {
    type: String,
  },
  Nm3_CH4_an: {
    type: String,
  },
  TOTAL_TMB: {
    type: String,
  },
  S_tt_exp_II: {
    type: String,
  },
  S_tt_Autre_III: {
    type: String,
  },
  GR_tt: {
    type: String,
  },
  S_tt: {
    type: String,
  },
  ration: {
    type: String,
  },
  N: {
    type: String,
  },
  P: {
    type: String,
  },
  K: {
    type: String,
  },
  //
  base_prix: {
    type: String,
    default: "MB",
  },
  prix: {
    type: String,
  },
  t_MB: {
    type: String,
  },
  t_MS: {
    type: String,
  },
  prix_intrants_MB: {
    type: String,
  },
  prix_intrants_MS: {
    type: String,
  },
  //table Produit
  volume_Nm3_CH4_an: {
    type: String,
  },
  tt_heure_annee: {
    type: String,
    default: "8760",
  },
  debit_horaire_Nm3_CH4_an: {
    type: String,
  },
  debit_horaire_injecte_Nm3_CH4_an: {
    type: String,
  },
  pvoir_calorfiq_sup_CH4: {
    type: String,
  },
  s_tt_KWH_h: {
    type: String,
  },
  heure_fonction: {
    type: String,
    default: "8200",
  },
  enrg_KWH_an: {
    type: String,
  },
  enrg_MWH_an: {
    type: String,
  },
  enrg_GWH_an: {
    type: String,
  },

  Tarif_debut_contrat1: {
    type: String,
  },
  Tarif_debut_contrat2: {
    type: String,
  },
  Recette_vente_biomethane: {
    type: String,
  },
  vente_digestat: {
    type: String,
  },
  Prix_digestat_Liquide: String,
  Prix_digestat_Solide: String,
  Quantite_digestat_Liquide: String,
  Quantite_digestat_Solise: String,
  Recette_vente_digestat: String,
  //Scenario
  installation_beneficie_aide_Agence_environnement_maitrise_energie: String,
  Date_signature_contrat_achat_biomethane: String,
  tarif_debut_contrat: String,
  Financement_Fonds_Propres: String,
  Pourcentage_FP_Financer: String,
  Montant_finance_FP_Finance: String,
  taux_interet_obligatoire: String,
  Montant_pret_bancaire: String,
  ERIBOR: String,
  Taux_interet_annuel: String,
  Montant_annuel_redevance: String,
  fumier: String,
  Mois_fumiere: String,
  mois_Silo: String,
  Densite_Silo: String,
  Densite_Fumier: String,
  hauteur_Silo: String,
  hauteur_Fumier: String,
  pluviometre: String,
  evaporation: String,
  tas_ensilage_Fumier: String,
  tas_ensilage_Silo: String,
  recup_eaux_uses_Fumier: String,
  recup_eaux_uses_Silo: String,
  total_eaux_uses: String,
  culture: String,
  autres: String,
  voie_unite: String,
  //il manque les attributs de feuille digestat ...
  SS_Traitance: String,
  GP_percent: String,
  GP_euro: String,
  Prix_base_Concep: String,
  Prix_vente_Concep: String,
  Sous_Total_Conception1: String,
  Sous_Total_Conception2: String,
  Sous_Total_Conception3: String,
  Sous_Total_Conception4: String,
  Sous_Total_Conception5: String,
  Sous_Total_Conception6: String,
  Sous_Total_Conception7: String,
  Sous_Total_Conception8: String,
  Sous_Total_Conception9: String,
  Sous_Total_Conception10: String,
  Sous_Total_Conception11: String,
  Interet_porteur_projet: [
    {
      Etude_preleminaire_biomasse: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Rapport_prefaisabilite: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Impact_economique_exploitant: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Bilan_agronomique_sols: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Apres_Avis_favorable_Creation_SPV: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Sous_Total_Conception: String,
    },
  ],

  Etude_biomasse_projet: [
    {
      Cibler_besoins_complementaires_nutritionnels: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Rapport_etude_approfondi_pouvoir_meethanogeene: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Apport_supplémentaire_intrants_réseau_ENR_Agri: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Assistance_juridique_Apporteur_substrat_SPV: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
    },
  ],
  Étude_fonciere_projet: [
    {
      Optimisation_emplacement_site: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Releve_topographique: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Rapport_geometre: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Plan_masse: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Analyse_geotechnique_primaire: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Analyse_geotechnique_approfondie: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Assistance_juridique_aupres_notaire_Propriétaire_foncier_SPV: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
    },
  ],
  sercurisation_gaziers: [
    {
      etude_detaille_reseau_transport__distribution_gaz: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Convention_raccordement_gestionnaire_reseau: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Contrat_vente_biomethane: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
    },
  ],
  valorisation_digestat: [
    {
      etude_qualite_digestat: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Diagnostic_zone_epandable: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Chiffrage_budget_epandage: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Dossier_autorisation_plan_epandage: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Rendez_vous_exploitants_recevront_digestat: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Assistance_juridique_Contrat_epandage_SPV: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
    },
  ],
  Réalisation_Marketing: [
    {
      Plaquette_presentation: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Realisation_infographie_3D: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Film_animation: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Site_internet: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
    },
  ],
  acceptabilite_projet: [
    {
      Diagnostic_territorial: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Realisation_plans_action: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Film_aniFormation_riverains_bienfaits_methanisationmation: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Défense_promotion_projet_elus_population_locale: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Reponses_questions_enquete_publiques: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
    },
  ],
  realisation_Projet: [
    {
      Dimensionnement_Projet: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      etude_dispersion_odeur_eventuelle: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Proposition_choix_process: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Dossier_consultation_Entreprises: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Contrat_TRC_TRME_Exploitation_negociee: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Business_Plan_detaille: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],

      Contrat_prestataire_Controle_technique: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
    },
  ],
  obtention_autorisations_urbanisme_exploitation_Projet: [
    {
      Diagnostic_environnemental: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Obtention_agrement_sanitaire: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Étude_loi_eau: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      etude_foudre: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Dossier_ICPE: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Obtention_arret_PC_Passage_huissier: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],

      Rendez_vous_service_instructeur: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
    },
  ],
  obtention_subvention_Projet: [
    {
      Reunion_organismes: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Depot_dossier_subventions: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
    },
  ],
  obtention_financement_Projet: [
    {
      Instruction_dossier_bancaire: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
      Suivi_instructions_negociations: [
        {
          SS_Traitance: String,
          GP_percent: String,
          GP_euro: String,
          Prix_base_Concep: String,
          Prix_vente_Concep: String,
        },
      ],
    },
  ],
});

const Fiche = mongoose.model("Fiche", ficheSchema);
function validateFiche(fiche) {
  const schema = {
    base_prix: Joi.string().valid(...base_prix),
  };
  return Joi.validate(fiche, schema);
}

exports.ficheSchema = ficheSchema;
exports.Fiche = Fiche;
exports.validateFiche = validateFiche;
