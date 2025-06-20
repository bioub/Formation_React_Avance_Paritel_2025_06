import { combineReducers } from "@reduxjs/toolkit";
import { DEPOSIT, FETCH_POKEMONS, FETCH_POKEMONS_SUCCESS, WITHDRAW } from "./constants.js";


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

export function pokemonsReducer(state = initialState.pokemons, action) {
  switch (action.type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    default:
      return state;
  }
}

export function bankAccountReducer(state = initialState.bankAccount, action) {
  switch (action.type) {
    case DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    default:
      return state;
  }
}

const reducer = combineReducers({
  pokemons: pokemonsReducer,
  bankAccount: bankAccountReducer,
});

export default reducer;
