Code : RNgsqjw36

# Exercices

Formation initiation originale : https://www.youtube.com/watch?v=oCINeytlyRA

Récupérer le projet https://gitlab.com/react-avance/react-pokemons-app

Installer les dépendances avec `npm install` ou `yarn install`

Lancer le serveur de dev avec `npm run dev` ou `yarn dev`

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

Compléter le type Props pour matcher items (type string ou generic) et renderItem (param de type string ou generic, qui retourne ReactNode)

Dans ce composant List nous allons boucler sur les items et afficher dans le JSX le retour de la fonction `renderItem`, ce JSX sera encapsulé dans un Fragment.

Utiliser ce composant List à la place de `pokemons.map` dans le composant `src/app/pages/pokemon-list.tsx` (on verra demain l'intérêt d'avoir un composant ici)

Idem pour le `.map` à la ligne 326 de `src/app/components/pokemon-form.tsx`