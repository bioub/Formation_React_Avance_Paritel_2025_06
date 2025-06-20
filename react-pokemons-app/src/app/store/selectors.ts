import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export function pokemonsSelector(state: RootState) {
  return state.pokemons.list;
}

export function pokemonsLoadingSelector(state: RootState) {
  return state.pokemons.loading;
}

export function pokemonsSelectedIdsSelector(state: RootState) {
  return state.pokemons.selectedPokemonIds;
}

export function pokemonsFilterSelector(state: RootState) {
  console.log('pokemonsFilterSelector called');
  return state.pokemons.filter;
}

// Memoized selector
export const filteredPokemonsSelector = createSelector(
  pokemonsSelector,
  pokemonsFilterSelector,
  (pokemons, filter) => {
    console.log('filteredPokemonsSelector called');
    const lowerCaseFilter = filter.toLowerCase();
    return pokemons.filter(pokemon => pokemon.name?.toLowerCase().includes(lowerCaseFilter));
  }
);
