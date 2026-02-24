# les typages de variable

Pour types une variable en typeScript, il existe deux manières de faire :

**Déclaration explicite** : On spécifie le type de la variable directement lors de sa déclaration.

```typescript
let age: number = 30;

```

**Déclaration implicite** (à privilégier) : TypeScript infère le type de la variable en fonction de la valeur qui lui est assignée.

```typescript
let name = "Alice"; // TypeScript infère(deduit) que 'name' est de type 'string'

```

## Le typage de fonction

Pour typer une fonction en TypeScript, il faut en tout premier lieu connaitre ces trois points:

- *le nom de la fonction*: pour savoir exactement ou comment les paramètres (parfois utiles),
- *le types des paramètres*: vue que les paramètre se sont des variables dans une extrapolation jsx (un objet), il faudra connaitre le type de ce objet qui depend du types de ces proprietés,
- *le types que la fonction return (de préférence laisser le compilateur l'inferer)*: si la fonction renvoi quelque chose alors sont type sera le type de cette reponse sinon rien `void`

```typescript

function add(a: number, b: number): number {
  return a + b;
}

```

*NB:* `Any` est type que le compilateur TypeScript déteste. Lorque le compilateur n'arrive pas à inferer le type d'une variable, il lui attribue le type `any`, ce qui signifie que la variable peut être de n'importe quel type. Cela peut entraîner des erreurs à l'exécution, car le compilateur ne peut pas vérifier les types des opérations effectuées sur cette variable. Il est donc recommandé d'éviter d'utiliser le type `any` autant que possible et de fournir des types explicites pour les variables et les fonctions.

- Quand une variable est déclarée sans être initialisée, elle est automatiquement de type `any`. Par exemple :

```typescript
let myVariable; // myVariable est de type 'any' car elle n'est pas initialisée

```

- Quand une variable présente un type `any`, por connaitre son vrai type, il toujours venir sur son contexe d'utilisation.
- Le type d'un objet est déterminer par le type de ces propriétés. Par exemple :

```typescript
let person = {
  name: "Alice",
  age: 30
};
// Le type de 'person' est { name: string; age: number }

//cas d'utilisation dans une fonction

function greet(person: { name: string; age: number }) {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

```

## Les types personnalisés ou custom types

Pour créer des types personnalisés en TypeScript, on peut utiliser les ``interfaces``, les ``types`` ,``alias`` et les ``classes``.

*NB* Les types commencent toujours par des majuscules pour les différencier des variables.

- **Interface** : Une interface définit uniquement la structure d'un objet, en spécifiant les propriétés et leurs types.

```typescript
interface Person {
  name: string;
  age: number;
}

```

- **Type alias** : Un type alias permet de créer un nouveau nom pour un type existant, ce qui peut être utile pour simplifier les types complexes ou pour donner un nom plus significatif à un type.

```typescript
type Point = {
  x: number;
  y: number;
};

```

- **Classe** : Une classe est une structure qui peut contenir des propriétés et des méthodes, et qui peut être instanciée pour créer des objets.

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

```

## Typé un composant

Pour typer un composant en TypeScript, la prèmiere des chose à savoir c'est qu'un composant est une fonction donc typé un composant revient à typé une fonction. Et là on sait déja comment typé une fonction, dans ce cas il faudra juste utilisé un custom type pour des soucis de clarter et de reutillisations

## le typage d'un évenement

exemple d'un formulaire:

```typescript
function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  // Traitement du formulaire
}

// Utilisation du composant de formulaire
<form onSubmit={handleSubmit}>

```

Ici pour connaitre le type de l'evenement `event`, il faut regarder sa position et là on voit que c'est un paramètre d'une function du nom de `handleSubmit`. De la, il faut partir à la reference d'utilisation (là ou il est appelé) de cet handleSubmit et le remplacer par sa reference d'expression (là ou il est decris ) et ainsi le compilateur typeScript va inferer  notre place le type de l'évenement vue que le lieu d'appel de handleSubmit est un écouteur d'evenemrnt et en survolant on ajoute à copier  le type donner par le compilateur(`React.FormEvent<HTMLFormElement>`) et à le coller devant le paramètre event

## Typage d'un hook

Pour typé un hook, il faut préciser toutes les valeurs potentielles du hook.
exemple avec un useState

```typescript
const [count, setCount] = useState<number>(0);


```

Ici, nous avons utilisé le hook `useState` pour créer une variable d'état `count` de type `number`. En fournissant `<number>` comme argument générique à `useState`, nous indiquons que `count` doit être de type `number`. Cela permet au compilateur TypeScript de vérifier que nous n'assignons pas de valeurs non numériques à `count` et que nous utilisons correctement la fonction `setCount` pour mettre à jour l'état.

Donc, pour typé un hook, il suffit de fournir le type de la valeur d'initialisation du hook en tant qu'argument générique lors de son utilisation.
