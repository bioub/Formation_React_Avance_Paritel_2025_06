import { configureStore } from '@reduxjs/toolkit';
import { pokemonsLoadingSelector, balanceSelector, pokemonsFilterSelector, filteredPokemonsSelector } from './selectors.js';
import { bankAccountReducer, deposit, fetchPokemons, fetchPokemonsSuccess, pokemonsReducer, withdraw } from './slices.js';


const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    bankAccount: bankAccountReducer,
  },
});

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
