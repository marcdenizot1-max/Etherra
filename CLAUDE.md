# Etherra – Contexte projet pour Claude

## Présentation
Etherra est une plateforme web permettant de découvrir, rechercher et réserver des intervenants
(conférenciers, animateurs d'ateliers, participants à des tables rondes, etc.) autour de différentes thématiques.

## Déploiement
- **Production** : https://etherra-lake.vercel.app
- **Plateforme** : Vercel (projet `etherra`, scope `helios-projects-aec02ac6`)
- **Commande de déploiement** : `vercel --prod` depuis `/Users/marc/DEV/Etherra`

## Lancer le projet en local
```bash
npm run dev   # Démarre sur le port 3000
```

## Structure des fichiers
```
index.html        ← Page d'accueil (hero + recherche + grille intervenants)
profil.html       ← Page profil dynamique — chargée via ?id=X
reservation.html  ← Formulaire de demande de réservation
data.js           ← SOURCE UNIQUE des données intervenants (tableau intervenants[])
style.css         ← Feuille de style partagée (toutes les pages)
fond.png          ← Image de fond ardoise réelle (utilisée dans .hero et .intervenants-section)
package.json      ← Scripts npm (serve statique)
IMG_3507.JPG      ← Photo de référence du logo officiel Etherra (NE PAS utiliser comme image dans le site)
etherra1.png      ← Logo PNG sans fond (référence visuelle uniquement, NE PAS utiliser comme image dans le site)
etherra-icon.png  ← Icône seule (globe + feuilles, sans texte) — utilisée dans header
design*.html      ← Fichiers de maquettes initiales (à ne pas modifier)
```

## Charte graphique
| Élément         | Valeur               |
|-----------------|----------------------|
| Fond principal  | `#121519`            |
| Fond cartes     | `#1d2229`            |
| Fond hover      | `#232931`            |
| Vert accent     | `#8eb486`            |
| Vert hover      | `#72966a`            |
| Texte blanc     | `#f4f6f8`            |
| Texte gris      | `#a4b0be`            |
| Bordure         | `rgba(255,255,255,0.07)` |
| Police texte    | Inter (Google Fonts) |
| Police logo     | **Great Vibes** (Google Fonts) — police cursive calligraphique |
| Icônes          | Font Awesome 6.4     |

Style : dark mode, épuré, professionnel. Ardoise sombre + vert naturel inspiré du logo.

## Nom "Etherra" — règle importante
Le nom **Etherra** s'affiche uniquement en texte CSS avec la police **Great Vibes** :
- **Header** (en haut à gauche) : taille 38px, couleur `#f0ede6`, halo vert subtil
- **Footer** (en bas à gauche) : taille 46px, même style
- **NE JAMAIS** intégrer IMG_3507.JPG ou etherra1.png comme `<img>` dans les pages

## Fond ardoise
- Le hero (`.hero`) et la section intervenants (`.intervenants-section`) utilisent `fond.png` en `background-size: cover`
- `.intervenants-section` a `background-attachment: fixed` pour un effet parallaxe au scroll
- Le `body` garde un fond sombre de base `#14171b` avec un léger grain SVG (`body::before`) pour les autres sections

## Animations
### Au chargement (hero)
Les éléments du hero s'animent avec `fadeInUp` en cascade via CSS :
- `.hero-text` → 0s
- `.hero-tagline` → 0.15s
- `.hero p.description` → 0.28s
- `.search-container` → 0.42s
- `header` → `slideInLeft` 0s

### Au scroll (IntersectionObserver — JS dans `index.html`)
La classe `.reveal` est ajoutée aux éléments au montage, `.visible` est ajoutée à l'entrée dans le viewport.
- `.section-header` → fadeInUp
- `.step` → cascade (délai 0.12s entre chaque)
- `.cta-section h2, p, .btn-cta` → cascade (délai 0.1s)
- `.card` → cascade (délai 0.07s), rechargées après chaque recherche via `revealCards()`

## Menu hamburger mobile (< 600px)
- Bouton `#hamburger` : 3 tirets → croix animée à l'ouverture
- Drawer `#mobile-menu` : glisse depuis la droite, contient les liens + icônes sociales en bas
- Overlay `#mobile-overlay` : fond sombre cliquable pour fermer
- Le scroll du body est bloqué pendant l'ouverture (`overflow: hidden`)
- Fermeture : clic overlay, clic lien, reclic hamburger
- **Tous les liens de nav ont `.hide-mobile`** — en mobile seul le hamburger est visible dans le header
- L'overlay a `pointer-events: none` par défaut et `pointer-events: auto` uniquement avec `.visible`
- Le hamburger est présent sur `index.html` et `profil.html`

## Responsive
- Breakpoint tablette : `900px` (barre de recherche en colonne, steps en colonne)
- Breakpoint mobile : `600px` (hamburger visible, `.hide-mobile` masqué)

## Cahier des charges (fonctionnel)

### Page d'accueil (`index.html`)
- Charge les données depuis `data.js` (balise `<script src="data.js">` avant le script principal)
- Barre de recherche multi-critères : thématique/nom, ville/région, format d'intervention
- Filtrage JS côté client (`rechercherIntervenants()`) — cherche dans `nom`, `tags`, `domaines`, `ville` et `zones`
- Liste des intervenants en grille, **triés alphabétiquement**
- Section "Comment ça marche" (3 étapes)
- Bannière CTA pour intervenants souhaitant rejoindre la plateforme

### Page profil (`profil.html`)
- **Entièrement dynamique** : lit `?id=X` dans l'URL, charge l'intervenant depuis `intervenants[]` (data.js), redirige vers `index.html` si ID inconnu
- Affiche : photo, nom, zones d'interventions, distanciel oui/non, public visé, niveau, formats proposés, durée, domaines (tags), description, tarif indicatif
- Sidebar : tarif + bouton Réserver (lien vers `reservation.html?intervenant=Nom`)
- Photo avec fallback `onerror` vers une image générique si Google Drive inaccessible
- Hamburger mobile présent

### Page réservation (`reservation.html`)
- Champs : Nom/Organisation, Email, Intervenant (pré-rempli depuis `?intervenant=Nom`), Type d'événement, Date, Description (obligatoire), Informations complémentaires
- Validation côté client + message de confirmation animé
- **Envoi email : non encore connecté** — à brancher sur Formspree (voir section À faire)

## Données intervenants (`data.js`)
Fichier source unique, inclus dans `index.html` et `profil.html`.

### Structure d'un objet intervenant
```javascript
{
    id: Number,                // identifiant unique
    nom: String,               // "Prénom Nom" — utilisé pour l'affichage et le tri alphabétique
    photo: String,             // URL (Google Drive : https://drive.google.com/uc?export=view&id=FILE_ID)
    tags: String[],            // tags courts pour les cartes et la recherche
    type: String,              // "conference" | "atelier" | "table-ronde" | "evenement"
    ville: String,             // ville principale (utilisée dans la recherche)

    // Champs profil complet (intervenants réels) :
    zones: String[],           // régions d'intervention (ex: ["Île-de-France", "Bretagne", ...])
    distanciel: Boolean,       // true = distanciel possible
    domaines: String,          // liste séparée par virgules
    publicVise: String,        // "Tout public", "Étudiants, Entreprises", etc.
    niveauInterventions: String,
    formatsProposés: String,   // "Conférences, Formations", etc.
    duree: String,             // "1h ou 2h", "2h", etc.
    description: String,       // texte libre, \n\n = saut de paragraphe, \n = retour à la ligne
    tarif: String              // texte libre
}
```

### Intervenants actuels
| ID | Nom | Domaines | Ville |
|----|-----|----------|-------|
| 10 | Anthony Viaux | Climat, Transport, Aviation | Paris |
| 11 | Dominique Bidou | Climat, Énergie, Développement durable | Paris |
| 12 | Clément Le Dizès | Biodiversité, Agroécologie, Alimentation | Annecy |
| 13 | Philippe Mistral | Climat, Biodiversité, Expéditions | Eyragues |

Photos hébergées sur Google Drive (liens publics `uc?export=view`).

### Règle données personnelles
Ne jamais inclure dans `data.js` : email, téléphone, LinkedIn personnel. Seuls les champs listés ci-dessus sont autorisés.

### Logique d'affichage des zones dans `profil.html`
- Toutes les régions continentales + Corse + DOM-TOM → "France entière + [DOM-TOM]"
- Toutes les régions continentales + Corse → "France entière"
- Toutes les régions continentales (sans Corse) → "France métropolitaine (hors Corse)"
- Sinon → liste des zones séparées par ", "

## Types d'événements supportés
- `conference` – Conférence
- `atelier` – Atelier pratique
- `table-ronde` – Table ronde
- `evenement` – Événement spécial

## À faire / évolutions prévues
- **Connecter le formulaire de réservation à Formspree** : créer un formulaire sur formspree.io ciblant raphael.hrz22@gmail.com, récupérer l'ID (`xabcdefg`), remplacer la simulation `setTimeout` dans `reservation.html` par un `fetch('https://formspree.io/f/ID', { method: 'POST', ... })`
- Renseigner les vrais liens LinkedIn et Instagram dans header et footer
- Ajouter les nouveaux intervenants dans `data.js` au fur et à mesure des inscriptions
- Ajouter le menu hamburger sur `reservation.html`
