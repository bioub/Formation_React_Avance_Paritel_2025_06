import { createSelector } from "@reduxjs/toolkit";

export function balanceSelector(state) {
  return state.bankAccount.balance;
}

export function pokemonsSelector(state) {
  return state.pokemons.list;
}

export function pokemonsLoadingSelector(state) {
  return state.pokemons.loading;
}

export function pokemonsFilterSelector(state) {
  return state.pokemons.filter;
}

// Memoized selector
export const filteredPokemonsSelector = createSelector(
  pokemonsSelector,
  pokemonsFilterSelector,
  (pokemons, filter) => {
    console.log('filteredPokemonsSelector called');
    const lowerCaseFilter = filter.toLowerCase();
    return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(lowerCaseFilter));
  }
);
