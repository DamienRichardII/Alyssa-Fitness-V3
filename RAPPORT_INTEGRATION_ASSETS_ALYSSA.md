# RAPPORT — Intégration des assets photos & vidéos
**Date :** 30 juillet 2026  
**Site :** https://alyssa-fitness-v3.vercel.app/  
**Repo :** https://github.com/DamienRichardII/Alyssa-Fitness-V3  
**Fichiers modifiés :** `index.html`, `coaching.html`, `global.css`  
**Statut :** Prêt — sans commit automatique

---

## 1. Résumé

12 tâches réalisées : organisation des assets, optimisation WebP, intégration sur 3 fichiers. Tous les placeholders gradient visibles ont été remplacés par de vraies photos d'Alyssa.

---

## 2. T1 — Audit et organisation des assets

### Arborescence créée

```
assets/
├── images/
│   └── alyssa/
│       ├── alyssa-energy-cycle.webp      (68K  — 735×698)
│       ├── alyssa-rope-training.webp     (68K  — 1600×1066)
│       ├── alyssa-dumbbell-press.webp    (44K  — 1200×1800)
│       ├── alyssa-treadmill.webp         (72K  — 1170×2098)
│       ├── alyssa-squat-rack.webp        (216K — 1200×1600)
│       └── alyssa-squat-gym.webp         (208K — 1200×1600)
└── videos/
    ├── alyssa-video-hero.mov             (2.7M — modal vidéo hero)
    └── alyssa-coaching-sur-mesure.mov    (3.5M — vidéo carte Programme 01)
```

### Optimisation Python (Pillow)

- Conversion JPEG → WebP avec qualité 82
- Correction automatique de l'orientation EXIF (`ImageOps.exif_transpose()`) — nécessaire pour IMG_5183 et IMG_5184 qui étaient sauvegardés en paysage pivoté
- Réduction moyenne : **−95%** (ex. alyssa-rope-training : 2638K → 68K)

---

## 3. T2-T3 — Hero `index.html`

### Background hero

| Avant | Après |
|---|---|
| `<div class="hero__img-placeholder">` avec gradient beige/rose | `<img class="hero__img-placeholder" src="…/alyssa-rope-training.webp">` |

- `loading="eager"` + `fetchpriority="high"` pour le LCP
- CSS : gradient supprimé, remplacé par `object-fit: cover; object-position: center top`

### Coach photo

| Avant | Après |
|---|---|
| `<div class="hero__coach-photo">` vide avec gradient beige/rose | Même div + `<img src="…/alyssa-squat-rack.webp">` à l'intérieur |

- CSS gradient `background` supprimé sur `.hero__coach-photo`
- `.hero__coach-photo img { width:100%; height:100%; object-fit:cover; object-position:center top; }`
- Forme arrondie (border-radius 280px) conservée — l'image se découpe dans la forme
- `aria-hidden="true"` maintenu (décoratif)

### Vidéo modal

| Avant | Après |
|---|---|
| `alyssa-coaching-personnalise.mp4` (11.3M, provisoire) | `alyssa-video-hero.mov` (2.7M — fichier le plus léger) |

- Commentaire `<!-- TODO: remplacer par la vidéo officielle d'Alyssa -->` supprimé

---

## 4. T4-T6 — `coaching.html` : cartes programmes + vidéo

### CSS `.prog-card__img-inner`

- Gradients `--muscu`, `--transfo`, `--remise`, `--perso` supprimés
- CSS unifié : `object-fit: cover; object-position: center top; display: block;`

### Remplacement des visuels

| Programme | Avant | Après |
|---|---|---|
| 01 — Sur-mesure (vidéo loop) | `alyssa-coaching-personnalise.mp4` | `alyssa-coaching-sur-mesure.mov` (3.5M) |
| 02 — Galbe & Musculation | gradient `--muscu` | `alyssa-dumbbell-press.webp` (portrait 1200×1800) |
| 03 — Sèche | gradient `--transfo` | `alyssa-treadmill.webp` (portrait 1170×2098) |
| 04 — Remise en forme | gradient `--remise` | `alyssa-squat-gym.webp` (portrait 1200×1600) |

### Spécialités `index.html` — T5-T6

Ajout d'un bloc `.specialite-card__photo` en header visuel sur 2 des 3 cartes :

| Carte | Photo ajoutée |
|---|---|
| Entraîne-toi selon ton cycle | `alyssa-energy-cycle.webp` + overlay rose saumon subtil |
| Sculpte sans t'épuiser | `alyssa-squat-gym.webp` |

**CSS ajouté dans `index.html` :**
```css
.specialite-card__photo {
  margin: -32px -26px 24px;   /* casse le padding de la card */
  height: 180px;
  overflow: hidden;
  border-radius: var(--radius-md) var(--radius-md) 0 0;
}
.specialite-card__photo img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center top;
}
.specialite-card__photo::after {
  /* overlay rose saumon en bas de la photo */
  background: linear-gradient(180deg, transparent 45%, rgba(233,135,128,0.18) 100%);
}
```

---

## 5. T7-T10 — Footer grille "Suivez-moi"

6 vrais `<img>` en remplacement des 6 divs gradient.

| Position | Photo |
|---|---|
| 1 | `alyssa-squat-rack.webp` |
| 2 | `alyssa-rope-training.webp` |
| 3 | `alyssa-dumbbell-press.webp` |
| 4 | `alyssa-treadmill.webp` |
| 5 | `alyssa-energy-cycle.webp` |
| 6 | `alyssa-squat-gym.webp` |

**CSS ajouté dans `global.css` :**
```css
.insta-thumb img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.35s ease;
}
.insta-thumb:hover img { transform: scale(1.04); }
```

Les gradients `.insta-placeholder--1` à `--6` sont conservés comme fallback CSS (non visibles si les images chargent).

**Accessibilité :**
- Chaque `<a>` a un `aria-label` descriptif
- Chaque `<img>` a un `alt` textuel

---

## 6. T11-T12 — Vérifications

### Fichiers présents

| Fichier | Statut |
|---|---|
| `assets/images/alyssa/alyssa-rope-training.webp` | ✅ |
| `assets/images/alyssa/alyssa-dumbbell-press.webp` | ✅ |
| `assets/images/alyssa/alyssa-treadmill.webp` | ✅ |
| `assets/images/alyssa/alyssa-squat-rack.webp` | ✅ |
| `assets/images/alyssa/alyssa-squat-gym.webp` | ✅ |
| `assets/images/alyssa/alyssa-energy-cycle.webp` | ✅ |
| `assets/videos/alyssa-video-hero.mov` | ✅ |
| `assets/videos/alyssa-coaching-sur-mesure.mov` | ✅ |

### Pas de placeholder visible restant

- Hero background : gradient supprimé ✅
- Hero coach photo : gradient supprimé ✅
- Prog-card --muscu, --transfo, --remise : gradients supprimés ✅
- Footer grid : divs vides remplacées ✅
- Vidéo modal : source provisoire mise à jour ✅

### Règles respectées

- `object-fit: cover` appliqué sur tous les médias encadrés ✅
- `aria-hidden="true"` sur les éléments purement décoratifs ✅
- `loading="eager"` sur les images au-dessus de la fold ✅
- `loading="lazy"` sur toutes les images en-dessous ✅
- Aucun texte rouge d'annotation ✅
- Aucune DA modifiée (couleurs, typographie, layout inchangés) ✅

---

## 7. Points ouverts

1. **Vidéo Programme 01** : le fichier `alyssa-coaching-sur-mesure.mov` est un .mov iPhone. Les navigateurs basés Chromium le lisent si le codec est H.264. Tester sur Chrome desktop + mobile. Si problème : convertir en MP4 H.264 via `ffmpeg -i alyssa-coaching-sur-mesure.mov -c:v copy -c:a aac alyssa-coaching-sur-mesure.mp4`.

2. **Troisième spécialité (après bébé)** : pas de photo disponible. La carte reste en version texte uniquement — visuellement cohérente grâce au padding et à l'accent rose en haut de carte.

3. **Images JPEG fallback** : des versions `.jpg` ont été générées dans `assets/images/alyssa/` pour les navigateurs sans support WebP (très rare en 2026). Non utilisées pour l'instant — à ajouter avec `<picture>` si nécessaire.

---

## Checklist finale

- [x] Répertoire `assets/images/alyssa/` créé
- [x] 6 photos optimisées WebP (compression −95%)
- [x] Orientation EXIF corrigée (Pillow `exif_transpose`)
- [x] Vidéos renommées sémantiquement
- [x] Hero background : `alyssa-rope-training.webp`
- [x] Hero coach photo : `alyssa-squat-rack.webp`
- [x] Modal vidéo : `alyssa-video-hero.mov`
- [x] Prog 02 galbe : `alyssa-dumbbell-press.webp`
- [x] Prog 03 sèche : `alyssa-treadmill.webp`
- [x] Prog 04 remise : `alyssa-squat-gym.webp`
- [x] Prog 01 vidéo loop : `alyssa-coaching-sur-mesure.mov`
- [x] Spécialité cycle : `alyssa-energy-cycle.webp` + overlay
- [x] Spécialité sculpt : `alyssa-squat-gym.webp`
- [x] Footer insta-grid : 6 vraies photos avec alt text
- [x] CSS mis à jour (`object-fit: cover`, `object-position`, hover)
- [x] Aucun commit automatique
- [x] Rapport MD créé

---

## Déploiement (quand validé)

```cmd
cd "C:\Users\HP-15\OneDrive\Bureau\OneDrive\Documents\Alyssa Fitness V3"
git add assets/images/alyssa/ assets/videos/alyssa-video-hero.mov assets/videos/alyssa-coaching-sur-mesure.mov index.html coaching.html global.css
git commit -m "feat: intégration photos et vidéos Alyssa — hero, coaching, footer"
git push origin main
```
→ Vercel redéploiera automatiquement.
