// Flux Standard Action
// Convention:
// - Action type is a string constant
// - Action payload is une valeur

import { createAction } from "@reduxjs/toolkit";
// import { DEPOSIT, FETCH_POKEMONS, FETCH_POKEMONS_SUCCESS, WITHDRAW } from "./constants.js";

// function createAction(type) {
//   return (payload) => ({
//     type,
//     payload,
//   });
// }

export const deposit = createAction('DEPOSIT');
export const withdraw = createAction('WITHDRAW');
export const fetchPokemons = createAction('FETCH_POKEMONS');
export const fetchPokemonsSuccess = createAction('FETCH_POKEMONS_SUCCESS');

// console.log(deposit(100));  // { type: 'DEPOSIT', payload: 100 }
// console.log(deposit.type);  // DEPOSIT
