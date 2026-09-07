# RAPPORT — Mission C — Alyssa Fitness V3
**Date :** 7 septembre 2026  
**Site :** https://alyssa-fitness-v3.vercel.app/  
**Repo :** https://github.com/DamienRichardII/Alyssa-Fitness-V3  
**Statut :** Prêt — sans commit automatique

---

## Résumé des 13 tâches réalisées

| # | Tâche | Statut |
|---|---|---|
| 1 | Audit complet du projet | ✅ |
| 2 | Photo Alyssa shooting → WebP optimisé | ✅ |
| 3 | Couleurs rose → bleu (global.css + 12 HTML) | ✅ |
| 4 | Typographie Cormorant → Playfair Display | ✅ |
| 5 | Hero : nouvelle photo + logo agrandi | ✅ |
| 6 | Corrections orthographe + CTA simplifié | ✅ |
| 7 | Témoignages → carousel infini auto-scroll | ✅ |
| 8 | Animations coaching.html + correction troncature | ✅ |
| 9 | Gestion médias dans compte.html | ✅ |
| 10 | Quiz vérifié et fonctionnel | ✅ |
| 11 | Responsive + SEO vérifiés | ✅ |
| 12 | Header hauteur ajustée (72→80px) | ✅ |
| 13 | Rapport final | ✅ |

---

## 1. Nouvelle couleur bleue

### Palette choisie
| Variable CSS | Ancienne valeur (rose) | Nouvelle valeur (bleu) |
|---|---|---|
| `--rose-saumon` | `#E98780` | `#2D9CDB` |
| `--rose-clair` | `#F3B3AD` | `#79C8EA` |
| `--rose-hover` | `#d4706a` | `#1A7AB5` |
| `--rose-pale` | `#FAF0EE` | `#EBF6FC` |
| `rgba(233,135,128,X)` | toutes occurrences | `rgba(45,156,219,X)` |
| `--ombre-hover` | `rgba(233,135,128,0.18)` | `rgba(45,156,219,0.18)` |

**Stratégie** : les noms des variables CSS (`--rose-saumon` etc.) ont été conservés pour ne pas toucher aux 12 pages HTML. Seules les **valeurs** ont été changées dans `:root`. Les hardcodes rgba/hex dans les pages HTML ont été remplacés par Python.

**Fichiers modifiés :** `global.css` + tous les 12 HTML.

---

## 2. Typographie

### Avant → Après
| Font | Avant | Après |
|---|---|---|
| Titres (`--font-titre`) | Cormorant Garamond (très fine, serif élégante) | **Playfair Display** (serif premium, plus lisible au web) |
| Corps (`--font-corps`) | Montserrat | Montserrat (conservé — parfait pour fitness) |

**URL Google Fonts mise à jour :**
```
Avant : ?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Montserrat...
Après : ?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat...
```
Mise à jour sur **9 pages** (connexion, inscription, messagerie n'avaient pas de Google Fonts propre → héritent de global.css).

---

## 3. Photo hero + logo

### Photo hero (`index.html`)
- **Avant :** `assets/images/alyssa/alyssa-rope-training.webp`
- **Après :** `assets/images/alyssa/alyssa-stretch-studio.webp`

**Source :** Photo uploadée `Alyssa-shooting.jpeg` (2048×1366) — shooting studio professionnel, Alyssa en top bleu turquoise, fond blanc.
**Optimisation :** Python Pillow → WebP 82% → **57K** (2048×1366)

### Logo agrandi
- **Avant :** `height: 48px; max-width: 164px`
- **Après :** `height: 64px; max-width: 210px`
- **Mobile (≤768px) :** `height: 40px` conservé (déjà en place)
- **Header height :** `72px` → `80px` (pour accueillir le logo 64px confortablement)

---

## 4. Carousel témoignages

### Structure avant → après
**Avant :** `.temo-layout` (grille 2 colonnes : aside gauche + grille 3 cards fixes)

**Après :** Bande défilante infinie (`overflow-x: clip`, CSS animation `translateX(-50%)`)

### Implémentation
```css
@keyframes temo-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.temo-track {
  display: flex; gap: 20px; width: max-content;
  animation: temo-scroll 34s linear infinite;
}
.temo-track:hover, .temo-track.paused { animation-play-state: paused; }
```

**6 témoignages** (3 originaux + 3 nouveaux : Sofia R., Julie N., Amandine P.) dupliqués = 12 cards pour le loop parfait. Pause au hover. Drag mouse + touch support dans `global.js`.

**Mobile :** cards à 272px, overflow-x:clip bord à bord (via `margin: 0 calc(-1 * var(--gutter))`).

---

## 5. Animations coaching.html

### Problème détecté
Le fichier `coaching.html` était **tronqué** (dernier caractère = `"M"` au milieu du footer). Footer fermant, `</body>`, `</html>` manquants.

### Correction
Le footer a été reconstitué (Mentions légales + Confidentialité + `</footer></body></html>`).

### Animations ajoutées
```css
.prog-card {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity 0.65s ease, transform 0.65s cubic-bezier(0.22,1,0.36,1);
}
.prog-card.anim-visible { opacity: 1; transform: translateY(0); }
.prog-card:hover { box-shadow: 0 16px 56px rgba(45,156,219,0.18); }
.prog-card:hover .prog-card__img-inner { transform: scale(1.04); }
```

**JS :** IntersectionObserver avec délai staggeré (`index × 0.12s`) pour chaque card.

---

## 6. Gestion médias (`compte.html`)

Section ajoutée avec :
- Grille visuelle de **7 photos** (thumbnails cliquables → copie du chemin dans le presse-papier)
- **2 vidéos** référencées (hero + coaching)
- Zone d'explication "Ajouter un média" (via git push)
- CSS responsive `auto-fill minmax(160px, 1fr)`
- `copyPath()` via `navigator.clipboard` + toast notification

---

## 7. Quiz

Quiz 3 étapes **vérifié fonctionnel** :
- Étape 1 : Objectif (sèche / galbe / sur-mesure)
- Étape 2 : Niveau actuel
- Étape 3 : Format souhaité
- Résultat par majorité + CTA vers la page coaching
- Boutons Retour, Recommencer
- Ancres vérifiées : `#programme-seche`, `#programme-galbe-musculation`, `#coaching-sur-mesure`

---

## 8. CTA simplifié

"Réserver un appel" → **"Réserver"** sur 6 pages (16 occurrences) :
`a-propos.html`, `coaching.html`, `contact.html`, `index.html`, `methode.html`, `reservation.html`

"Réserver gratuit" → **"Réserver gratuitement"** (quiz result CTA, index.html)

---

## 9. Corrections texte

| Fichier | Correction |
|---|---|
| `a-propos.html` | 3× "Découvrez" → "Découvre" (tutoiement cohérent) |
| `index.html` | "Réserver gratuit" → "Réserver gratuitement" |

---

## 10. Responsive & SEO

### Responsive ✅
| Élément | État |
|---|---|
| Logo mobile | `height: 40px` (breakpoint existant conservé) |
| Carousel mobile | `width: 272px` par card, `overflow-x: clip` |
| Coaching animations | `opacity:0→1`, pas d'impact layout |
| Header 80px | Toutes les pages héritent via `--header-h` |
| Aucun scroll horizontal | `overflow-x: hidden` global conservé |

### SEO ✅
| Page | title | description | OG | h1 | lang=fr |
|---|---|---|---|---|---|
| index.html | ✅ | ✅ | ✅ | ✅ | ✅ |
| coaching.html | ✅ | ✅ | ✅ | ✅ | ✅ |
| a-propos.html | ✅ | ✅ | ✅ | ✅ | ✅ |
| methode.html | ✅ | ✅ | ✅ | ✅ | ✅ |
| contact.html | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## 11. Fichiers modifiés

| Fichier | Modifications |
|---|---|
| `global.css` | Couleurs bleues, Playfair Display, logo 64px, header 80px |
| `global.js` | Carousel drag/touch support, toast couleur bleue |
| `index.html` | Hero photo, carousel témoignages, CTA, correction rgba |
| `coaching.html` | Troncature réparée, animations scroll-reveal, CTA |
| `a-propos.html` | CTA, tutoiement, rgba |
| `methode.html` | CTA, rgba |
| `contact.html` | CTA, rgba |
| `compte.html` | Section gestion médias complète |
| `challenge.html` | rgba bleu |
| `reservation.html` | CTA |
| `connexion.html` | rgba |
| `inscription.html` | rgba |
| `messagerie.html` | rgba |
| `suivi.html` | rgba |
| `assets/images/alyssa/alyssa-stretch-studio.webp` | **Nouveau** — 57K, 2048×1366 |

---

## Déploiement (quand validé)

```cmd
cd "C:\Users\HP-15\OneDrive\Bureau\OneDrive\Documents\Alyssa Fitness V3"
git add global.css global.js index.html coaching.html a-propos.html methode.html contact.html compte.html challenge.html reservation.html connexion.html inscription.html messagerie.html suivi.html assets/images/alyssa/alyssa-stretch-studio.webp RAPPORT_MISSION_C_ALYSSA.md
git commit -m "feat: Mission C — bleu, Playfair Display, hero shooting, carousel temoignages, animations coaching, gestion medias"
git push origin main
```
→ Vercel redéploiera automatiquement.

---

## Points restant à valider avec la chef de projet

1. **Couleur bleue** : `#2D9CDB` (azure) — à valider visuellement sur le site déployé.
2. **Playfair Display** vs Cormorant Garamond — à valider si le rendu convient.
3. **Photo hero** : `alyssa-stretch-studio.webp` (fond blanc, debout en stretch) — vérifier le cadrage sur mobile avec `object-position`.
4. **Logo 64px** : agrandissement dans le header — à valider si OK ou réduire à 56px.
5. **Offre 04 "Remise en forme"** dans coaching.html : conserver ou supprimer (point de l'audit précédent).
6. **Mentions légales / Confidentialité** : pages non encore créées.
