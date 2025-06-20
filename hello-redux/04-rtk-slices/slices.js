import { createSlice } from "@reduxjs/toolkit";

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

const bankAccountSlice = createSlice({
  name: 'bankAccount',
  initialState: initialState.bankAccount,
  reducers: {
    deposit: (state, action) => {
      state.balance += action.payload;
    },
    withdraw: (state, action) => {
      state.balance -= action.payload;
    }
  }
});

export const { deposit, withdraw } = bankAccountSlice.actions;
export const bankAccountReducer = bankAccountSlice.reducer;

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: initialState.pokemons,
  reducers: {
    fetchPokemons: (state) => {
      state.loading = true;
    },
    fetchPokemonsSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export const { fetchPokemons, fetchPokemonsSuccess, setFilter } = pokemonsSlice.actions;
export const pokemonsReducer = pokemonsSlice.reducer;
