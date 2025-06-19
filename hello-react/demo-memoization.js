import { memoize } from 'lodash-es';

let pokemons = new Array(1_000_000).fill(0).map((_, i) => ({
  id: i + 1,
  name: `Pokemon ${i + 1}`,
  type: Math.floor(Math.random() * 2) % 2 === 0 ? 'Fire' : 'Water',
}));

// La memoization est une technique qui permet de mémoriser les résultats d'une fonction
// ne fonctionne que si la fonction est pure
function getPokemonsByType(pokemons, type) {
  console.log(`Fetching pokemons of type: ${type}`);
  return pokemons.filter(pokemon => pokemon.type === type);
}

const memoizedGetPokemonsByType = memoize(getPokemonsByType);


console.time('getPokemonsByType Fire');
console.log(`Found ${memoizedGetPokemonsByType(pokemons, 'Fire').length} Fire pokemons`);
console.timeEnd('getPokemonsByType Fire');

console.time('getPokemonsByType Fire');
console.log(`Found ${memoizedGetPokemonsByType(pokemons, 'Fire').length} Fire pokemons`);
console.timeEnd('getPokemonsByType Fire');

console.time('getPokemonsByType Fire');
console.log(`Found ${memoizedGetPokemonsByType(pokemons, 'Fire').length} Fire pokemons`);
console.timeEnd('getPokemonsByType Fire');

// Avec la memoization, on ne peut pas mettre à jour le tableau
// ou l'objet existant de façon muable
// pokemons.push({
//   id: pokemons.length + 1,
//   name: `Pokemon ${pokemons.length + 1}`,
//   type: 'Fire',
// });

pokemons = [
  ...pokemons,
  {
    id: pokemons.length + 1,
    name: `Pokemon ${pokemons.length + 1}`,
    type: 'Fire',
  },
]

console.time('getPokemonsByType Fire');
console.log(`Found ${memoizedGetPokemonsByType(pokemons, 'Fire').length} Fire pokemons`);
console.timeEnd('getPokemonsByType Fire');