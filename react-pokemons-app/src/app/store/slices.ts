import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Pokemon } from '../models/pokemon';
import { getPokemons } from '../services/pokemon-service';

type PokemonsState = {
  list: Pokemon[];
  loading: boolean;
  filter: string;
};

const pokemonsInitialState: PokemonsState = {
  list: [],
  loading: false,
  filter: '',
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: pokemonsInitialState,
  reducers: {
    // fetchPokemons: (state) => {
    //   state.loading = true;
    // },
    // fetchPokemonsSuccess: (state, action) => {
    //   state.loading = false;
    //   state.list = action.payload;
    // },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      });
  },
});

export const fetchPokemons = createAsyncThunk(
  'pokemons/fetchPokemons',
  async () => {
    const pokemons = await getPokemons();
    return pokemons;
  }
);

export const { setFilter } = pokemonsSlice.actions;
export const pokemonsReducer = pokemonsSlice.reducer;
