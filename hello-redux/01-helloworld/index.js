import { legacy_createStore } from 'redux';

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

// Fonction Pure
// - Prédictive (appelée avec le même état et la même action, elle retourne le même état)
// - Ne modifie pas l'état passé en paramètre (immutabilité)
// - Ne produit pas d'effets de bord (pas de console.log, pas de requêtes réseau, etc.)
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'DEPOSIT':
      return {
        ...state,
        bankAccount: {
          ...state.bankAccount,
          balance: state.bankAccount.balance + action.amount,
        },
      };
    case 'WITHDRAW':
      return {
        ...state,
        bankAccount: {
          ...state.bankAccount,
          balance: state.bankAccount.balance - action.amount,
        },
      };
    case 'FETCH_POKEMONS':
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          loading: true,
        },
      };
    case 'FETCH_POKEMONS_SUCCESS':
      return {
        ...state,
        pokemons: {
          ...state.pokemons,
          loading: false,
          list: action.pokemons,
        },
      };
    default:
      return state;
  }
}


const store = legacy_createStore(reducer);

// console.log('initial state', store.getState());

// PokemonList
store.subscribe(() => {
  console.log('--- PokemonList ---');
  console.log('Loading', store.getState().pokemons.loading);
  console.log('Filter', store.getState().pokemons.filter);
  console.log('Pokemons', store.getState().pokemons.list);
});

// Account
store.subscribe(() => {
  console.log('--- Account ---');
  console.log('Balance', store.getState().bankAccount.balance);
});

// Dispatch an action to change the state
store.dispatch({ type: 'DEPOSIT', amount: 100 });
store.dispatch({ type: 'WITHDRAW', amount: 50 });
store.dispatch({ type: 'FETCH_POKEMONS' });
store.dispatch({ type: 'FETCH_POKEMONS_SUCCESS', pokemons: [{id: 1, name: 'Bulbasaur'}] });
// console.log('final state', store.getState());
