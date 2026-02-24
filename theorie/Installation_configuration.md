# Installation et configuration

**1.1. Choisir un outil de démarrage**
Il existe deux façon d'installer un projet react:
*CRA*: Create React App --> qui est l'ancienne methode mais moins utilisé aujourd'hui
*Vite*  plus rapide, moderne et recommandé et c'est lui qu'on a utilisé tout au long du programme

**1.2. Créer un projet avec Vite + TypeScript**
Dans le terminal:

```bash
  # Créer un projet avec Vite et React + TS
  npm create vite@latest my-app -- --template react-ts

  # Aller dans le dossier
  cd my-app

  # Installer les dépendances
  npm install

  # Lancer le serveur
  npm run dev

```

**Ajout de TypeScript à un projet React existant**
npm install --save-dev @types/react @types/react-dom
