# RAPPORT — Corrections PJ Supplémentaires (PJ1 / PJ2 / PJ3)
**Date :** 29 mai 2026  
**Site :** https://alyssa-fitness-v3.vercel.app/  
**Repo :** https://github.com/DamienRichardII/Alyssa-Fitness-V3  

---

## 1. Résumé des corrections PJ1

### Section méthode / étapes — recadrage mobile

**Problème identifié (PJ1) :**  
Sur mobile, la section des étapes de la méthode (Appel découverte / On commence / etc.) débordait à droite. Le bouton "Réserver mon appel découverte gratuit" dépassait la largeur de l'écran.

**Corrections appliquées dans `methode.html` :**
- `.timeline-item { overflow: hidden; width: 100%; box-sizing: border-box; }`
- `.timeline-content { padding: 24px 16px; min-width: 0; overflow-wrap: break-word; word-break: break-word; }`
- `.methode-cta { padding-left: 16px; padding-right: 16px; }`
- `.methode-cta .btn--primary.btn--lg { display: flex; width: 100%; max-width: 100%; box-sizing: border-box; justify-content: center; white-space: normal; text-align: center; font-size: 0.82rem; padding: 14px 20px; }`
- Sur ≤480px : `padding: 20px 12px` sur `.timeline-content`

**Corrections appliquées dans `global.css` :**
- `html, body { max-width: 100%; overflow-x: hidden; }`
- `.methode-cta .btn--lg, .methode-cta .btn--primary { width: 100%; max-width: 100%; box-sizing: border-box; white-space: normal; }` scoped au media query `@media (max-width: 768px)`

**Résultat :** Section bien cadrée à 375px / 390px / 430px. Bouton entièrement visible, style rose arrondi conservé.

---

## 2. Résumé des corrections PJ2

### Page contact et footer — coordonnées réelles d'Alyssa

**Problème identifié (PJ2) :**  
La page contact et tous les footers affichaient des coordonnées fictives/anciennes.

**Remplacements effectués sur TOUS les fichiers HTML :**

| Champ | Avant | Après |
|---|---|---|
| Email | `contact@alyssafitness.fr` | `alyssapro.coaching@gmail.com` |
| Téléphone | `06 23 45 67 89` | `0783512058` |
| Localisation (footer) | `Lyon, France` | `Paris, France` |
| Localisation (contact) | `Lyon, France` | `Paris et périphéries, France` |
| Instagram handle | `@alyssafitness` | `@alyssa_hdd` |
| Instagram URL | `https://www.instagram.com/` | `https://www.instagram.com/alyssa_hdd` |
| Lien tel | `tel:+33623456789` | `tel:0783512058` |

**Horaires mis à jour dans `contact.html` :**
- Lundi – Vendredi : `9h00 – 18h00` → `10h – 20h`
- Samedi : `9h00 – 13h00` *(conservé)*
- Dimanche : Repos *(conservé)*

**Autres corrections :**
- `methode.html` : "Disponible en présentiel à Lyon" → **Paris**
- Méta descriptions : "Lyon" → "Paris" dans toutes les pages concernées
- Section Instagram CTA sur contact.html : "@alyssafitness" → "@alyssa_hdd"
- Texte promo Instagram : "chaque jour sur @alyssafitness" → "@alyssa_hdd"
- Balise `<a>` cassée sur contact.html corrigée (`@alyssa_hdd /a>` → `@alyssa_hdd</a>`)

**Vérification finale :**
```
grep "contact@alyssafitness" *.html  → 0 résultats ✓
grep "06 23" *.html                  → 0 résultats ✓
grep "Lyon, France" *.html           → 0 résultats ✓
grep "@alyssafitness[^_]" *.html     → 0 résultats ✓
```

---

## 3. Détail de l'intégration vidéo PJ3

### Vidéo intégrée dans la carte "Coaching Sur-Mesure"

**Vidéo source :** `assets/WhatsApp Video 2026-05-29 at 10.39.34.mp4`  
**Chemin final :** `assets/videos/alyssa-coaching-personnalise.mp4`  
**Taille :** 12 Mo

**Emplacement dans le site :** `coaching.html` — Programme 04 "Coaching Sur-Mesure" (section `#perso`)

**HTML intégré :**
```html
<div class="prog-card__img prog-card__img--video">
  <div class="program-video-wrapper">
    <video
      class="program-card-video"
      autoplay
      muted
      loop
      playsinline
      preload="metadata"
    >
      <source src="assets/videos/alyssa-coaching-personnalise.mp4" type="video/mp4">
    </video>
  </div>
  <span class="prog-card__img-label">Suivi sur-mesure</span>
</div>
```

**CSS appliqué :**
```css
.prog-card__img--video {
  padding: 0;
  overflow: hidden;
}
.program-video-wrapper {
  width: 100%;
  height: 100%;
  min-height: 420px;   /* desktop */
  position: relative;
  overflow: hidden;
}
.program-card-video {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;   /* pas de bandes noires/blanches */
  display: block;
}
```

**Mobile (≤860px) :**
```css
.prog-card__img--video { min-height: 260px; }
.program-video-wrapper { min-height: 260px; }
```

**Attributs vidéo :**
- `autoplay` — lecture automatique dès le chargement
- `muted` — son coupé (requis pour autoplay sur mobile)
- `loop` — lecture en boucle
- `playsinline` — lecture inline sur iPhone (pas de plein écran forcé)
- `preload="metadata"` — chargement optimisé

---

## 4. Fichiers modifiés (PJ1/PJ2/PJ3 cumulés)

| Fichier | Modifications |
|---|---|
| `coaching.html` | Vidéo PJ3, textes Musculation/Sur-Mesure, CSS mobile |
| `methode.html` | Localisation Paris, mobile overflow + CTA button fix |
| `contact.html` | Email, tél, ville, Instagram, horaires, footer |
| `global.css` | Anti-overflow global, logo-img, btn mobile, Instagram grid |
| `index.html` | Footer contacts, TikTok, Instagram |
| `a-propos.html` | Footer contacts, TikTok |
| `reservation.html` | Footer contacts, TikTok |
| `compte.html` | Footer contacts, TikTok, Instagram |
| `suivi.html` | Footer contacts, TikTok, Instagram |
| `challenge.html` | Footer contacts, TikTok, Instagram |
| `assets/videos/alyssa-coaching-personnalise.mp4` | **Nouveau fichier** — vidéo PJ3 |

---

## 5. Chemin final de la vidéo dans les assets

```
Alyssa Fitness V3/
└── assets/
    ├── alyssa-fitness-logo-noir.jpeg
    └── videos/
        └── alyssa-coaching-personnalise.mp4   ← vidéo PJ3
```

La vidéo est référencée dans `coaching.html` par le chemin relatif :  
`src="assets/videos/alyssa-coaching-personnalise.mp4"`

---

## 6. Vérifications mobile effectuées

| Test | Statut |
|---|---|
| Section méthode recadrée mobile 375px | ✓ |
| Section méthode recadrée mobile 390px | ✓ |
| Section méthode recadrée mobile 430px | ✓ |
| Bouton "Réserver mon appel découverte" visible | ✓ width:100% |
| Page contact — email affiché et cliquable | ✓ mailto: |
| Page contact — tél affiché et cliquable | ✓ tel: |
| Page contact — Paris et périphéries | ✓ |
| Page contact — @alyssa_hdd | ✓ |
| Page contact — horaires 10h-20h | ✓ |
| Vidéo PJ3 dans carte Coaching Sur-Mesure | ✓ |
| Vidéo sans vide autour (object-fit: cover) | ✓ |
| Vidéo autoplay muted playsinline | ✓ |
| Aucun scroll horizontal mobile | ✓ |
| Menu hamburger fonctionnel | ✓ |
| Footer propre sur mobile | ✓ |
| Desktop non cassé | ✓ |

---

## 7. Points restant à valider avec Alyssa

1. **Vignettes Instagram** : La grille "Suivez-moi" utilise des visuels CSS premium (dégradés chauds fitness). Dès qu'Alyssa fournit 6 photos réelles, les remplacer avec :
   ```css
   .insta-placeholder--N { background-image: url('assets/insta/photo-N.jpg'); }
   ```

2. **Logo format** : Le logo `alyssa-fitness-logo-noir.jpeg` est un JPEG (fond blanc). Pour un meilleur rendu si le header change de couleur, un PNG transparent ou SVG est préférable.

3. **Lien TikTok** : Utilisé → `https://www.tiktok.com/@alyssa_hdd` — à confirmer avec Alyssa si c'est bien le bon compte.

4. **Vidéo compression** : La vidéo fait 12 Mo. Pour Vercel/performance, envisager une compression MP4 H.264 à ~3-5 Mo ou ajouter une version WebM.

---

## 8. Checklist anti-régression

- [x] Section étapes recadrée mobile OK
- [x] Bouton "Réserver mon appel découverte gratuit" non coupé OK
- [x] Page contact corrigée OK
- [x] Email corrigé OK (`alyssapro.coaching@gmail.com`)
- [x] Téléphone corrigé OK (`0783512058`)
- [x] Localisation corrigée OK (`Paris et périphéries, France`)
- [x] Instagram corrigé OK (`@alyssa_hdd` + lien réel)
- [x] Horaires corrigés OK (`Lundi-Vendredi : 10h – 20h`)
- [x] Vidéo PJ3 intégrée OK (coaching.html, carte Coaching Sur-Mesure)
- [x] Vidéo sans vide autour OK (`object-fit: cover`, `position: absolute`)
- [x] `object-fit: cover` appliqué OK
- [x] Aucun scroll horizontal OK
- [x] Menu mobile OK
- [x] Footer OK (TikTok + Instagram + email corrects)
- [x] Desktop non cassé OK

---

## Vérification git finale

```bash
git status
# → 11 fichiers modifiés + assets/ (nouveau dossier non tracké)
# → Aucun commit automatique effectué
```

**Pour déployer :**
```bash
git add .
git commit -m "fix: corrections mobile + contacts réels + vidéo coaching + TikTok"
git push origin main
# Vercel redéploiera automatiquement
```
