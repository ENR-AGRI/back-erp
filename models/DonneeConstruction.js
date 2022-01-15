var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DonneeSchema = new Schema({
  Interet_porteur_projet: {
    Etude_preleminaire_biomasse: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Rapport_prefaisabilite: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Impact_economique_exploitant: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Bilan_agronomique_sols: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Apres_Avis_favorable_Creation_SPV: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Sous_Total_Conception: String,
    Sous_Total_Prix_vente_Concep: String,
    Marge_totaux: String,
  },

  Etude_biomasse_projet: {
    Cibler_besoins_complementaires_nutritionnels: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Rapport_etude_approfondi_pouvoir_meethanogeene: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Apport_supplementaire_intrants_reseau_ENR_Agri: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Assistance_juridique_Apporteur_substrat_SPV: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Sous_Total_Conception: String,
    Sous_Total_Prix_vente_Concep: String,
    Marge_totaux: String,
  },

  Etude_fonciere_projet: {
    Optimisation_emplacement_site: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Releve_topographique: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Rapport_geometre: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Plan_masse: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Analyse_geotechnique_primaire: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Analyse_geotechnique_approfondie: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Assistance_juridique_aupres_notaire_Proprietaire_foncier_SPV: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Sous_Total_Conception: String,
    Sous_Total_Prix_vente_Concep: String,
    Marge_totaux: String,
  },

  sercurisation_gaziers: {
    etude_detaille_reseau_transport__distribution_gaz: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Convention_raccordement_gestionnaire_reseau: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Contrat_vente_biomethane: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Sous_Total_Conception: String,
    Sous_Total_Prix_vente_Concep: String,
    Marge_totaux: String,
  },

  valorisation_digestat: {
    etude_qualite_digestat: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Diagnostic_zone_epandable: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Chiffrage_budget_epandage: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Dossier_autorisation_plan_epandage: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Rendez_vous_exploitants_recevront_digestat: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Assistance_juridique_Contrat_epandage_SPV: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Sous_Total_Conception: String,
    Sous_Total_Prix_vente_Concep: String,
    Marge_totaux: String,
  },

  Realisation_Marketing: {
    Plaquette_presentation: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Realisation_infographie_3D: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Film_animation: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Site_internet: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Sous_Total_Conception: String,
    Sous_Total_Prix_vente_Concep: String,
    Marge_totaux: String,
  },

  acceptabilite_projet: {
    Diagnostic_territorial: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Realisation_plans_action: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Film_aniFormation_riverains_bienfaits_methanisationmation: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Defense_promotion_projet_elus_population_locale: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Reponses_questions_enquete_publiques: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Sous_Total_Conception: String,
    Sous_Total_Prix_vente_Concep: String,
    Marge_totaux: String,
  },

  realisation_Projet: {
    Dimensionnement_Projet: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    etude_dispersion_odeur_eventuelle: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Proposition_choix_process: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Dossier_consultation_Entreprises: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Contrat_TRC_TRME_Exploitation_negociee: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Business_Plan_detaille: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Contrat_prestataire_Controle_technique: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Sous_Total_Conception: String,
    Sous_Total_Prix_vente_Concep: String,
     Marge_totaux: String,
  },

  obtention_autorisations_urbanisme_exploitation_Projet: {
    Diagnostic_environnemental: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Obtention_agrement_sanitaire: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    etude_loi_eau: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    etude_foudre: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Dossier_ICPE: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Obtention_arret_PC_Passage_huissier: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Rendez_vous_service_instructeur: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Sous_Total_Conception: String,
    Sous_Total_Prix_vente_Concep: String,
     Marge_totaux: String,
  },

  obtention_subvention_Projet: {
    Reunion_organismes: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Depot_dossier_subventions: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Sous_Total_Conception: String,
    Sous_Total_Prix_vente_Concep: String,
  },

  obtention_financement_Projet: {
    Instruction_dossier_bancaire: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Suivi_instructions_negociations: {
      SS_Traitance: String,
      marge_percent: String,
      marge_euro: String,
      marge_totale: String,
      Prix_vente_Concep: String,
    },

    Sous_Total_Conception: String,
    Sous_Total_Prix_vente_Concep: String,
     Marge_totaux: String,
  },
 
});

const Donnee = mongoose.model("Donnee", DonneeSchema);

exports.DonneeSchema = DonneeSchema;
exports.Donnee = Donnee;
