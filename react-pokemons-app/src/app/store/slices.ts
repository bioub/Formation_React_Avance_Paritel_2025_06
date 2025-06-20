import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../models/pokemon';
import { getPokemons } from '../services/pokemon-service';

type PokemonsState = {
  list: Pokemon[];
  loading: boolean;
  filter: string;
  selectedPokemonIds: number[];
};

const pokemonsInitialState: PokemonsState = {
  list: [],
  loading: false,
  filter: '',
  selectedPokemonIds: [],
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
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    togglePokemonSelection: (state, action: PayloadAction<number>) => {
      if (state.selectedPokemonIds.includes(action.payload)) {
        return {
          ...state,
          selectedPokemonIds: state.selectedPokemonIds.filter((pid) => pid !== action.payload),
        }
      } else if (state.selectedPokemonIds.length < 2) {
        state.selectedPokemonIds.push(action.payload);
      }
    }
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

export const { setFilter, togglePokemonSelection } = pokemonsSlice.actions;
export const pokemonsReducer = pokemonsSlice.reducer;
