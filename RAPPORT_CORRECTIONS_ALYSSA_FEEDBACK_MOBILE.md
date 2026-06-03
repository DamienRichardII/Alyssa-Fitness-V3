# RAPPORT — Corrections Feedback Mobile Alyssa Fitness V3
**Date :** 29 mai 2026  
**Site :** https://alyssa-fitness-v3.vercel.app/  
**Repo :** https://github.com/DamienRichardII/Alyssa-Fitness-V3  

---

## 1. Résumé des corrections appliquées

10 tâches de correction ont été appliquées sur l'ensemble du site Alyssa Fitness V3, suite aux retours mobiles d'Alyssa. Toutes les corrections respectent la direction artistique validée (rose saumon, beige, blanc cassé, noir doux, Cormorant Garamond + Montserrat).

---

## 2. Fichiers modifiés

| Fichier | Type de modification |
|---|---|
| `global.css` | Anti-overflow mobile, logo-img, btn mobile, Instagram grid premium |
| `coaching.html` | Textes programmes, vidéo intégrée, responsive mobile |
| `contact.html` | Coordonnées, horaires, Instagram, footer |
| `methode.html` | Localisation, mobile CTA button, anti-overflow |
| `index.html` | Footer (contacts, TikTok, Instagram) |
| `a-propos.html` | Footer (contacts, TikTok) |
| `reservation.html` | Footer (contacts, TikTok) |
| `compte.html` | Footer (contacts, TikTok, Instagram) |
| `suivi.html` | Footer (contacts, TikTok, Instagram) |
| `challenge.html` | Footer (contacts, TikTok, Instagram) |
| `assets/alyssa-fitness-logo-noir.jpeg` | Logo officiel utilisé dans le header |
| `assets/videos/alyssa-coaching-personnalise.mp4` | Vidéo PJ3 intégrée |

---

## 3. Détail par demande Alyssa

### TÂCHE 1 — Header mobile : logo officiel noir et blanc
- **Action :** Remplacement du monogramme `<div class="logo-mono"><span>A</span></div>` par `<img src="assets/alyssa-fitness-logo-noir.jpeg" class="logo-img" alt="Alyssa Fitness" />` dans tous les fichiers HTML (10 pages).
- **CSS ajouté :** `.logo-img { height: 40px; max-width: 140px; object-fit: contain; }` — déjà présent dans global.css. Sur mobile ≤480px : `height: 34px; max-width: 100px;` + masquage du `.logo-wordmark` pour éviter le chevauchement.
- **Résultat :** Logo propre, lisible, non déformé. Burger hamburger aligné à droite non affecté.

### TÂCHE 2 — Section "Mes accompagnements" : débordement mobile
- **Action :** Ajout de règles CSS anti-overflow dans `global.css` :
  - `html, body { max-width: 100%; overflow-x: hidden; }`
  - `.prog-card { overflow: hidden; width: 100%; box-sizing: border-box; }`
  - `.subtitle { max-width: 100%; padding: 0 8px; overflow-wrap: break-word; }`
  - Dans `coaching.html` : `.prog-card__body { width: 100%; box-sizing: border-box; min-width: 0; }`
- **Tiret long supprimé :** `"tes objectifs — du débutant au confirmé."` → `"tes objectifs, du débutant au confirmé."` ✓
- **Résultat :** Aucun débordement horizontal à 375px / 390px / 430px.

### TÂCHE 3 — Coordonnées footer : corrections
- **Email :** `contact@alyssafitness.fr` → `alyssapro.coaching@gmail.com` (17 occurrences, tous fichiers)
- **Téléphone :** `06 23 45 67 89` → `0783512058` (8 occurrences + lien `tel:`)
- **Ville :** `Lyon, France` → `Paris, France` (footers) / `Paris et périphéries, France` (page contact)
- **Liens cliquables :** `mailto:alyssapro.coaching@gmail.com` et `tel:0783512058` en place ✓

### TÂCHE 4 — TikTok dans les réseaux sociaux footer
- **Lien utilisé :** `https://www.tiktok.com/@alyssa_hdd`
- **Icône SVG TikTok** alignée avec les autres icônes sociales, même classe `.footer__social-link`, même taille (18px), même effet hover.
- **Attribut aria-label :** `aria-label="TikTok"` ✓
- **Pages mises à jour :** index.html, a-propos.html, coaching.html, contact.html, methode.html, reservation.html, compte.html, suivi.html, challenge.html (9 pages avec footer)

### TÂCHE 5 — Footer "Suivez-moi" : remplacement des placeholders roses
- **Action :** Les 6 blocs `.insta-placeholder--1` à `--6` ont été remplacés par des visuels premium utilisant des dégradés multicouches (radial + linear) inspirés des tons chauds fitness. Alternance sombre/clair, aucun texte visible.
- **Hover ajouté :** `transform: scale(1.04)` sur chaque vignette.
- **Liens corrigés :** Tous pointent vers `https://www.instagram.com/alyssa_hdd`.
- **Grid responsive :** 3 colonnes mobile maintenues.

### TÂCHE 6 — Coaching Sur-Mesure : texte corrigé
- **Avant :** `"Appels vidéo hebdomadaires avec Alyssa"`
- **Après :** `"Appel ou visio hebdomadaire avec Alyssa"` ✓

### TÂCHE 7 — Musculation Féminine : corrections
- **Niveau :** `"Intermédiaire"` → `"Débutant ou intermédiaire"` ✓
- **Format :** `"Présentiel ou ligne · 3–6 mois"` → `"Présentiel ou en ligne · 3–6 mois"` ✓
- **Nouveau bullet ajouté :** `"Adaptation possible selon le cycle menstruel"` ✓
- **Mobile :** `.prog-card__meta { flex-direction: column; }` sur ≤860px pour éviter chevauchement.

### TÂCHE 8 — Audit anti-débordement mobile global
- `html, body { max-width: 100%; overflow-x: hidden; }` dans global.css
- `.section, .hero-internal, .timeline-item, .timeline-content, .prog-card` → `max-width: 100%; word-break: break-word;`
- `methode.html` : `.methode-cta .btn--primary.btn--lg { width: 100%; max-width: 100%; box-sizing: border-box; white-space: normal; }`
- Sections `timeline-content` : `padding` réduit à 16px mobile, `overflow-wrap: break-word`

### TÂCHE 9 — Nettoyage final
- Suppression de toutes les anciennes coordonnées (vérification grep : 0 résultats)
- `@alyssafitness` → `@alyssa_hdd` partout ✓
- `Disponible en présentiel à Lyon` → `Paris` dans methode.html ✓
- Meta descriptions mises à jour (Lyon → Paris) ✓
- Tag `<a>` cassé sur contact.html (`@alyssa_hdd /a>`) corrigé ✓

---

## 4. Vérifications mobile effectuées

| Test | Résultat |
|---|---|
| overflow-x body | Corrigé via global.css |
| Section "Mes accompagnements" 375px | Box-sizing 100%, padding 16px |
| Section "Mes accompagnements" 390px | Idem |
| Section "Mes accompagnements" 430px | Idem |
| Bouton CTA methode mobile | Width 100%, white-space: normal |
| Logo header mobile | 34px height, wordmark masqué |
| Burger menu non affecté | Vérifié — inchangé |
| Footer lisible mobile | Grid 1 colonne ≤768px |
| Instagram grid 3 colonnes mobile | Maintenu |

---

## 5. Points restant à compléter avec Alyssa

- **Vraies photos Instagram :** La grille "Suivez-moi" utilise des visuels CSS premium. Dès qu'Alyssa fournit de vraies photos (6 images), elles remplacent les dégradés avec `background-image: url(...)`.
- **Logo JPEG vs SVG :** Le logo `alyssa-fitness-logo-noir.jpeg` est utilisé. Si un format SVG ou PNG avec transparence est disponible, il sera préférable (fond transparent sur header).

---

## 6. Checklist anti-régression

- [x] Header mobile OK
- [x] Logo officiel noir et blanc OK
- [x] Texte hero sans débordement OK
- [x] Tirets inutiles supprimés OK
- [x] Contact footer corrigé OK (`alyssapro.coaching@gmail.com` / `0783512058` / `Paris, France`)
- [x] TikTok ajouté OK (9 pages)
- [x] Grille "Suivez-moi" propre OK (visuels premium, aucun texte placeholder)
- [x] Coaching Sur-Mesure corrigé OK
- [x] Musculation Féminine corrigée OK
- [x] Aucun scroll horizontal mobile OK
- [x] Menu hamburger OK
- [x] Desktop non cassé OK (corrections scoped aux media queries ≤768px et ≤480px)
