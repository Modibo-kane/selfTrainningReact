# Todo List App

Une application de liste de tâches moderne développée avec React et TypeScript.

## Fonctionnalités

- ✅ Ajouter de nouvelles tâches
- ✅ Marquer les tâches comme terminées
- ✅ Supprimer des tâches
- ✅ Compteur de tâches restantes
- ✅ Interface responsive

## Structure du projet

```html
src/
├── components/
│   ├── TaskContainer.tsx      # Composant principal
│   ├── taskInput/
│   ├── taskList/
│   ├── taskItem/
│   ├── header/
│   └── footer/
├── hooks/
│   └── useTasks.ts           # Hook personnalisé pour la logique des tâches
├── types/
│   └── index.ts              # Types TypeScript centralisés
└── styles/
    └── *.module.css          # Styles modulaires
```

## Technologies utilisées

- **React 18** avec hooks
- **TypeScript** pour le typage
- **CSS Modules** pour le styling
- **Vite** pour le bundling

## Scripts disponibles

```bash
npm install          # Installer les dépendances
npm run dev         # Démarrer le serveur de développement
npm run build       # Build pour la production
npm run preview     # Prévisualiser le build
```

## Améliorations apportées

### Code plus propre

- **Types centralisés** : Tous les types dans `src/types/index.ts`
- **Hook personnalisé** : `useTasks` pour la logique métier
- **Nommage cohérent** : Props et fonctions descriptives
- **Performance** : `useCallback` pour éviter les re-renders inutiles

### Architecture

- **Séparation des responsabilités** : Chaque composant a un rôle clair
- **Props drilling évité** : Utilisation de context ou hooks personnalisés
- **Immutabilité** : Pas de mutation directe des états

## Fonctionnement

1. **Ajouter une tâche** : Saisir du texte et appuyer sur Entrée ou cliquer sur "Ajouter"
2. **Marquer comme terminée** : Cliquer sur l'élément de la tâche
3. **Supprimer** : Cliquer sur le bouton "x" de la tâche

## Tests

```bash
npm run test        # Exécuter les tests (à implémenter)
```

## Déploiement

L'application peut être déployée sur :

- Vercel
- Netlify
- GitHub Pages
- Tout serveur statique

## Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request
