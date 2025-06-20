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

export function filteredPokemonsSelector(state) {
  const filter = pokemonsFilterSelector(state).toLowerCase();
  return pokemonsSelector(state).filter(pokemon => pokemon.name.toLowerCase().includes(filter));
}
