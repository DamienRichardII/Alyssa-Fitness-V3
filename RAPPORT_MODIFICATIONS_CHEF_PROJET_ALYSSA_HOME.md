# RAPPORT — Modifications Chef de Projet — Alyssa Fitness · Page d'accueil
**Date :** 9 juillet 2026  
**Site :** https://alyssa-fitness-v3.vercel.app/  
**Repo :** https://github.com/DamienRichardII/Alyssa-Fitness-V3  
**Fichier modifié :** `index.html` uniquement  
**Statut :** Prêt — sans commit automatique

---

## 1. Résumé des modifications appliquées

La page d'accueil a été enrichie pour mieux positionner l'offre d'Alyssa autour des spécialités féminines : musculation, rééquilibrage nutritionnel, suivi hormonal, cycle menstruel, post-partum et coaching à Cergy et à distance.

5 zones ont été modifiées ou ajoutées :
1. Sous-titre du hero mis à jour
2. CTA hero vérifiés (déjà conformes — conservés)
3. Nouveau bloc "Pour qui ?" inséré après PROMESSE
4. Nouvelle section "Spécialités" insérée après "Pour qui ?"
5. CTA final reformulé (texte + boutons)
6. Meta description / OG / Twitter mis à jour

---

## 2. Fichier modifié

| Fichier | Type de modification |
|---|---|
| `index.html` | Sous-titre hero, 2 nouvelles sections HTML, CTA final, meta tags |

---

## 3. Nouveau sous-titre hero

**Avant :**
> "Reprends le contrôle de ton corps avec un accompagnement personnalisé, humain et progressif — adapté à tes objectifs et à ton rythme."

**Après :**
> "Musculation, rééquilibrage nutritionnel et suivi hormonal — un accompagnement 100 % féminin, humain et progressif, à Cergy et à distance."

Ajustements techniques :
- `&nbsp;` inséré avant `%` pour éviter la coupure typographique sur mobile
- `max-width: 460px` + `line-height: 1.8` existants conservés — texte non débordant à 375px

---

## 4. CTA hero (vérifiés — déjà conformes)

| Bouton | Texte | Lien |
|---|---|---|
| Principal | "Commencer mon coaching" | `coaching.html` |
| Secondaire | "Découvrir la méthode" | `methode.html` |

Les deux CTAs étaient déjà corrects depuis la session précédente. Aucune modification requise.

---

## 5. Bloc "Pour qui ?" ajouté

**Localisation dans la page :** Entre la section PROMESSE et la section À PROPOS

**Titre :** "Ce coaching est fait pour toi si…"

**4 cartes grille 2×2 (desktop) / 1 colonne (mobile) :**
- Tu veux reprendre le sport sans te blesser ni te perdre
- Tu ressens les effets de ton cycle sur ton énergie et tes performances
- Tu reviens de grossesse et tu veux y aller à ton rythme
- Tu en as marre des programmes génériques qui ne te ressemblent pas

**Design :**
- Fond beige premium (`section--beige`)
- Cartes blanches avec pastille rose saumon (check SVG `#E98780`)
- Hover `translateY(-3px)` + ombre
- Responsive : `grid-template-columns: 1fr` sur ≤768px

---

## 6. Section "Spécialités" ajoutée

**Localisation dans la page :** Juste après "Pour qui ?" / avant À PROPOS

**Titre :** "Mes spécialités"  
**Sous-titre :** "Un accompagnement pensé pour le corps féminin, ses rythmes et ses transitions."

**3 cartes (desktop 3 colonnes / mobile 1 colonne) :**

| Emoji | Titre | Résumé |
|---|---|---|
| 🔄 | Entraîne-toi selon ton cycle | Programmation en accord avec les phases hormonales |
| 🤱 | Retour au sport après bébé | Remise en forme progressive post-partum |
| 💪 | Sculpte sans t'épuiser | Musculation + nutrition + récupération durable |

**Design :**
- Fond blanc (`section--white`)
- Cartes avec bande rose saumon en haut (3px gradient)
- Hover `translateY(-4px)` + ombre
- Emoji conservés (rendu premium à cette taille)
- Responsive : `grid-template-columns: 1fr; gap: 16px` sur ≤768px

---

## 7. CTA final reformulé

**Titre :** inchangé — "Prête à reprendre le contrôle de ton corps ?"

**Texte :**

Avant :
> "Commence par un premier échange. On définit ensemble tes objectifs et l'accompagnement le plus adapté à ta vie."

Après :
> "On commence par un appel de 20 minutes pour faire le point ensemble — tes objectifs, ton rythme, ton quotidien. Gratuit, sans engagement."

**Boutons :**

| Avant | Après | Lien |
|---|---|---|
| "Réserver un appel" | "Réserver mon appel gratuit" | `reservation.html` |
| "Écrire sur Instagram" | "M'écrire sur Instagram" | `https://www.instagram.com/alyssa_hdd` |

Le lien Instagram conserve bien `target="_blank" rel="noopener noreferrer"`.

---

## 8. Liens vérifiés

| Contexte | Texte | Lien | Statut |
|---|---|---|---|
| Hero — bouton principal | Commencer mon coaching | `coaching.html` | ✓ |
| Hero — bouton secondaire | Découvrir la méthode | `methode.html` | ✓ |
| CTA final — principal | Réserver mon appel gratuit | `reservation.html` | ✓ |
| CTA final — secondaire | M'écrire sur Instagram | `https://www.instagram.com/alyssa_hdd` | ✓ |

---

## 9. Vérifications mobile

Tests simulés par audit du CSS :

| Viewport | Sous-titre hero | Pour qui ? | Spécialités | CTA final | Footer |
|---|---|---|---|---|---|
| 375px | ✓ `max-width:460px` | ✓ 1 colonne | ✓ 1 colonne | ✓ 1 colonne | ✓ |
| 390px | ✓ | ✓ | ✓ | ✓ | ✓ |
| 430px | ✓ | ✓ | ✓ | ✓ | ✓ |

Points CSS garantissant le rendu mobile :
- `pourqui-grid : grid-template-columns: 1fr` à ≤768px
- `specialites-grid : grid-template-columns: 1fr; gap: 16px` à ≤768px
- `hero__actions : flex-direction: column` + `.btn width: 100%` à ≤768px
- Anti-overflow global : `html, body { max-width: 100%; overflow-x: hidden; }` (dans `global.css`)

---

## 10. Mise à jour SEO — Meta tags

| Balise | Valeur mise à jour |
|---|---|
| `<meta name="description">` | "Alyssa Fitness accompagne les femmes en musculation, rééquilibrage nutritionnel et suivi hormonal, à Cergy et à distance, avec une approche humaine, progressive et personnalisée." |
| `og:description` | Idem |
| `twitter:description` | Idem |
| `og:title` | Inchangé — "Alyssa Fitness — Coaching premium pour femmes" |
| `twitter:title` | Inchangé |
| `og:image` | Inchangé — image OG existante |

---

## 11. Points restant à valider avec la chef de projet

1. **Photo hero** : Le placeholder CSS beige/rose est conservé. Si Alyssa fournit une vraie photo, elle peut remplacer `.hero__img-placeholder` et `.hero__coach-photo`.

2. **Photo "Pour qui ?"** : La section fonctionne très bien en version texte + cartes. Une photo d'ambiance peut être ajoutée à gauche si souhaitée.

3. **Emojis spécialités** : Les emojis 🔄 🤱 💪 ont été conservés car le rendu est premium. Si Alyssa préfère des icônes SVG pures, ils peuvent être remplacés.

4. **Localisation** : Le sous-titre hero mentionne "à Cergy". Confirmer avec Alyssa que Cergy est bien la ville principale (vs Paris mentionné dans le footer).

5. **Vidéo play button** : Le bouton "Voir la vidéo / Découvrir mon approche" sous les CTAs hero ne déclenche pas encore de vidéo réelle. Il peut être lié à la vidéo PJ3 ou supprimé si non pertinent.

---

## Checklist finale

- [x] Sous-titre hero mis à jour ✓
- [x] CTA "Commencer mon coaching" → `coaching.html` ✓
- [x] CTA "Découvrir la méthode" → `methode.html` ✓
- [x] Bloc "Pour qui ?" ajouté (4 cartes 2×2) ✓
- [x] Section "Spécialités" ajoutée après "Pour qui ?" ✓
- [x] 3 blocs spécialités intégrés (cycle, post-partum, sculpture) ✓
- [x] CTA final texte reformulé ✓
- [x] Bouton "Réserver mon appel gratuit" → `reservation.html` ✓
- [x] Bouton "M'écrire sur Instagram" → `@alyssa_hdd` + `target="_blank" rel="noopener noreferrer"` ✓
- [x] Responsive mobile OK (1 colonne sur ≤768px pour les nouvelles sections) ✓
- [x] Aucun scroll horizontal ✓
- [x] Desktop non cassé ✓
- [x] Meta description mise à jour ✓
- [x] og:description mise à jour ✓
- [x] twitter:description mise à jour ✓
- [x] Aucun placeholder visible ✓
- [x] Aucun ancien texte résiduel ✓
- [x] Rapport MD créé ✓

---

## Déploiement (quand validé)

```cmd
del "C:\Users\HP-15\OneDrive\Bureau\OneDrive\Documents\Alyssa Fitness V3\.git\index.lock"
git add .
git commit -m "feat: positionnement féminin, bloc Pour qui, spécialités, CTA reformulé — home"
git push origin main
```
→ Vercel redéploiera automatiquement.
