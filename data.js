/* ================================================
   DONNÉES DES INTERVENANTS – Etherra
   ================================================ */
const intervenants = [
    {
        id: 10,
        nom: "Anthony Viaux",
        photo: "AnthonyViaux.webp",
        photoPosition: "center 5%",
        tags: ["Climat", "Transport", "Aviation"],
        type: "conference",
        ville: "Paris",
        zones: [
            "Île-de-France", "Hauts-de-France", "Grand-Est", "Normandie",
            "Bretagne", "Centre-Val-de-Loire", "Pays de la Loire",
            "Bourgogne-Franche-Comté", "Nouvelle-Aquitaine",
            "Auvergne-Rhône-Alpes", "Occitanie", "Provence-Alpes-Côte d'Azur"
        ],
        distanciel: false,
        domaines: "Climat, Transport, Lien entre aviation et dérèglements climatiques",
        publicVise: "Tout public",
        niveauInterventions: "Tout niveau",
        formatsProposés: "Conférences",
        duree: "1h ou 2h",
        description: "Rencontres-débat autour de la problématique de l'impact climatique de l'aviation, et du futur du voyage en avion.",
        tarif: "Pas de rémunération – défraiement du transport si possible, hébergement chez l'habitant si possible."
    },
    {
        id: 11,
        nom: "Dominique Bidou",
        photo: "dominiquebidou.jpg",
        photoPosition: "center 10%",
        tags: ["Climat", "Développement durable", "Énergie"],
        type: "conference",
        ville: "Paris",
        zones: [
            "Île-de-France", "Hauts-de-France", "Grand-Est", "Normandie",
            "Bretagne", "Centre-Val-de-Loire", "Pays de la Loire",
            "Bourgogne-Franche-Comté", "Nouvelle-Aquitaine",
            "Auvergne-Rhône-Alpes", "Occitanie", "Provence-Alpes-Côte d'Azur"
        ],
        distanciel: false,
        domaines: "Climat, Énergie, Bâtiment, Alimentation, Politique, Économie, Ville, Développement durable, Approches transversales, Communication sur le développement durable",
        publicVise: "Tout public",
        niveauInterventions: "Intermédiaire, Avancé",
        formatsProposés: "Conférences, Formations",
        duree: "1h (durée adaptable)",
        description: "Conférences et formations couvrant de manière transversale les grandes thématiques du développement durable : climat, énergie, bâtiment, alimentation, politique, économie et ville.",
        tarif: "Zéro pour la prestation + frais engendrés le cas échéant."
    },
    {
        id: 12,
        nom: "Clément Le Dizès",
        photo: "clementledizes.png",
        photoPosition: "center 20%",
        tags: ["Biodiversité", "Agroécologie", "Alimentation"],
        type: "conference",
        ville: "Annecy",
        zones: [
            "Île-de-France", "Grand-Est",
            "Auvergne-Rhône-Alpes", "Provence-Alpes-Côte d'Azur"
        ],
        distanciel: true,
        domaines: "Biodiversité, Résilience climatique, Alimentation",
        publicVise: "Tout public, Étudiants, Entreprises, Scolaire",
        niveauInterventions: "Tout niveau",
        formatsProposés: "Conférences, Formations",
        duree: "2h",
        description: "« Semer l'agroécologie, essaimer le changement »\n\nL'agriculture est à un tournant décisif. Face aux crises écologiques et sociales, le modèle conventionnel montre ses limites. Notre système alimentaire actuel met en péril le monde vivant et compromet l'avenir de notre alimentation.\n\nPourtant, une révolution silencieuse est en marche ! Des acteurs engagés repensent notre façon de produire et de consommer, en créant des systèmes agricoles robustes, durables et respectueux du vivant.\n\nVenez découvrir des solutions concrètes qui dépassent les obstacles et tracent la voie vers un avenir agricole juste, pérenne et joyeux… Le changement est déjà en marche… et vous ?",
        tarif: "Très variable"
    },
    {
        id: 13,
        nom: "Philippe Mistral",
        photo: "PhilippeMistral.jpg",
        photoPosition: "center 20%",
        tags: ["Climat", "Biodiversité", "Expéditions"],
        type: "conference",
        ville: "Eyragues",
        zones: [
            "Île-de-France", "Hauts-de-France", "Grand-Est", "Normandie",
            "Bretagne", "Centre-Val-de-Loire", "Pays de la Loire",
            "Bourgogne-Franche-Comté", "Nouvelle-Aquitaine",
            "Auvergne-Rhône-Alpes", "Occitanie", "Provence-Alpes-Côte d'Azur",
            "Corse", "Mayotte", "Martinique", "Guadeloupe", "Réunion", "Guyane"
        ],
        distanciel: true,
        domaines: "Climat, Biodiversité, Psychologie et retour d'expérience en expédition",
        publicVise: "Tout public",
        niveauInterventions: "Tout niveau",
        formatsProposés: "Conférences, Projection-conférence/débat",
        duree: "1h ou 2h",
        description: "Projection-conférence :\nÉvadez-vous l'espace d'un documentaire d'expédition dans une destination reculée, paradisiaque mais fragile. Sensibilisez-vous ensuite le temps d'un échange-conférence aux enjeux actuels, aux menaces qui pèsent sur notre monde, le rendant ainsi d'autant plus précieux.\n\nEstimer votre bilan carbone individuel :\nDécouvrons ce que représente notre coût carbone au quotidien. Apprenons à reconnaître les bons ordres de grandeur, à mesurer notre impact individuel et saisissons nos propres leviers d'actions pour rester dans le cadre des accords de Paris.\n\nL'écologie en s'inspirant des autres sociétés :\nAppréhender les problématiques écologiques aujourd'hui est un véritable casse-tête. Nous butons quotidiennement entre des sentiments d'insuffisance ou d'incompétence, voire de solitude, de rejet. Pourtant en France nous sommes parmi les plus capables pour résoudre ces problèmes socio-environnementaux. Débloquons certains verrous psychologiques et abordons ce sujet de l'écologie sous un prisme autre que journalistique.",
        tarif: "1 950 € – Micro-entreprise non soumise à TVA. Défraiement en supplément pour les déplacements."
    }
];
