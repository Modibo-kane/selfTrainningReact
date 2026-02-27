# Comprendre le cycle de vie d'un composant

Dans React chaque composant passe par different phases de vie,  un peu comme le cycle de l'eau. C'est phases s'appellent *le cycle de vie* d'un composant et comprennent principalement trois étapes:

**Montage** (Mounting): C'est le moment où le composant est crée et inséré dans le DOM? C'est à dire la structure de la page web, c'est ici que le composant est installé

**Mise à jour** (Updating): Se produit lorsque le composant est déja monté mais que quelque chose change, comme ses props (valeurs passées par le parent) ou son état (state). A chaque changement React met à jour le composan pour refleter ces nouvelles valeurs;

**Démontage** (Unmounting): C'est le moment où l composant est retiré du DOM. Cela se produit par exemple lorsque l'utilisateur change de page ou si le composant n'est plus nécésaire.

## A quoi ça sert contrètement ?

**Gestion de Ressources:** ça permet de configurer des ressources quand le composant est créer (montage) et de les libérer quand le composant est retiré (demontage). Par exemple, en démarrant ou arrêtant des abonnement ou des requête réseau( appel API)

**Synchronisationo des données** il est possible de mettre à jour l'affichage d'un composant lorsque de nouvelles données arrivent ou lorsque l'utilisateur interagit avec lui même (mise à jour)

**Performance Optimisée**: En exécutant le code seulement quand c'est nécéssaire, tu peux rendre ton application plus éfficace.
*Autrement dit ça permet un meilleur conotrôle*

## Introduction aux hooks et aux fonctioon d'effet

Aujourd'hui, avec les composants fonctionnels, on utilise principalement le hook useEffect pour gérer le cycle de vie.

*useEffect* est une fonction proposée par React qui te permet de gérer des effets de bord dans tes composant fonctionnels. Les effets de  bord sont des actions comme des requête de données, des abonnements des événement, ou encore la modifivation directe du DOM qui ne devraient pas se produire pendant le rendu du composant

```typescript
  useEffect(()=>{
    //code exécuter au montage 

    return ()=>{
      // code executer au démontage 
    }
  }, [])

  - 1 // le pemier argument est une fonction qui contient le code qui va être exétuter
  - 2 // le second argument est un tableau de dependance, si le tableau est vide([]), la fonction s'exécute seulement une fois au montage
  - 3 //si le tableau contient des variables, l'effet sera éxécuter à chaque changement de ces variables.
  - 4 // la fonction de retour (return )est utilisé ou nettoyer les ressources lorsque le composant est démonté 
```

## Utilisation du useEffect dans les differentes phases

**1.Montage**: Utilise useEffect avec un tableau de dependances vide pour éxecuter du code seulement au montage, par exemple pour récuperer des données.

```typescript
useEffect(() =>{
  console.log("composant monté")
  //fetch de données ici
}, []); // se déclance une seule foit au montage
```

**Mise à Jour**:  Utilise useEffect avec des dépendances pour éxecuter du code lorsque le composant changent. Par exemple, si tu veux synchroniser un élément du DOM avec une donné qui change

```typescript
useEffect(() =>{
  console.log("composant monté")

}, [age]); // se déclance lorsque les dépendances changent
```

**3.Demontage**:
Utilise la fonction de retour dans un useffect pour nettoyer les ressources

```typescript
useEffect(() =>{
  const timer = setInterval(()=>{
    console.log("timer éxécuter");
  }, 1000);

  //Nettoyage
  return ()=>{
    clearInterval(timer);
    console.log("composant démonté")
  }

}, []); // se déclance lorsque les dépendances changent
```
