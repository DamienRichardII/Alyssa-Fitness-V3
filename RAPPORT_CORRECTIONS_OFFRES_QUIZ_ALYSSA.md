# RAPPORT — Corrections offres, quiz d'orientation & refonte home
**Date :** 30 juillet 2026  
**Site :** https://alyssa-fitness-v3.vercel.app/  
**Repo :** https://github.com/DamienRichardII/Alyssa-Fitness-V3  
**Fichiers modifiés :** `index.html`, `coaching.html`, `global.css`  
**Statut :** Prêt — sans commit automatique

---

## 1. Résumé des modifications

21 tâches réalisées en 3 fichiers :
- **global.css** : logo agrandi, nav alignée
- **index.html** : titre hero modernisé, bouton vidéo fonctionnel, quiz d'orientation ajouté
- **coaching.html** : 4 programmes réorganisés, renommés, textes entièrement reformulés, ancres ajoutées

---

## 2. Fichiers modifiés

| Fichier | Nature des modifications |
|---|---|
| `global.css` | Logo 40px → 48px, white-space: nowrap sur nav-link, logo mobile 34px → 40px |
| `index.html` | Titre hero dual-font, bouton vidéo cliquable, quiz 3 étapes JS vanilla |
| `coaching.html` | Ordre des programmes, titres, descriptions, bénéfices, infos, ancres |

---

## 3. Corrections header / logo / navigation

**Logo :**
- Hauteur : `40px` → `48px`
- Largeur max : `140px` → `164px`
- `object-position: left center` ajouté pour un cadrage propre
- Mobile : `34px` → `40px`

**Navigation "À propos" :**
- `white-space: nowrap` ajouté sur `.nav-link` dans `global.css`
- Empêche le lien "À propos" de se couper sur deux lignes sur desktop étroit

---

## 4. Corrections hero accueil — typographie

**Approche dual-font (premium moderne) :**
- Corps du titre : Montserrat 700 — `font-size: clamp(2.2rem, 5vw, 4.4rem)`
- Accent `<em>ta vie</em>` : Cormorant Garamond italic, `font-size: 1.18em`, rose saumon

**Résultat :**
- Le titre "Le coaching qui s'adapte à *ta vie*" gagne en lisibilité et modernité
- Le contraste Montserrat/Cormorant est caractéristique des marques premium féminines
- Aucun débordement desktop ni mobile

---

## 5. Bouton "Voir la vidéo" — prêt à connecter

- `id="heroVideoBtn"` ajouté sur le bouton
- `aria-label="Voir la vidéo de présentation d'Alyssa"` mis à jour
- Commentaire HTML `<!-- TODO: remplacer par la vidéo officielle d'Alyssa -->` ajouté
- Une **modal vidéo** complète est injectée avant `</body>` :
  - Overlay sombre cliquable pour fermer
  - Bouton ✕ en haut à droite
  - Vidéo `alyssa-coaching-personnalise.mp4` (provisoire — à remplacer)
  - Fermeture sur `Escape`
  - Lecture automatique à l'ouverture, pause et reset à la fermeture

---

## 6. Réorganisation des offres coaching

**Ancien ordre :**
1. Remise en forme (Prog 01)
2. Musculation Féminine (Prog 02)
3. Transformation Complète (Prog 03)
4. Coaching Sur-Mesure (Prog 04)

**Nouvel ordre :**
1. **Transformation complète** — Coaching sur-mesure (Prog 01) — `id="coaching-sur-mesure"`
2. **Programme galbe & musculation** (Prog 02) — `id="programme-galbe-musculation"`
3. **Programme sèche** (Prog 03) — `id="programme-seche"`
4. **Remise en forme & Bien-être** (Prog 04) — `id="remise"`

L'alternance visuelle image gauche / image droite est respectée pour tous les programmes.

---

## 7. Détail — Offre signature : Transformation complète

| Champ | Contenu |
|---|---|
| Badge | Programme 01 — Coaching sur-mesure |
| Titre | Transformation complète |
| Description | Un accompagnement complet et un programme entièrement adapté à ton rythme de vie, tes contraintes, tes objectifs et tes progrès afin de t'accompagner à chaque étape de ta transformation. |
| Pour qui | Femmes avec objectif précis, contraintes ou besoin d'un accompagnement complet |
| Niveau | Tous niveaux |
| Format | En ligne et/ou présentiel · Durée libre |

**Bénéfices :**
- Bilan initial complet : morphologie, habitudes, objectifs et mode de vie
- Programme d'entraînement 100% personnalisé et évolutif adapté à ton cycle
- Accompagnement nutritionnel
- Accès à l'application de suivi Ekklo
- Accès messagerie régulière, messages et vocaux
- Appel ou visio hebdomadaire
- Conseils de récupération, mobilité et habitudes de vie

---

## 8. Détail — Programme galbe & musculation

| Champ | Contenu |
|---|---|
| Badge | Programme 02 |
| Titre | Programme galbe & musculation |
| Description | Construis un physique fort et développe ta masse musculaire intelligemment afin de sculpter une silhouette plus harmonieuse. Pensée pour favoriser le développement musculaire tout en limitant la prise de gras. |
| Pour qui | Femmes souhaitant développer leur masse musculaire et galber leur silhouette |
| Niveau | Débutant ou intermédiaire |
| Format | Présentiel ou en ligne · 3–6 mois |

**Corrections effectuées :**
- Suppression des tirets longs `— fessiers, cuisses, épaules —`
- Texte fluide et premium

---

## 9. Détail — Programme sèche

| Champ | Contenu |
|---|---|
| Badge | Programme 03 |
| Titre | Programme sèche |
| Description | Perds du gras durablement, tonifie ta silhouette et révèle un physique plus harmonieux grâce à une méthode alliant musculation, nutrition et récupération. |
| Pour qui | Prête à sécher, pas à te priver |
| Niveau | Tous niveaux |
| Format | En ligne · 3–6 mois |

**Bénéfices :**
- Programme d'entraînement progressif : 2 à 5 séances par semaine
- Plan nutritionnel complet
- Guide cardio : Zone 2 et HIIT selon objectifs
- Plus de 30 recettes protéinées simples et gourmandes
- Vidéos techniques des exercices
- Outils de suivi de progression

**Corrections effectuées :**
- Plus de doublon avec l'offre "Transformation complète"
- "Toutes niveaux, motivées" remplacé par "Tous niveaux"
- "En ligne · 6 mois" remplacé par "En ligne · 3–6 mois"

---

## 10. Ajout du quiz d'orientation (index.html)

**Emplacement :** Entre la section "Pour qui ?" et la section "Spécialités"

**Section HTML :**
- `id="quiz-programme"`
- `class="section section--white"` (alterne visuellement avec le beige "Pour qui ?")
- Titre : "Quiz — Choisir mon programme"
- Sous-titre : "Réponds à quelques questions pour trouver l'accompagnement qui te correspond vraiment."

**Design :**
- Carte blanche avec border-radius 20px, ombre douce
- Barre de progression rose saumon (transition fluide)
- Questions en Cormorant Garamond 500
- Boutons arronnis avec hover translateX + rose saumon
- Résultat dans une carte avec icône ronde rose
- Responsive : flex-direction column sur mobile, boutons 100% largeur

---

## 11. Logique du quiz (JS vanilla)

**Étape 1 — Objectif principal :**
- Perdre du gras → `seche`
- Prendre du muscle → `galbe`
- Accompagnement personnalisé → `surmesure`

**Étape 2 — Niveau actuel :**
- Débute / reprend → `seche`
- S'entraîne déjà → `galbe`
- Objectif précis / contraintes → `surmesure`

**Étape 3 — Format :**
- Autonomie → `seche`
- Suivi régulier → `galbe`
- Coaching complet → `surmesure`

**Algorithme :** Majorité des votes parmi les 3 réponses. En cas d'égalité, la première clé majoritaire gagne.

**Résultats possibles :**
| Clé | Programme recommandé | Lien |
|---|---|---|
| `seche` | Programme sèche | `coaching.html#programme-seche` |
| `galbe` | Programme galbe & musculation | `coaching.html#programme-galbe-musculation` |
| `surmesure` | Transformation complète — Coaching sur-mesure | `coaching.html#coaching-sur-mesure` |

**Fonctionnalités :**
- Bouton "← Retour" sur étapes 2 et 3
- Bouton "Recommencer le quiz" sur le résultat
- Sélection visuelle de la réponse choisie (classe `selected`)
- Délai 300ms avant changement d'étape (UX naturelle)
- Aucun backend, aucune librairie externe

---

## 12. Ancres ajoutées sur coaching.html

| Programme | id HTML | URL cible quiz |
|---|---|---|
| Transformation complète | `coaching-sur-mesure` | `coaching.html#coaching-sur-mesure` |
| Programme galbe & musculation | `programme-galbe-musculation` | `coaching.html#programme-galbe-musculation` |
| Programme sèche | `programme-seche` | `coaching.html#programme-seche` |
| Remise en forme | `remise` | — |

---

## 13. Vérifications responsive mobile

| Viewport | Header | Logo | Hero titre | Quiz | Cartes coaching | Footer |
|---|---|---|---|---|---|---|
| 375px | ✓ | ✓ 40px | ✓ clamp 2.2rem | ✓ 1 colonne | ✓ | ✓ |
| 390px | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| 430px | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Desktop | ✓ | ✓ 48px | ✓ clamp → 4.4rem | ✓ centré 680px | ✓ alternance | ✓ |

CSS responsifs clés :
- `clamp(2.2rem, 5vw, 4.4rem)` — hero title ne déborde jamais
- `@media (max-width: 768px) { .quiz-card { padding: 28px 20px; } }` — quiz compact mobile
- `quiz-result__ctas` passe en `flex-direction: column` sur mobile
- `white-space: nowrap` sur `.nav-link` — "À propos" jamais coupé

---

## 14. Points restant à valider avec la chef de projet

1. **Vidéo officielle du hero** : Le bouton "Voir la vidéo" est câblé et affiche provisoirement `alyssa-coaching-personnalise.mp4`. Quand la vidéo officielle sera disponible, remplacer dans le `<video>` du `#videoModal` et supprimer le commentaire `<!-- TODO -->`.

2. **Photo hero** : Le placeholder beige/rose reste en place. La vraie photo d'Alyssa peut remplacer `.hero__coach-photo` directement via CSS `background-image` ou en ajoutant un `<img>` dans le bloc.

3. **Photos des cartes coaching** : Les cartes galbe et sèche utilisent les mêmes placeholders de dégradé. Des photos spécifiques amélioreraient le premium.

4. **Numérotation Programme 04** : "Remise en forme & Bien-être" a été gardé et renuméroté Programme 04. Si ce programme est à supprimer du catalogue, il suffit de retirer son bloc HTML.

5. **Prix** : Aucun tarif n'est affiché sur les cartes coaching. Si Alyssa souhaite les ajouter, prévoir un bloc `.prog-card__price`.

6. **Localisation** : Le footer indique "Paris, France" mais la meta indique Cergy. À harmoniser.

7. **Quiz — Pondération** : La logique de vote majoritaire est basique. Si des combinaisons spécifiques doivent toujours donner un résultat précis, la logique peut être affinée.

---

## Checklist finale

- [x] Logo header agrandi (40px → 48px)
- [x] "À propos" aligné (white-space: nowrap)
- [x] Titre hero amélioré (Montserrat 700 + Cormorant italic accent)
- [x] Bloc vidéo cliquable (modal + id heroVideoBtn + TODO comment)
- [x] Offre sur-mesure placée en premier (Programme 01)
- [x] Offre signature renommée "Transformation complète"
- [x] Mention "Coaching sur-mesure" dans le badge Programme 01
- [x] Programme galbe & musculation (Programme 02)
- [x] Programme sèche (Programme 03)
- [x] Textes offres remplacés (descriptions, bénéfices, pour qui, niveau, format)
- [x] Tirets longs inutiles supprimés (— fessiers, cuisses…)
- [x] Infos Pour qui / Niveau / Format corrigées sur les 3 programmes
- [x] Quiz ajouté sur home (entre Pour qui ? et Spécialités)
- [x] Quiz interactif JS vanilla (3 étapes, bouton retour, recommencer)
- [x] Résultats quiz (sèche, galbe, sur-mesure)
- [x] CTA quiz vers bonnes ancres coaching.html
- [x] Ancres id ajoutées sur les 3 cartes coaching
- [x] Responsive mobile vérifié (clamp, quiz mobile, nav nowrap)
- [x] Aucun scroll horizontal (overflow-x: hidden global)
- [x] Desktop non cassé (alternance prog-card, quiz centré)
- [x] Rapport MD créé

---

## Déploiement (quand validé)

```cmd
cd "C:\Users\HP-15\OneDrive\Bureau\OneDrive\Documents\Alyssa Fitness V3"
git add global.css index.html coaching.html
git commit -m "feat: refonte offres coaching, quiz d'orientation, hero modernisé"
git push origin main
```
→ Vercel redéploiera automatiquement.
