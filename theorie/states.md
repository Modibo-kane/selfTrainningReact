# Introducion aux States dans React.js

**Qu'est ce qu'un state ?**
  Un State c'est comme une mini-mémoire qui permet à ton application de se souvenir des données qui peuvent changer au fil du temps  (comme le nombre d'article dans un panier)

**Pourquoi les states sont-ils éssentiels ?**
  Les states sont crutiaux pour rendre tes composant React interactifs et dynamiques

  Avec un state tu peux definir qu'un composant est fermé (comme une fenêtre modale) puis mémoriser qu'elle est ouverte suite à une action, afin de la maintenir affichée dans la vue de ton application

## Methode useState

```typescript
  import {useState} from 'react'

  function MyState(){
    const [count, SetCount] = useState(0);

    // count ==> Variable
    // setCount ==>Fonction de mise à jour
    // (0) ==> valeur d'origine
  }

--------------------------------------Exemple--------------------

function MyCounterComponent(){
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Cliqué {count} fois
    </button>
  )
}

```
