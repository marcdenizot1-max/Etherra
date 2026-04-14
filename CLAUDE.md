# Etherra – Contexte projet pour Claude

## Présentation
Etherra est une plateforme web permettant de découvrir, rechercher et réserver des intervenants
(conférenciers, animateurs d'ateliers, participants à des tables rondes, etc.) autour de différentes thématiques.

## Lancer le projet
```bash
npm run dev   # Démarre sur un port dynamique (affiché dans le terminal)
```

## Structure des fichiers
```
index.html        ← Page d'accueil (hero + recherche + grille intervenants)
profil.html       ← Page profil d'un intervenant (template)
reservation.html  ← Formulaire de demande de réservation
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
- Drawer `#mobile-menu` : glisse depuis la droite, contient les 4 liens + icônes sociales en bas
- Overlay `#mobile-overlay` : fond sombre cliquable pour fermer
- Le scroll du body est bloqué pendant l'ouverture (`overflow: hidden`)
- Fermeture : clic overlay, clic lien, reclic hamburger

## Responsive
- Breakpoint tablette : `900px` (barre de recherche en colonne, steps en colonne)
- Breakpoint mobile : `600px` (hamburger visible, `.hide-mobile` masqué)

## Cahier des charges (fonctionnel)

### Page d'accueil (`index.html`)
- Barre de recherche multi-critères : thématique/nom, ville, format d'intervention
- Filtrage JS côté client (fonction `rechercherIntervenants()`)
- Liste des intervenants en grille, **triés alphabétiquement**
- Section "Comment ça marche" (3 étapes)
- Bannière CTA pour intervenants souhaitant rejoindre la plateforme
- Footer avec liens LinkedIn et Instagram

### Page profil (`profil.html`)
- Photo grand format
- Nom, sous-titre, villes de déplacement, langues, formats
- Tags thématiques
- Description et sujets d'intervention détaillés
- Sidebar sticky : tarif, disponibilités mois par mois, bouton Réserver
- Lien vers `reservation.html`

### Page réservation (`reservation.html`)
Formulaire avec :
- Nom / Organisation
- Email
- Intervenant souhaité (pré-rempli depuis URL `?intervenant=Nom`)
- Type d'événement (select)
- Date ou période souhaitée
- Description de l'événement (obligatoire)
- Informations complémentaires
- Validation côté client + message de confirmation animé

## Données intervenants
Définis en JS dans `index.html` (tableau `intervenants[]`).
Chaque objet : `id`, `nom`, `photo`, `tags[]`, `type`, `ville`.
→ À terme : remplacer par un appel API ou fichier JSON externe.

## Types d'événements supportés
- `conference` – Conférence
- `atelier` – Atelier pratique
- `table-ronde` – Table ronde
- `evenement` – Événement spécial

## À faire / évolutions prévues
- Remplacer les photos placeholder Unsplash par les vraies photos des intervenants
- Ajouter les vrais textes de présentation Etherra (hero, about, etc.)
- Renseigner les vrais liens LinkedIn et Instagram dans header et footer
- Créer une page profil dynamique (depuis URL `?id=X`) ou une page par intervenant
- Connecter le formulaire de réservation à un backend ou service email (Formspree, EmailJS, etc.)
- Ajouter d'autres intervenants dans le tableau JS de `index.html`
- Appliquer le menu hamburger sur `profil.html` et `reservation.html`
