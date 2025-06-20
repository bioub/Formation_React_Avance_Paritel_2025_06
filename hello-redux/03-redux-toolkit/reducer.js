import { combineReducers, createReducer } from "@reduxjs/toolkit";
// import { DEPOSIT, FETCH_POKEMONS, FETCH_POKEMONS_SUCCESS, WITHDRAW } from "./constants.js";
import { deposit, withdraw, fetchPokemons, fetchPokemonsSuccess } from "./actions.js";

const initialState = {
  pokemons: {
    filter: '',
    list: [],
    loading: false,
  },
  bankAccount: {
    balance: 0,
  }
};

// export function pokemonsReducer(state = initialState.pokemons, action) {
//   switch (action.type) {
//     case fetchPokemons.type:
//       return {
//         ...state,
//         loading: true,
//       };
//     case fetchPokemonsSuccess.type:
//       return {
//         ...state,
//         loading: false,
//         list: action.payload,
//       };
//     default:
//       return state;
//   }
// }

export const pokemonsReducer = createReducer(initialState.pokemons, (builder) => {
  builder
    .addCase(fetchPokemons, (state) => {
      state.loading = true;
    })
    .addCase(fetchPokemonsSuccess, (state, action) => {
      state.loading = false;
      state.list = action.payload;
    });
});

// export function bankAccountReducer(state = initialState.bankAccount, action) {
//   switch (action.type) {
//     case deposit.type:
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//       };
//     case withdraw.type:
//       return {
//         ...state,
//         balance: state.balance - action.payload,
//       };
//     default:
//       return state;
//   }
// }

export const bankAccountReducer = createReducer(initialState.bankAccount, (builder) => {
  builder
    .addCase(deposit, (state, action) => {
      // Le code muable est traduit en code immuable (immer.js)
      state.balance += action.payload;
      // Pour rester en version immuable, on utilise return
      // return {
      //   ...state,
      //   balance: state.balance + action.payload,
      // };
    })
    .addCase(withdraw, (state, action) => {
      state.balance -= action.payload;
    });
});

