Code : RNgsqjw36

# Exercices

Formation initiation originale : https://www.youtube.com/watch?v=oCINeytlyRA

Récupérer le projet https://gitlab.com/react-avance/react-pokemons-app

Installer les dépendances avec `npm install` ou `yarn install`

Lancer le serveur de dev avec `npm run start` ou `yarn start`

Lancer l'API REST avec `npm run start:api` ou `yarn start:api`

# Exercice 1 : Rappels

Créer un nouveau composant `src/app/components/pokemon-card-details.tsx` dont le JSX reprend les lignes 26 à 84
de `src/app/pages/pokemon-detail.tsx`

Ce nouveau composant reçoit l'objet pokemon en props, le typer en TypeScript.

Remplacer ensuite les lignes 26 à 84 de `src/app/pages/pokemon-detail.tsx` par ce nouveau composant

Créer une nouvelle page `src/app/pages/pokemon-compare.tsx` contenant le JSX suivant :

```jsx
<div className="row">
  <div className="col s6">
    <PokemonCardDetails pokemon={pokemon1} />
  </div>
  <div className="col s6">
    <PokemonCardDetails pokemon={pokemon2} />
  </div>
</div>
```

Les variables `pokemon1` et `pokemon2` doivent contenir les pokemon dont les ids sont `1` et `2`, utiliser le
service `getPokemon` pour les récupérer.

Créer la route dans `app.tsx`, l'URL peut etre par exemple `/pokemons/compare`

Créer un bouton en bas de la page `src/app/pages/pokemon-list.tsx`, sur son click appeler la méthode navigate (voir par
exemple `src/app/components/pokemon-card.tsx`)

Dans le composant `src/app/components/pokemon-card.tsx` déplacer le `onClick` sur un bouton "Details" dans la carte (on
se servira du click de la carte pour séléctionner les éléments à comparer), ajouter une checkbox pour sélectionner le pokemon à comparer, à ce stade, cocher uniquement la checkbox si l'id du pokemon vaut `1` ou `2`.

## Exercice 2 : Fragments + Render Props

Créer un nouveau composant List dans `src/app/components/list.tsx` en partant du code suivant :

```ts
import type { ReactNode } from 'react';

type Props = {

};

function List({ items, renderItem }: Props): ReactNode {

}

export default List;
```

Compléter le type Props pour matcher items (type any ou generic) et renderItem (param de type any ou generic, qui retourne ReactNode)

Dans ce composant List nous allons boucler sur les items et afficher dans le JSX le retour de la fonction `renderItem`, ce JSX sera encapsulé dans un Fragment.

Utiliser ce composant List à la place de `pokemons.map` dans le composant `src/app/pages/pokemon-list.tsx` (on verra demain l'intérêt d'avoir un composant ici)

Idem pour le `.map` à la ligne 326 de `src/app/components/pokemon-form.tsx`

## Exercice 3 : Context

Créer un context `CompareContext` en s'inspirant de l'exemple :
[https://github.com/formation-tech/react-communication/tree/master/src/example-context-with-hooks](https://github.com/formation-tech/react-communication/tree/master/src/example-context-with-hooks)

Créer une interface ou un type TypeScript pour le context et l'exporter.

Au moment d'appeler createContext : `createContext<TypeDefini>(valeurSiNonProvided)`

L'idée est de stocker les id des pokemons à comparer dans le context (en utilisant par exemple un tableau), il faudra limiter à 2 pokemons (vous pouvez augmenter la limite si vous le souhaitez mais il faudra jouer sur le nombre de colonnes dans la page `PokemonCompare`).

Dans `src/app/components/pokemon-card.tsx` écouter le change de la checkboxpour sélectionner ou déselectionner le Pokemon à comparer. Le lien vers la page `/pokemons/compare` ne devrait être actif que s'il y a 2 pokemons à comparer.

## Exercice 4 : Custom Hooks

Créer un custom hook `useSelectedPokemons()` qui retourne les pokemons sélectionnés dans le context et l'utiliser dans `PokemonCompare`.

## Exercice 5 : Optimisation

Télécharger, installer les dépendances puis lancer le projet :
http://gitlab.com/react-avance/exercices-optimisation

NE PAS FAIRE EXERCICES 1 ET 3

## Exercice 6 : Redux

Nous allons migrer `CompareContext` vers Redux.

On va intéragir avec la clé `selectedPokemonIds` du state `pokemons` (de type `number[]`)

Le state pokemon stocké dans Redux sera donc de la forme :
```
{
  list: [], // tableau de pokemons,
  loading: false, // est-ce qu'une requete est en cours,
  filter: '', // le contenu du champ de recherche
  selectedPokemonIds: [2, 5], // les ids des pokemons à comparer
}
```

Modifier le slice pour traiter l'action `togglePokemonSelection` et exporter l'action creator, le code du reducer est similaire à ce qu'on faisait dans `CompareProvider` (ajouter/supprimer du tableau)

Tester avec Redux DevTools en faisant des dispatch de l'action :

```
{
type: 'pokemons/togglePokemonSelection',
payload: 2, // l'id du pokemon sélectionné
}
```

Utiliser `useAppDispatch` pour créer l'action `togglePokemonSelection` lorsqu'on clique sur la checkbox dans `PokemonCard` (à la place de `togglePokemonSelection` qui venait du context)

Créer et utiliser `selectedPokemonIdsSelector` pour récupérer les `selectedPokemonIds` dans `PokemonCard` et cocher la checkbox en fonction de si l'id est dans le tableau.
