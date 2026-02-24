# Introduction aux props

Les props (propriétés) sont des argument passé aux composants React, autrement dit ce sont ces informations transmises
Ils permettent tous simplement d'envoyer des données d'un composant parent à un composant enfant.
C'est ce qui va permettre de personnalisé un composant et de le rendre réutilisable

## Syntaxe des props

Syntaxte dans le tsx pour passer les propres aux composants

```typescript
  <Character genre="homme" age={58} accessoir="lunette" />
```

Il est possible de passer des fonctions et des variables en props d'un composant:

```typescript
  const variableLook = "hip-hop";
  const functionLook = ()=> {console.log("Hello World")};

  <Character look ={variableLook} action={functionLook}/>

```

## Conditionnement des Props

les composants enfants disposent de propriété et diennent capable de les étudier, de traivailler et de rendre du tsx conditionné.

```typescript
  function Enfant (props){
    if(props.genre === homme){
      return <h1>Je suis un homme</h1>
    } else if (props.genre === femme){
      return <h1>Je suis une femme</h1>
    } else {
      return <h1>Vous n avez pas indiquez votre genre </h1>
    }
  }

```

## Destructuring

Pour eviter l'utilisation de `props.xxx`, il est possible de *destructurer* les props afin d'y acceder directement par leur noms

```typescript
  const MonComposant = ({nom, age})=>{
    // utilisations des variables destructurées 
    console.log(nom, age)

    // au lieu de 
    // console.log(props.nom, props.age)
  }
```

- *Attention Le destructuring ici, impose que les props nom et prenom soit passé obligatoirement*

## Props children

Comme vu dans les exercices précedent un composant React peut utiliser des balises fermantes et/ou autofermantes

```typescript
// Balise auto fermante
  <AutreComposant />

// Balise ouvrante/fermante
<AutreComposant>
  <h1>Afficher ce contenue tsx </h1>
</AutreComposant>
```

Avec React on utilise *children* pour faire réference au contenu passé entre les balises d'un composant.

```typescript
const Composant =( {children}) => <div> {Children} </div>
```
