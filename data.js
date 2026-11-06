// Isoloir 2027 — données. Sources : barometre-2027.fr (synthèses sourcées, à jour 15-19 oct. 2026),
// sites de campagne et presse cités par ce site. Positions : 1 = pour, 0.5 = plutôt pour,
// -0.5 = plutôt contre, -1 = contre. Absent = position non documentée (ne compte pas).
window.ISO_UPDATED = "6 novembre 2026";

window.ISO_THEMES = {
  eco:   "Travail & pouvoir d'achat",
  fisc:  "Impôts & dépenses",
  retr:  "Retraites",
  sante: "Santé",
  edu:   "École & jeunesse",
  secu:  "Sécurité & justice",
  immi:  "Immigration",
  ecolo: "Écologie & énergie",
  europe:"Europe & défense",
  inst:  "Institutions"
};

window.ISO_CANDIDATES = [
  { id:"na",  name:"Nathalie Arthaud",     party:"Lutte ouvrière" },
  { id:"fr",  name:"Fabien Roussel",       party:"Parti communiste français" },
  { id:"jlm", name:"Jean-Luc Mélenchon",   party:"La France insoumise" },
  { id:"ruf", name:"François Ruffin",      party:"Debout !" },
  { id:"mt",  name:"Marine Tondelier",     party:"Les Écologistes" },
  { id:"kb",  name:"Karim Bouamrane",      party:"Parti socialiste (hors primaire)" },
  { id:"rg",  name:"Raphaël Glucksmann",   party:"Place publique, vainqueur de la primaire PS" },
  { id:"bc",  name:"Bernard Cazeneuve",    party:"La Convention" },
  { id:"ga",  name:"Gabriel Attal",        party:"Renaissance" },
  { id:"ep",  name:"Édouard Philippe",     party:"Horizons" },
  { id:"xb",  name:"Xavier Bertrand",      party:"Nous France" },
  { id:"br",  name:"Bruno Retailleau",     party:"Les Républicains" },
  { id:"dl",  name:"David Lisnard",        party:"Nouvelle Énergie" },
  { id:"nda", name:"Nicolas Dupont-Aignan",party:"Debout la France" },
  { id:"mlp", name:"Marine Le Pen",        party:"Rassemblement national" },
  { id:"ez",  name:"Éric Zemmour",         party:"Reconquête" }
];

// core: true = incluse dans le test express
window.ISO_STATEMENTS = [
  // Travail & pouvoir d'achat
  { id:"e1", t:"eco", core:1, text:"Porter le SMIC à au moins 1 700 € net par mois.", pos:{na:1,fr:1,jlm:1,ruf:1,kb:-1} },
  { id:"e2", t:"eco", text:"Indexer automatiquement les salaires sur l'inflation.", pos:{na:1,fr:1,ruf:1,mt:1} },
  { id:"e3", t:"eco", core:1, text:"Exonérer totalement d'impôts et de cotisations les heures supplémentaires.", pos:{ez:1,br:1,nda:1} },
  { id:"e4", t:"eco", text:"Baisser fortement les cotisations sociales pour augmenter le salaire net, en le finançant par des économies publiques.", pos:{dl:1,br:1,ga:0.5} },
  { id:"e5", t:"eco", text:"Plafonner le cumul des aides sociales en dessous du niveau du SMIC.", pos:{nda:1,br:1} },
  { id:"e6", t:"eco", text:"Réduire la durée maximale d'indemnisation du chômage.", pos:{ep:1,ga:0.5} },
  { id:"e7", t:"eco", core:1, text:"Réduire le temps de travail : 35 h effectives, 32 h dans les métiers pénibles, partage du travail.", pos:{jlm:1,na:1,ep:-1} },
  { id:"e8", t:"eco", text:"Nationaliser des entreprises stratégiques (pétrole, électricité, une grande banque).", pos:{fr:1,na:1,ruf:0.5} },
  { id:"e9", t:"eco", core:1, text:"Protéger l'industrie française avec des droits de douane et des quotas sur certains produits étrangers.", pos:{nda:1,ruf:1,na:-1} },

  // Impôts & dépenses
  { id:"f1", t:"fisc", core:1, text:"Rétablir un impôt sur la fortune (ISF).", pos:{fr:1,jlm:1,mt:1,ep:-1,xb:-1} },
  { id:"f2", t:"fisc", core:1, text:"Taxer beaucoup plus les très gros héritages.", pos:{rg:1,mt:1,fr:1,jlm:1,bc:0.5,br:-1,ez:-0.5} },
  { id:"f3", t:"fisc", core:1, text:"Redresser les comptes publics sans aucune hausse d'impôts, uniquement par des économies.", pos:{ep:1,xb:1,dl:1,br:1,mlp:1,jlm:-1,fr:-1,mt:-1,rg:-1,na:-1,bc:-1} },
  { id:"f4", t:"fisc", core:1, text:"Réduire le nombre de fonctionnaires en ne remplaçant pas une partie des départs.", pos:{ga:1,br:1,dl:1,xb:1,fr:-0.5} },
  { id:"f5", t:"fisc", text:"Inscrire dans la Constitution une « règle d'or » qui impose l'équilibre budgétaire.", pos:{ep:1,mlp:1,br:1} },
  { id:"f6", t:"fisc", text:"Taxer automatiquement les « superprofits » des grandes entreprises.", pos:{rg:1,jlm:1,na:1} },
  { id:"f7", t:"fisc", text:"Demander que la dette française détenue par la Banque centrale européenne soit rendue perpétuelle à taux zéro.", pos:{jlm:1} },

  // Retraites
  { id:"r1", t:"retr", text:"Ramener l'âge légal de départ à la retraite à 60 ans.", pos:{na:1,fr:1,jlm:1,ruf:1,mt:0.5,kb:-1,ep:-1,ez:-1,br:-1,xb:-1,dl:-1} },
  { id:"r2", t:"retr", core:1, text:"Abroger la réforme des retraites de 2023 et revenir à 62 ans.", pos:{jlm:1,mt:1,rg:1,mlp:1,fr:1,ruf:1,na:1,nda:0.5,kb:0.5,dl:-1,ep:-1,br:-1,ez:-1,xb:-1} },
  { id:"r3", t:"retr", text:"Repousser l'âge de départ à la retraite à 65 ans.", pos:{ep:1,ez:1,br:0.5,xb:0.5,jlm:-1,fr:-1,na:-1,ruf:-1,mt:-1,rg:-1,mlp:-1,nda:-1} },
  { id:"r4", t:"retr", core:1, text:"Ajouter une part de retraite par capitalisation (épargne placée) à côté du système actuel.", pos:{mlp:1,dl:1,xb:1,ez:1,br:1,ep:1,ga:1,nda:0.5,fr:-1} },
  { id:"r5", t:"retr", text:"Garantir une pension au moins égale au SMIC pour une carrière complète.", pos:{fr:1,jlm:1,ruf:1,na:1} },
  { id:"r6", t:"retr", text:"Supprimer l'âge légal : chacun part quand il a assez cotisé, avec bonus ou malus.", pos:{ga:1} },

  // Santé
  { id:"s1", t:"sante", core:1, text:"Obliger les médecins à s'installer là où ils manquent.", pos:{jlm:1,fr:1,dl:-1} },
  { id:"s2", t:"sante", text:"Rembourser à 100 % les soins prescrits, en intégrant les mutuelles à la Sécurité sociale.", pos:{jlm:1,na:1,fr:0.5} },
  { id:"s3", t:"sante", text:"Doubler le nombre d'étudiants en médecine.", pos:{dl:1,ez:1,nda:1,fr:1} },
  { id:"s4", t:"sante", core:1, text:"Remplacer l'aide médicale d'État pour les sans-papiers par une aide limitée aux urgences.", pos:{nda:1,dl:1,ez:1,jlm:-1} },
  { id:"s5", t:"sante", text:"Ne plus indemniser le premier jour des arrêts maladie courts.", pos:{ep:1} },
  { id:"s6", t:"sante", text:"Supprimer les agences régionales de santé (ARS).", pos:{dl:1,ez:1} },

  // École & jeunesse
  { id:"d1", t:"edu", text:"Supprimer Parcoursup.", pos:{jlm:1,dl:1,nda:0.5} },
  { id:"d2", t:"edu", core:1, text:"Imposer l'uniforme à l'école.", pos:{kb:1,mlp:1,ep:0.5} },
  { id:"d3", t:"edu", text:"Mettre fin au collège unique pour orienter plus tôt les élèves.", pos:{br:1,ez:1,dl:1} },
  { id:"d4", t:"edu", core:1, text:"Laisser les familles choisir leur école, l'argent public suivant l'élève dans le public comme dans le privé.", pos:{dl:1,br:1,rg:-1} },
  { id:"d5", t:"edu", text:"Créer un service civil obligatoire de plusieurs mois pour tous les jeunes.", pos:{rg:1} },
  { id:"d6", t:"edu", core:1, text:"Interdire les réseaux sociaux aux moins de 15 ans.", pos:{ga:1} },
  { id:"d7", t:"edu", text:"Rendre l'enseignement supérieur gratuit et verser un revenu aux étudiants.", pos:{jlm:1,fr:1} },
  { id:"d8", t:"edu", text:"Conditionner l'entrée au collège à un examen de fin de primaire.", pos:{ez:1,dl:1} },

  // Sécurité & justice
  { id:"c1", t:"secu", text:"Abaisser la majorité pénale à 16 ans.", pos:{ez:1,nda:1,dl:1,xb:1} },
  { id:"c2", t:"secu", core:1, text:"Instaurer des peines planchers, c'est-à-dire des peines minimales automatiques.", pos:{ep:1,ez:1,mlp:1,xb:1,bc:-0.5,fr:-0.5} },
  { id:"c3", t:"secu", core:1, text:"Construire massivement de nouvelles places de prison.", pos:{dl:1,nda:1,ez:1,mlp:1,fr:-1} },
  { id:"c4", t:"secu", core:1, text:"Rétablir une police de proximité.", pos:{jlm:1,bc:1,rg:1,mt:1,fr:1} },
  { id:"c5", t:"secu", text:"Démanteler les brigades anticriminalité et interdire LBD et tasers.", pos:{jlm:1} },
  { id:"c6", t:"secu", text:"Créer une présomption de légitime défense pour les policiers et gendarmes.", pos:{nda:1,mlp:1} },
  { id:"c7", t:"secu", text:"Créer un « état d'urgence » contre le narcotrafic, avec des pouvoirs exceptionnels.", pos:{br:1,ep:1} },
  { id:"c8", t:"secu", text:"Remplacer l'IGPN par une autorité indépendante pour contrôler la police.", pos:{jlm:1,fr:1} },

  // Immigration
  { id:"i1", t:"immi", core:1, text:"Supprimer le droit du sol.", pos:{br:1,mlp:1,ez:1,nda:1,dl:0.5,jlm:-1} },
  { id:"i2", t:"immi", core:1, text:"Régulariser les travailleurs sans papiers.", pos:{na:1,fr:1,jlm:1,mt:1,rg:1,mlp:-1,ep:-0.5,xb:-0.5} },
  { id:"i3", t:"immi", text:"Réserver en priorité aux Français le logement social et certaines aides.", pos:{mlp:1,ez:1,br:0.5} },
  { id:"i4", t:"immi", core:1, text:"Réduire fortement l'immigration légale.", pos:{dl:1,ep:1,br:1,mlp:1,ez:1,nda:1,ga:0.5,ruf:0.5,jlm:-1,na:-1,mt:-1} },
  { id:"i5", t:"immi", text:"Organiser un référendum sur l'immigration.", pos:{mlp:1,br:1,dl:1,nda:1} },
  { id:"i6", t:"immi", text:"Fixer par la loi des quotas d'immigration.", pos:{br:1,ga:1} },
  { id:"i7", t:"immi", text:"Donner le droit de vote aux étrangers aux élections locales.", pos:{jlm:1} },
  { id:"i8", t:"immi", text:"Rétablir le délit de séjour irrégulier.", pos:{dl:1,nda:1} },

  // Écologie & énergie
  { id:"n1", t:"ecolo", core:1, text:"Sortir du nucléaire.", pos:{jlm:1,mt:1,fr:-1,ruf:-1,br:-1,dl:-1,nda:-1,mlp:-1,ez:-1,rg:-1,bc:-1,xb:-1} },
  { id:"n2", t:"ecolo", core:1, text:"Arrêter de subventionner l'éolien et le solaire.", pos:{br:1,nda:1,mlp:1,ez:1,xb:0.5,mt:-1,jlm:-1,rg:-1} },
  { id:"n3", t:"ecolo", core:1, text:"Interdire rapidement le glyphosate et les pesticides les plus contestés.", pos:{jlm:1,mt:1,kb:-0.5} },
  { id:"n4", t:"ecolo", text:"Retirer le principe de précaution de la Constitution.", pos:{br:1,dl:1} },
  { id:"n5", t:"ecolo", text:"Réduire le trafic aérien et rendre le train moins cher.", pos:{mt:1,ruf:1,rg:0.5} },
  { id:"n6", t:"ecolo", text:"Sortir du marché européen de l'électricité pour faire baisser les prix.", pos:{nda:1,fr:1,ruf:1} },
  { id:"n7", t:"ecolo", text:"Proposer des voitures électriques en location sociale à grande échelle.", pos:{mt:1,ruf:1,fr:1} },

  // Europe & défense
  { id:"u1", t:"europe", core:1, text:"Sortir de l'Union européenne par référendum.", pos:{nda:1,dl:-1,ga:-1,rg:-1,mt:-1,bc:-1} },
  { id:"u2", t:"europe", text:"Faire primer la Constitution française sur le droit européen.", pos:{mlp:1,br:1,ez:1,dl:0.5} },
  { id:"u3", t:"europe", core:1, text:"Aller vers une Europe fédérale, plus intégrée.", pos:{rg:1,mt:1,ga:1,fr:-1,nda:-1,dl:-0.5} },
  { id:"u4", t:"europe", text:"Supprimer le droit de veto de chaque pays au sein de l'UE.", pos:{rg:1,bc:1,ruf:-1} },
  { id:"u5", t:"europe", core:1, text:"Quitter le commandement intégré de l'OTAN.", pos:{jlm:1,nda:1,ez:1,ep:-1,bc:-1} },
  { id:"u6", t:"europe", text:"Augmenter l'aide militaire à l'Ukraine.", pos:{rg:1,ep:1,nda:-1,mlp:-0.5,fr:-0.5} },
  { id:"u7", t:"europe", core:1, text:"Augmenter fortement le budget de la défense.", pos:{br:1,ez:1,kb:1,bc:1,nda:1,na:-1,fr:-1} },
  { id:"u8", t:"europe", text:"Partager la dissuasion nucléaire française avec les autres pays européens.", pos:{rg:1,bc:0.5,br:-1} },
  { id:"u9", t:"europe", text:"Refuser l'accord commercial entre l'UE et le Mercosur.", pos:{nda:1,jlm:1} },

  // Institutions
  { id:"t1", t:"inst", core:1, text:"Changer de Constitution grâce à une Assemblée constituante.", pos:{jlm:1,mt:1,rg:0.5,bc:-1} },
  { id:"t2", t:"inst", core:1, text:"Créer le référendum d'initiative citoyenne (RIC).", pos:{jlm:1,nda:1,ruf:1,fr:1,mlp:0.5,rg:0.5,dl:0.5,br:0.5} },
  { id:"t3", t:"inst", core:1, text:"Élire les députés à la proportionnelle.", pos:{jlm:1,fr:1,rg:1,mlp:0.5,bc:0.5} },
  { id:"t4", t:"inst", core:1, text:"Revenir à un mandat présidentiel de 7 ans.", pos:{nda:1,dl:1,bc:1,xb:1} },
  { id:"t5", t:"inst", text:"Donner le droit de vote dès 16 ans.", pos:{jlm:1,rg:1} },
  { id:"t6", t:"inst", text:"Permettre au peuple de passer outre une censure du Conseil constitutionnel par référendum.", pos:{br:1,dl:1} },
  { id:"t7", t:"inst", text:"Supprimer l'article 49.3, qui permet d'adopter une loi sans vote.", pos:{jlm:1,fr:1,rg:1,bc:0.5} },
  { id:"t8", t:"inst", text:"Limiter par la loi la concentration des médias entre quelques propriétaires.", pos:{mt:1,bc:1} },
  { id:"t9", t:"inst", text:"Payer le président de la République au niveau du SMIC.", pos:{ruf:1} }
];

// Programmes condensés, présentés à l'aveugle (sans nom ni parti)
window.ISO_PROGRAMMES = {
  na: [
    "SMIC à 2 200 € net par mois",
    "Salaires, pensions et allocations indexés sur les prix",
    "Interdire les licenciements et partager le travail sans baisse de salaire",
    "Exproprier sans indemnité les grands actionnaires, à commencer par le pétrole et l'armement",
    "Régulariser tous les sans-papiers, liberté de circulation et d'installation",
    "Contre la hausse du budget militaire et le service militaire"
  ],
  fr: [
    "SMIC à 1 700 € net et hausse de 5 % de tous les salaires",
    "Carburant bloqué à 1,60 € le litre, électricité et gaz moins chers de 30 %",
    "Nationaliser le premier groupe pétrolier français et une grande banque",
    "Retraite à 60 ans à taux plein, aucune pension sous le SMIC",
    "Doubler la production d'électricité nucléaire et renouvelable",
    "Rétablir l'ISF et faire cotiser les dividendes"
  ],
  jlm: [
    "SMIC à 1 700 € net, blocage des prix des produits de première nécessité",
    "Retraite à 60 ans avec 40 années de cotisation",
    "Soins prescrits remboursés à 100 %, mutuelles intégrées à la Sécurité sociale",
    "Sortie du nucléaire et 100 % d'énergies renouvelables en 2050",
    "Nouvelle Constitution par une Assemblée constituante, RIC, vote à 16 ans",
    "Quitter le commandement intégré de l'OTAN"
  ],
  ruf: [
    "SMIC à 1 700 € net et prime de 1 000 € sans impôt pour les salariés modestes",
    "Heures travaillées avant 8 h et après 18 h payées double",
    "Encadrement des loyers partout, un million de logements à loyer réduit en 5 ans",
    "Retraite à 60 ans et pension minimale au niveau du SMIC",
    "Prolonger les centrales et construire 6 nouveaux réacteurs, électricité 100 % publique",
    "Contre le recrutement de main-d'œuvre à l'étranger, président payé au SMIC"
  ],
  mt: [
    "Salaire minimum à 2 000 € brut, bas salaires indexés sur l'inflation",
    "Sortie du nucléaire, objectif 100 % renouvelables",
    "ISF climatique et taxe sur les héritages de plus de 4 M€",
    "Abroger la réforme des retraites de 2023, 2 000 centres de santé",
    "Régulariser les travailleurs sans papiers",
    "Nouvelle Constitution parlementaire et loi contre le mensonge en politique"
  ],
  kb: [
    "Fonds souverain de 100 Md€ pour construire des logements",
    "Lutter contre les déserts médicaux et préparer la santé au vieillissement",
    "Uniforme et hymne national le matin à l'école",
    "Protection des enfants et des femmes victimes de violences en grande cause nationale",
    "Hausse de l'effort de défense et dissuasion nucléaire crédible",
    "Juge la retraite à 60 ans non finançable"
  ],
  rg: [
    "Hausse du salaire net financée par une taxe sur les héritages de plus de 2 M€",
    "SMIC à 1 600 € net en deux ans",
    "Abroger la réforme de 2023, âge de départ modulé selon la pénibilité",
    "Europe fédérale : fonds de défense de 500 Md€, fin du droit de veto",
    "Proportionnelle, fin du 49.3, vote à 16 ans",
    "Service civil obligatoire de 10 mois pour les jeunes"
  ],
  bc: [
    "Plan de réindustrialisation sur dix ans",
    "Allonger la durée de cotisation par la négociation plutôt que reculer l'âge",
    "Santé mentale grande cause nationale",
    "Police de proximité et unités spécialisées contre le narcotrafic",
    "Retour au septennat et une dose de proportionnelle",
    "Fin de l'unanimité dans l'UE, maintien dans l'OTAN"
  ],
  ga: [
    "Supprimer l'âge légal de retraite au profit de la durée de cotisation, avec capitalisation",
    "150 Md€ d'économies en 5 ans et 100 000 postes publics en moins",
    "+200 à +500 € net par mois pour les enseignants",
    "Référendum pour interdire les réseaux sociaux aux moins de 15 ans",
    "Quotas d'immigration : accueillir moins pour accueillir mieux",
    "Des « États-Unis d'Europe » avec un noyau de pays volontaires"
  ],
  ep: [
    "Retraite à 65 ans et 45 ans de cotisation, fonds de capitalisation collectif",
    "Aucune hausse d'impôts et règle d'or budgétaire par référendum",
    "Indemnisation chômage limitée à 12 mois pour les moins de 50 ans",
    "Allocation familiale unique de 350 € par mois dès le premier enfant",
    "Peines planchers et « état d'urgence narco »",
    "Enseignants augmentés de 20 % sur le quinquennat"
  ],
  xb: [
    "Baisser la dépense publique de 20 Md€ par an, sans nouvel impôt",
    "Repousser l'âge de départ avec un étage de capitalisation obligatoire",
    "Un seul mandat, puis un septennat unique proposé par référendum",
    "Plus de pouvoirs aux maires et aux élus locaux",
    "Demandes d'asile traitées en 15 jours à la frontière de l'Europe",
    "Priorité aux classes moyennes, au logement et aux parents isolés"
  ],
  br: [
    "Âge minimum de retraite à 63 ans, taux plein à 65 ans, capitalisation pour les jeunes",
    "197 Md€ d'économies et 400 000 départs de fonctionnaires non remplacés",
    "Fin du droit du sol, quotas migratoires et référendum sur l'immigration",
    "« État d'urgence anti-trafics » inscrit dans la Constitution",
    "Centrales nucléaires prolongées à 80 ans, fin des subventions à l'éolien",
    "Libre choix de l'école, fin du collège unique, baisse des droits de succession"
  ],
  dl: [
    "Environ 400 € de salaire net en plus par mois grâce à la baisse des cotisations",
    "200 Md€ d'économies par an en fin de mandat, suppression d'agences publiques",
    "Retraite par capitalisation obligatoire à côté de la répartition",
    "Titres de séjour divisés par huit, délit de séjour irrégulier rétabli",
    "Chèque éducation et fin de la carte scolaire",
    "20 000 places de prison, majorité pénale à 16 ans, retour au septennat"
  ],
  nda: [
    "Sortir de l'Union européenne par référendum",
    "Protectionnisme pour relocaliser 2 millions d'emplois",
    "Essence moins chère de 40 centimes par litre",
    "Retraite à 62 ans et 9 mois, 10 000 € placés pour chaque nouveau-né",
    "Sortie de l'espace Schengen et fin du droit du sol",
    "Fin de l'aide à l'Ukraine, RIC et retour au septennat"
  ],
  mlp: [
    "Retour de la retraite à 62 ans, 60 ans pour les carrières longues, avec capitalisation",
    "Référendum sur l'immigration, fin du droit du sol, priorité nationale dans la Constitution",
    "140 Md€ d'économies et 30 Md€ de baisses d'impôts",
    "Logement social et APL réservés aux Français, abrogation de la loi SRU",
    "Relance du nucléaire, fin des subventions à l'éolien et au solaire",
    "Réduction de l'aide financière à l'Ukraine"
  ],
  ez: [
    "Un étranger en règle doit quitter la France après un an de chômage",
    "Retraite à 64 ou 65 ans et passage progressif à la capitalisation",
    "Heures supplémentaires sans impôt ni cotisation",
    "Fin du collège unique, certificat d'études pour entrer en sixième",
    "14 nouveaux réacteurs nucléaires et interdiction de tout nouveau projet éolien",
    "Majorité pénale à 16 ans, peines planchers, sortie du commandement de l'OTAN"
  ]
};
