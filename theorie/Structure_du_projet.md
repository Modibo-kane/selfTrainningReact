# Structure du projet

Après installation, tu auras une arborescence comme ceci :

my-app/
 ├─ src/
 │   ├─ App.tsx        # Composant principal
 │   ├─ main.tsx       # Point d’entrée
 │   └─ vite-env.d.ts  # Types spécifiques à Vite
 ├─ tsconfig.json      # Configuration TypeScript
 ├─ package.json
 └─ index.html

**Exemple simple**
*En JavaScript*:

```js
  function Hello({ name }) {
    return <h1>Hello {name}</h1>;
  }
```

*En TypeScript* il faut définir les types des props pour que TypeScript puisse vérifier que tu passes les bonnes données au composant:

````ts
  type HelloProps = {
    name: string;
  };

  function Hello({ name }: HelloProps) {
    return <h1>Hello {name}</h1>;
  }

  // ici on passe un nomber au lieu d'un string, typeScript va le signaler avant même d'éxecuter le code 

```
