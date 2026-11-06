// Isoloir 2027 — données.
// Sources : barometre-2027.fr (synthèses sourcées, à jour 15-19 oct. 2026), sites de campagne et presse cités.
// Positions : 1 = pour, 0.5 = plutôt pour, -0.5 = plutôt contre, -1 = contre. Absent = non documenté (ne compte pas).
window.ISO_UPDATED = "6 novembre 2026";
window.ISO_ROUND1 = "2027-04-18";

window.ISO_THEMES = {
  eco:   "Travail et salaires",
  fisc:  "Impôts et dette",
  retr:  "Retraites",
  sante: "Santé",
  edu:   "École et jeunes",
  secu:  "Sécurité et justice",
  immi:  "Immigration",
  ecolo: "Écologie et énergie",
  europe:"Europe et défense",
  inst:  "Démocratie"
};

// Familles politiques, de gauche à droite (regroupement indicatif utilisé par la presse)
window.ISO_FAMILIES = [
  { id:"xg",  name:"Extrême gauche",            short:"Ext. gauche" },
  { id:"gr",  name:"Gauche radicale",           short:"Gauche rad." },
  { id:"g",   name:"Gauche",                    short:"Gauche" },
  { id:"gsd", name:"Gauche sociale-démocrate",  short:"Soc.-dém." },
  { id:"c",   name:"Centre",                    short:"Centre" },
  { id:"d",   name:"Droite",                    short:"Droite" },
  { id:"ds",  name:"Droite souverainiste",      short:"Souverain." },
  { id:"xd",  name:"Extrême droite",            short:"Ext. droite" }
];

window.ISO_CANDIDATES = [
  { id:"na",  name:"Nathalie Arthaud",      party:"Lutte ouvrière",            fam:"xg" },
  { id:"jlm", name:"Jean-Luc Mélenchon",    party:"La France insoumise",       fam:"gr" },
  { id:"fr",  name:"Fabien Roussel",        party:"Parti communiste français", fam:"g" },
  { id:"ruf", name:"François Ruffin",       party:"Debout !",                  fam:"g" },
  { id:"mt",  name:"Marine Tondelier",      party:"Les Écologistes",           fam:"g" },
  { id:"rg",  name:"Raphaël Glucksmann",    party:"Place publique et PS",      fam:"gsd" },
  { id:"kb",  name:"Karim Bouamrane",       party:"Parti socialiste (dissident)", fam:"gsd" },
  { id:"bc",  name:"Bernard Cazeneuve",     party:"La Convention",             fam:"gsd" },
  { id:"ga",  name:"Gabriel Attal",         party:"Renaissance",               fam:"c" },
  { id:"ep",  name:"Édouard Philippe",      party:"Horizons",                  fam:"c" },
  { id:"xb",  name:"Xavier Bertrand",       party:"Nous France",               fam:"d" },
  { id:"br",  name:"Bruno Retailleau",      party:"Les Républicains",          fam:"d" },
  { id:"dl",  name:"David Lisnard",         party:"Nouvelle Énergie",          fam:"d" },
  { id:"nda", name:"Nicolas Dupont-Aignan", party:"Debout la France",          fam:"ds" },
  { id:"mlp", name:"Marine Le Pen",         party:"Rassemblement national",    fam:"xd" },
  { id:"ez",  name:"Éric Zemmour",          party:"Reconquête",                fam:"xd" }
];

// core: 1 = dans le test express. help = explication « C'est quoi ? »
window.ISO_STATEMENTS = [
  // Travail et salaires
  { id:"e1", t:"eco", core:1, text:"Augmenter le SMIC à 1 700 € net par mois.", help:"Aujourd'hui, le SMIC tourne autour de 1 450 € net par mois pour un temps plein.", pos:{na:1,fr:1,jlm:1,ruf:1,kb:-1} },
  { id:"e2", t:"eco", text:"Faire monter les salaires automatiquement quand les prix augmentent.", help:"On appelle ça l'indexation : si les prix prennent 3 %, les salaires aussi.", pos:{na:1,fr:1,ruf:1,mt:1} },
  { id:"e3", t:"eco", core:1, text:"Ne plus payer ni impôts ni charges sur les heures supplémentaires.", pos:{ez:1,br:1,nda:1} },
  { id:"e4", t:"eco", text:"Baisser les charges sur les salaires pour gagner plus net, en réduisant les dépenses de l'État.", pos:{dl:1,br:1,ga:0.5} },
  { id:"e5", t:"eco", core:1, text:"Qu'on ne puisse jamais toucher plus d'aides sociales que le SMIC.", help:"Il s'agit de plafonner le total des aides (RSA, prime d'activité…) en dessous du salaire minimum.", pos:{nda:1,br:1} },
  { id:"e6", t:"eco", text:"Raccourcir la durée pendant laquelle on touche le chômage.", help:"Aujourd'hui, c'est en général jusqu'à 18 mois.", pos:{ep:1,ga:0.5} },
  { id:"e7", t:"eco", core:1, text:"Travailler moins : de vraies 35 h, et 32 h dans les métiers pénibles.", pos:{jlm:1,na:1,ep:-1} },
  { id:"e8", t:"eco", core:1, text:"Que l'État reprenne le contrôle de grandes entreprises : pétrole, électricité, banque.", help:"On appelle ça nationaliser.", pos:{fr:1,na:1,ruf:0.5} },
  { id:"e9", t:"eco", core:1, text:"Taxer certains produits étrangers pour protéger les usines françaises.", help:"Des droits de douane et des quotas : c'est le protectionnisme.", pos:{nda:1,ruf:1,na:-1} },

  // Impôts et dette
  { id:"f1", t:"fisc", core:1, text:"Remettre l'impôt sur la fortune (ISF).", help:"Un impôt payé chaque année sur les très gros patrimoines. Depuis 2018, il ne porte plus que sur l'immobilier.", pos:{fr:1,jlm:1,mt:1,ep:-1,xb:-1} },
  { id:"f2", t:"fisc", core:1, text:"Taxer beaucoup plus les héritages de plusieurs millions d'euros.", pos:{rg:1,mt:1,fr:1,jlm:1,bc:0.5,br:-1,ez:-0.5} },
  { id:"f3", t:"fisc", core:1, text:"Réduire la dette sans aucune hausse d'impôts, seulement en dépensant moins.", pos:{ep:1,xb:1,dl:1,br:1,mlp:1,jlm:-1,fr:-1,mt:-1,rg:-1,na:-1,bc:-1} },
  { id:"f4", t:"fisc", core:1, text:"Avoir moins de fonctionnaires en ne remplaçant pas tous ceux qui partent à la retraite.", pos:{ga:1,br:1,dl:1,xb:1,fr:-0.5} },
  { id:"f5", t:"fisc", text:"Interdire à l'État, dans la Constitution, de dépenser plus qu'il ne gagne.", help:"C'est la « règle d'or » budgétaire.", pos:{ep:1,mlp:1,br:1} },
  { id:"f6", t:"fisc", text:"Taxer davantage les grandes entreprises quand elles font des profits exceptionnels.", help:"Les « superprofits », par exemple ceux des groupes pétroliers en période de crise.", pos:{rg:1,jlm:1,na:1} },
  { id:"f7", t:"fisc", text:"Transformer la dette française détenue par la Banque centrale européenne en dette jamais remboursée et sans intérêts.", help:"La BCE détient environ 600 milliards d'euros de dette française.", pos:{jlm:1} },

  // Retraites
  { id:"r1", t:"retr", text:"Pouvoir partir à la retraite à 60 ans.", pos:{na:1,fr:1,jlm:1,ruf:1,mt:0.5,kb:-1,ep:-1,ez:-1,br:-1,xb:-1,dl:-1} },
  { id:"r2", t:"retr", core:1, text:"Annuler la réforme de 2023 et revenir à un départ à 62 ans.", help:"La réforme de 2023 a repoussé l'âge légal de départ de 62 à 64 ans.", pos:{jlm:1,mt:1,rg:1,mlp:1,fr:1,ruf:1,na:1,nda:0.5,kb:0.5,dl:-1,ep:-1,br:-1,ez:-1,xb:-1} },
  { id:"r3", t:"retr", text:"Repousser l'âge de départ à la retraite à 65 ans.", pos:{ep:1,ez:1,br:0.5,xb:0.5,jlm:-1,fr:-1,na:-1,ruf:-1,mt:-1,rg:-1,mlp:-1,nda:-1} },
  { id:"r4", t:"retr", core:1, text:"Placer une partie de l'argent de nos retraites sur les marchés financiers.", help:"C'est la capitalisation. Elle viendrait en plus du système actuel, où les actifs paient les pensions des retraités.", pos:{mlp:1,dl:1,xb:1,ez:1,br:1,ep:1,ga:1,nda:0.5,fr:-1} },
  { id:"r5", t:"retr", text:"Aucune retraite plus basse que le SMIC après une carrière complète.", pos:{fr:1,jlm:1,ruf:1,na:1} },
  { id:"r6", t:"retr", text:"Supprimer l'âge légal : chacun part quand il a assez cotisé, avec un bonus ou un malus.", pos:{ga:1} },

  // Santé
  { id:"s1", t:"sante", core:1, text:"Obliger les médecins à s'installer là où il en manque.", help:"Pour lutter contre les déserts médicaux. Aujourd'hui, les médecins choisissent librement où ils s'installent.", pos:{jlm:1,fr:1,dl:-1} },
  { id:"s2", t:"sante", text:"Que la Sécu rembourse 100 % des soins, sans besoin de mutuelle.", pos:{jlm:1,na:1,fr:0.5} },
  { id:"s3", t:"sante", text:"Former deux fois plus de médecins.", pos:{dl:1,ez:1,nda:1,fr:1} },
  { id:"s4", t:"sante", core:1, text:"Pour les étrangers sans papiers, ne soigner gratuitement que les urgences.", help:"Aujourd'hui, l'Aide médicale d'État (AME) leur donne accès à une partie des soins courants.", pos:{nda:1,dl:1,ez:1,jlm:-1} },
  { id:"s5", t:"sante", text:"Ne plus indemniser le premier jour d'un arrêt maladie court.", pos:{ep:1} },
  { id:"s6", t:"sante", text:"Supprimer les agences régionales de santé (ARS).", help:"Les ARS organisent les hôpitaux et l'accès aux soins dans chaque région.", pos:{dl:1,ez:1} },

  // École et jeunes
  { id:"d1", t:"edu", text:"Supprimer Parcoursup.", help:"La plateforme qui répartit les bacheliers dans les formations après le bac.", pos:{jlm:1,dl:1,nda:0.5} },
  { id:"d2", t:"edu", core:1, text:"Rendre l'uniforme obligatoire à l'école.", pos:{kb:1,mlp:1,ep:0.5} },
  { id:"d3", t:"edu", text:"Orienter les élèves plus tôt en mettant fin au collège unique.", help:"Aujourd'hui, tous les élèves suivent le même parcours jusqu'à la 3e.", pos:{br:1,ez:1,dl:1} },
  { id:"d4", t:"edu", core:1, text:"Laisser chaque famille choisir son école, publique ou privée, avec l'argent public qui suit l'élève.", help:"Cela met fin à la carte scolaire, qui affecte les élèves selon leur adresse.", pos:{dl:1,br:1,rg:-1} },
  { id:"d5", t:"edu", text:"Un service civil obligatoire de plusieurs mois pour tous les jeunes.", help:"Des missions utiles (écoles, Ehpad, services publics), pas un service militaire.", pos:{rg:1} },
  { id:"d6", t:"edu", core:1, text:"Interdire les réseaux sociaux aux moins de 15 ans.", pos:{ga:1} },
  { id:"d7", t:"edu", text:"Fac gratuite et un revenu versé à tous les étudiants.", pos:{jlm:1,fr:1} },
  { id:"d8", t:"edu", text:"Un examen à réussir en fin de CM2 pour entrer au collège.", pos:{ez:1,dl:1} },

  // Sécurité et justice
  { id:"c1", t:"secu", text:"Juger les mineurs comme des adultes dès 16 ans.", help:"C'est abaisser la majorité pénale, aujourd'hui fixée à 18 ans.", pos:{ez:1,nda:1,dl:1,xb:1} },
  { id:"c2", t:"secu", core:1, text:"Des peines minimales automatiques pour certains crimes et délits.", help:"Les « peines planchers » : le juge ne peut pas descendre en dessous.", pos:{ep:1,ez:1,mlp:1,xb:1,bc:-0.5,fr:-0.5} },
  { id:"c3", t:"secu", core:1, text:"Construire beaucoup plus de places de prison.", pos:{dl:1,nda:1,ez:1,mlp:1,fr:-1} },
  { id:"c4", t:"secu", core:1, text:"Remettre des policiers de quartier, proches des habitants.", help:"La police de proximité, supprimée en 2003.", pos:{jlm:1,bc:1,rg:1,mt:1,fr:1} },
  { id:"c5", t:"secu", text:"Supprimer les brigades anticriminalité (BAC) et interdire les LBD et les tasers.", help:"Le LBD est un lanceur de balles de défense, utilisé notamment en manifestation.", pos:{jlm:1} },
  { id:"c6", t:"secu", text:"Considérer par défaut qu'un policier qui tire était en légitime défense.", help:"La « présomption de légitime défense ».", pos:{nda:1,mlp:1} },
  { id:"c7", t:"secu", text:"Un « état d'urgence » contre le trafic de drogue, avec des pouvoirs exceptionnels.", pos:{br:1,ep:1} },
  { id:"c8", t:"secu", text:"Faire contrôler la police par une autorité vraiment indépendante.", help:"À la place de l'IGPN, la « police des polices », qui dépend du ministère de l'Intérieur.", pos:{jlm:1,fr:1} },

  // Immigration
  { id:"i1", t:"immi", core:1, text:"Supprimer le droit du sol.", help:"Aujourd'hui, un enfant né en France de parents étrangers devient Français à 18 ans s'il y a vécu au moins 5 ans.", pos:{br:1,mlp:1,ez:1,nda:1,dl:0.5,jlm:-1} },
  { id:"i2", t:"immi", core:1, text:"Donner des papiers aux travailleurs sans papiers qui ont un emploi.", help:"On parle de régularisation.", pos:{na:1,fr:1,jlm:1,mt:1,rg:1,mlp:-1,ep:-0.5,xb:-0.5} },
  { id:"i3", t:"immi", text:"Donner la priorité aux Français pour les logements sociaux et certaines aides.", help:"C'est la « priorité nationale », aussi appelée « préférence nationale ».", pos:{mlp:1,ez:1,br:0.5} },
  { id:"i4", t:"immi", core:1, text:"Faire venir beaucoup moins d'étrangers, même légalement.", pos:{dl:1,ep:1,br:1,mlp:1,ez:1,nda:1,ga:0.5,ruf:0.5,jlm:-1,na:-1,mt:-1} },
  { id:"i5", t:"immi", text:"Organiser un référendum sur l'immigration.", pos:{mlp:1,br:1,dl:1,nda:1} },
  { id:"i6", t:"immi", text:"Fixer chaque année un nombre maximum d'immigrés autorisés.", help:"Des quotas votés par le Parlement.", pos:{br:1,ga:1} },
  { id:"i7", t:"immi", text:"Laisser les étrangers voter aux élections municipales.", help:"Aujourd'hui, parmi les étrangers, seuls les citoyens européens le peuvent.", pos:{jlm:1} },
  { id:"i8", t:"immi", text:"Faire du séjour en France sans papiers un délit puni par la loi.", help:"Le « délit de séjour irrégulier », supprimé en 2012.", pos:{dl:1,nda:1} },

  // Écologie et énergie
  { id:"n1", t:"ecolo", core:1, text:"Sortir du nucléaire.", help:"Le nucléaire produit environ deux tiers de l'électricité française.", pos:{jlm:1,mt:1,fr:-1,ruf:-1,br:-1,dl:-1,nda:-1,mlp:-1,ez:-1,rg:-1,bc:-1,xb:-1} },
  { id:"n2", t:"ecolo", core:1, text:"Arrêter de financer l'éolien et le solaire avec de l'argent public.", pos:{br:1,nda:1,mlp:1,ez:1,xb:0.5,mt:-1,jlm:-1,rg:-1} },
  { id:"n3", t:"ecolo", core:1, text:"Interdire rapidement le glyphosate et les pesticides les plus contestés.", pos:{jlm:1,mt:1,kb:-0.5} },
  { id:"n4", t:"ecolo", text:"Retirer le principe de précaution de la Constitution.", help:"Il oblige à agir face à un risque pour l'environnement, même quand ce risque n'est pas encore prouvé.", pos:{br:1,dl:1} },
  { id:"n5", t:"ecolo", text:"Moins d'avions et des trains moins chers.", pos:{mt:1,ruf:1,rg:0.5} },
  { id:"n6", t:"ecolo", text:"Sortir du marché européen de l'électricité pour baisser les factures.", help:"Aujourd'hui, le prix de l'électricité en France dépend en partie des prix sur le marché européen.", pos:{nda:1,fr:1,ruf:1} },
  { id:"n7", t:"ecolo", text:"Louer des voitures électriques à petit prix aux ménages modestes.", help:"Le « leasing social ».", pos:{mt:1,ruf:1,fr:1} },

  // Europe et défense
  { id:"u1", t:"europe", core:1, text:"Quitter l'Union européenne, après un référendum.", help:"On parle de « Frexit ».", pos:{nda:1,dl:-1,ga:-1,rg:-1,mt:-1,bc:-1} },
  { id:"u2", t:"europe", text:"Que les lois françaises passent avant les règles européennes.", pos:{mlp:1,br:1,ez:1,dl:0.5} },
  { id:"u3", t:"europe", core:1, text:"Une Europe plus unie, qui décide davantage ensemble, sur le modèle d'un État fédéral.", pos:{rg:1,mt:1,ga:1,fr:-1,nda:-1,dl:-0.5} },
  { id:"u4", t:"europe", text:"Qu'un seul pays ne puisse plus bloquer une décision européenne.", help:"Supprimer le droit de veto et décider à la majorité.", pos:{rg:1,bc:1,ruf:-1} },
  { id:"u5", t:"europe", core:1, text:"Quitter le commandement militaire de l'OTAN.", help:"L'OTAN est l'alliance militaire entre les États-Unis, le Canada et une grande partie de l'Europe.", pos:{jlm:1,nda:1,ez:1,ep:-1,bc:-1} },
  { id:"u6", t:"europe", text:"Envoyer plus d'aide militaire à l'Ukraine.", pos:{rg:1,ep:1,nda:-1,mlp:-0.5,fr:-0.5} },
  { id:"u7", t:"europe", core:1, text:"Dépenser beaucoup plus pour l'armée.", pos:{br:1,ez:1,kb:1,bc:1,nda:1,na:-1,fr:-1} },
  { id:"u8", t:"europe", text:"Que la bombe nucléaire française protège aussi nos voisins européens.", help:"La France resterait seule à décider de l'utiliser.", pos:{rg:1,bc:0.5,br:-1} },
  { id:"u9", t:"europe", text:"Refuser l'accord de libre-échange entre l'Europe et l'Amérique du Sud (Mercosur).", pos:{nda:1,jlm:1} },

  // Démocratie
  { id:"t1", t:"inst", core:1, text:"Écrire une nouvelle Constitution (une VIe République).", pos:{jlm:1,mt:1,rg:0.5,bc:-1} },
  { id:"t2", t:"inst", core:1, text:"Que les citoyens puissent lancer eux-mêmes un référendum grâce à une pétition.", help:"Le RIC, référendum d'initiative citoyenne.", pos:{jlm:1,nda:1,ruf:1,fr:1,mlp:0.5,rg:0.5,dl:0.5,br:0.5} },
  { id:"t3", t:"inst", core:1, text:"Élire les députés à la proportionnelle.", help:"Chaque parti obtient un nombre de sièges proportionnel à ses voix.", pos:{jlm:1,fr:1,rg:1,mlp:0.5,bc:0.5} },
  { id:"t4", t:"inst", core:1, text:"Élire le président pour 7 ans au lieu de 5.", pos:{nda:1,dl:1,bc:1,xb:1} },
  { id:"t5", t:"inst", text:"Le droit de vote dès 16 ans.", pos:{jlm:1,rg:1} },
  { id:"t6", t:"inst", text:"Que le peuple puisse, par référendum, faire passer une loi refusée par le Conseil constitutionnel.", pos:{br:1,dl:1} },
  { id:"t7", t:"inst", text:"Supprimer le 49.3, qui permet au gouvernement de faire passer une loi sans vote des députés.", pos:{jlm:1,fr:1,rg:1,bc:0.5} },
  { id:"t8", t:"inst", text:"Empêcher quelques milliardaires de posséder trop de médias.", pos:{mt:1,bc:1} },
  { id:"t9", t:"inst", text:"Payer le président de la République au SMIC.", pos:{ruf:1} }
];

// Programmes résumés, présentés à l'aveugle (aucun nom, aucun parti)
window.ISO_PROGRAMMES = {
  na:  ["SMIC à 2 200 € net","Salaires et retraites qui suivent automatiquement les prix","Interdiction des licenciements","Les grandes entreprises (pétrole, armement) reprises à leurs actionnaires sans compensation","Des papiers pour tous les sans-papiers","Moins d'argent pour l'armée"],
  jlm: ["SMIC à 1 700 € net et prix bloqués sur l'essentiel","Retraite à 60 ans","Soins remboursés à 100 %","Sortie du nucléaire, 100 % d'énergies renouvelables en 2050","Nouvelle Constitution, référendum citoyen, vote à 16 ans","Sortie du commandement de l'OTAN"],
  fr:  ["SMIC à 1 700 € net et +5 % pour tous les salaires","Essence bloquée à 1,60 € le litre, électricité et gaz 30 % moins chers","L'État reprend le premier groupe pétrolier et une grande banque","Retraite à 60 ans, aucune pension sous le SMIC","Plus de nucléaire et plus d'énergies renouvelables","Retour de l'impôt sur la fortune"],
  ruf: ["SMIC à 1 700 € net et prime de 1 000 € sans impôt","Heures travaillées tôt le matin ou tard le soir payées double","Loyers encadrés partout et un million de logements pas chers","Retraite à 60 ans","Plus de nucléaire et une électricité 100 % publique","Contre le recrutement de travailleurs à l'étranger"],
  mt:  ["Salaire minimum à 2 000 € brut","Sortie du nucléaire, 100 % d'énergies renouvelables","Impôt sur la fortune « climatique » et taxe sur les héritages de plus de 4 millions","Retour de la retraite à 62 ans","Des papiers pour les travailleurs sans papiers","Nouvelle Constitution et loi contre le mensonge en politique"],
  rg:  ["Salaire net augmenté grâce à une taxe sur les héritages de plus de 2 millions","SMIC à 1 600 € net","Fin de la réforme de 2023, âge de départ selon la pénibilité du métier","Une Europe plus unie, avec une défense commune","Députés élus à la proportionnelle, vote à 16 ans","Service civil obligatoire de 10 mois pour les jeunes"],
  kb:  ["100 milliards d'euros pour construire des logements","Lutte contre les déserts médicaux","Uniforme et hymne national à l'école","Protéger les enfants et les femmes des violences, en grande cause nationale","Plus de moyens pour l'armée","Juge la retraite à 60 ans impossible à financer"],
  bc:  ["Un plan sur 10 ans pour faire revenir les usines","Retraites : cotiser un peu plus longtemps plutôt que reculer l'âge","La santé mentale en grande cause nationale","Police de quartier et unités spéciales contre le trafic de drogue","Un président élu pour 7 ans","Rester dans l'OTAN, une Europe où un seul pays ne bloque plus tout"],
  ga:  ["Plus d'âge légal de retraite : on part selon ses années de cotisation","150 milliards d'économies et 100 000 fonctionnaires en moins","Profs augmentés de 200 à 500 € par mois","Réseaux sociaux interdits avant 15 ans, par référendum","Moins d'immigration, avec des quotas","Des « États-Unis d'Europe » avec quelques pays volontaires"],
  ep:  ["Retraite à 65 ans","Aucune hausse d'impôts, baisse des dépenses","Chômage indemnisé 12 mois maximum avant 50 ans","350 € d'allocations familiales par mois dès le premier enfant","Peines minimales automatiques et plan contre le trafic de drogue","Profs augmentés de 20 %"],
  xb:  ["20 milliards d'économies par an, sans nouvel impôt","Âge de retraite repoussé, avec une épargne retraite obligatoire","Un seul mandat, puis un mandat unique de 7 ans","Plus de pouvoir aux maires","Demandes d'asile traitées en 15 jours aux frontières de l'Europe","Priorité aux classes moyennes et au logement"],
  br:  ["Retraite : départ possible à 63 ans, taux plein à 65 ans","197 milliards d'économies, 400 000 fonctionnaires non remplacés","Fin du droit du sol et référendum sur l'immigration","État d'urgence contre le trafic de drogue","Plus de nucléaire, fin des aides à l'éolien","Liberté de choisir son école, baisse des impôts sur l'héritage"],
  dl:  ["Environ 400 € net de plus par mois grâce à moins de charges","200 milliards d'économies, suppression d'agences de l'État","Une épargne retraite obligatoire en plus du système actuel","Huit fois moins de titres de séjour délivrés","Liberté de choisir son école, publique ou privée","20 000 places de prison, mineurs jugés comme des adultes dès 16 ans"],
  nda: ["Sortir de l'Union européenne par référendum","Taxer les produits étrangers pour relocaliser 2 millions d'emplois","Essence moins chère de 40 centimes","Retraite à 62 ans et 9 mois","Fin de la libre circulation en Europe et fin du droit du sol","Fin de l'aide à l'Ukraine"],
  mlp: ["Retour de la retraite à 62 ans, 60 ans si on a commencé à travailler tôt","Référendum sur l'immigration et priorité aux Français","Logement social et APL réservés aux Français","140 milliards d'économies et 30 milliards de baisses d'impôts","Plus de nucléaire, fin des aides à l'éolien et au solaire","Moins d'aide financière à l'Ukraine"],
  ez:  ["Un étranger en règle devrait quitter la France après un an de chômage","Retraite à 64 ou 65 ans","Heures supplémentaires sans impôt ni charges","Un examen d'entrée en 6e","14 nouveaux réacteurs nucléaires, plus de nouvelles éoliennes","Mineurs jugés comme des adultes dès 16 ans"]
};
