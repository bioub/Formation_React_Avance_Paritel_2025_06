// Flux Standard Action
// Convention:
// - Action type is a string constant
// - Action payload is une valeur

import { DEPOSIT, FETCH_POKEMONS, FETCH_POKEMONS_SUCCESS, WITHDRAW } from "./constants.js";

export function deposit(amount) {
  return {
    type: DEPOSIT,
    payload: amount,
  };
}

export function withdraw(amount) {
  return {
    type: WITHDRAW,
    payload: amount,
  };
}

export function fetchPokemons() {
  return {
    type: FETCH_POKEMONS,
  };
}

export function fetchPokemonsSuccess(pokemons) {
  return {
    type: FETCH_POKEMONS_SUCCESS,
    payload: pokemons,
  };
}
