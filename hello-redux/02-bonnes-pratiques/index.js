import { legacy_createStore } from 'redux';
import reducer from './reducer.js';
import { deposit, fetchPokemons, fetchPokemonsSuccess, withdraw } from './actions.js';
import { pokemonsLoadingSelector, balanceSelector, pokemonsFilterSelector, filteredPokemonsSelector } from './selectors.js';


const store = legacy_createStore(reducer);

// console.log('initial state', store.getState());

// PokemonList
store.subscribe(() => {
  console.log('--- PokemonList ---');
  console.log('Loading', pokemonsLoadingSelector(store.getState()));
  console.log('Filter', pokemonsFilterSelector(store.getState()));
  console.log('Pokemons', filteredPokemonsSelector(store.getState()));
});

// Account
store.subscribe(() => {
  console.log('--- Account ---');
  console.log('Balance', balanceSelector(store.getState()));
});

// Dispatch an action to change the state
// Account actions
store.dispatch(deposit(100));
store.dispatch(withdraw(50));

// Pokemon actions
store.dispatch(fetchPokemons());
store.dispatch(fetchPokemonsSuccess([{id: 1, name: 'Bulbasaur'}]));
// console.log('final state', store.getState());
