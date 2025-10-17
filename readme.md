# NEON808

**neon808** est un projet fictif de label musical créé par un groupe de sept membres.  
L’objectif est de concevoir un site web moderne reflétant l’identité du label à travers le design, la musique et l’interactivité.

---

## Tech
HTML, CSS, JavaScript (vanilla).

---

## Règles de code
Pour assurer cohérence et bonne collaboration :

- **Code, commits et commentaires** : en anglais.  
- **Variables, fonctions & classes** : camelCase.
- **Noms de fichiers & assets** : kebab-case.

### Arborescence
```
projet/
├── index.html
├── about.html
├── contact.html
│
├── styles/
│   ├── style.css        # Styles généraux (layout, header, footer, couleurs globales)
│   ├── index.css        # Styles spécifiques à la page d’accueil
│   ├── about.css        # Styles spécifiques à la page “À propos”
│   └── contact.css      # Styles spécifiques à la page “Contact”
│
├── js/
│   ├── main.js          # Script global
│   ├── index.js         # Script pour la page d’accueil
│   ├── about.js         # Script pour la page “À propos”
│   └── contact.js       # Script pour la page “Contact”
│
└── assets/
    ├── images/          # Toutes les images du site
    └── icons/           # Icônes SVG ou PNG
```

### Bonnes pratiques à suivre

- Un fichier HTML par page du site (`index.html`, `about.html`, `contact.html`, etc.).  
- Un fichier CSS global (`style.css`) pour les styles communs : header, footer, typographie, couleurs, mise en page.  
- Un fichier CSS par page pour les styles spécifiques (`index.css`, `about.css`, etc.).  
- Un fichier JS global (`main.js`) pour les fonctions et interactions communes.  
- Un fichier JS par page pour les interactions propres à chaque page (`index.js`, `about.js`, etc.).  
- Toutes les ressources (images, icônes, etc.) sont regroupées dans le dossier `assets/`.  

---

## Utilisation et importation des fichiers

**Chaque page doit importer le fichier global `style.css`:**

```css
@import url("index.css");
@import url("about.css");
@import url("contact.css");
```

**Dans chaque page HTML, inclure uniquement le fichier CSS global, dans (`<head>`) :**

```html
<head>
  <link rel="stylesheet" href="styles/style.css">
</head>
```

**Pour les scripts JavaScript, inclure le fichier global, puis le fichier spécifique à la page, à la fin du fichier html:**

```html
  <script src="js/main.js"></script>
  <script src="js/about.js"></script>
</body>
```

### Pourquoi cette structure est efficace

**Lisibilité :** chaque fichier a un rôle clair et identifiable.

**Travail en équipe facilité :** chaque membre peut gérer une page ou un composant sans conflit.

**Modularité :** ajout de nouvelles pages ou sections sans désorganiser le projet.

**Maintenance simplifiée :** centralisation des styles et scripts facilite la mise à jour.

**Évolutif :** la structure peut facilement évoluer vers des outils plus avancés (préprocesseurs CSS, systèmes de build, etc.).

## Équipe
| Nom      | GitHub                                        |
|----------|-----------------------------------------------|
| Juliette | [ici](https://github.com/GigiJuliette)       |
| Cecile   | [ici](https://github.com/cecilepardo)        |
| Maxime   | [ici](https://github.com/maxloir-dev)        |
| Teddy    | [ici](https://github.com/Mob-y)              |
| Romain   | [ici](https://github.com/Romain-77)          |
| Thomas   | [ici](https://github.com/Thomaspupu)         |
| Joel     | [ici](https://github.com/grace)              |

