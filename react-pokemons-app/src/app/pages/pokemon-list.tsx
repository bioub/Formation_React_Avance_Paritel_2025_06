import { useState, useEffect } from 'react';
import { Pokemon } from '../models/pokemon';
import PokemonCard from '../components/pokemon-card';
import { getPokemons } from '../services/pokemon-service';
import { Link, Navigate } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
import { isAuthenticated } from '../services/authentication-service';
import List from '../components/list';
import { useCompare } from '../helpers/compare-context';
import { useDispatch, useSelector } from 'react-redux';
import { filteredPokemonsSelector } from '../store/selectors';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchPokemons, fetchPokemonsSuccess } from '../store/slices';
// import { utils, writeFile } from 'xlsx';

function PokemonList() {
  const { selectedPokemonIds } = useCompare();
  // const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const pokemons = useAppSelector(filteredPokemonsSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
    // dispatch(fetchPokemons());
    // getPokemons().then((pokemons) => dispatch(fetchPokemonsSuccess(pokemons)));
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          <PokemonSearch />
          <List
            items={pokemons}
            renderItem={(pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            )}
          />
          {/* {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))} */}
        </div>
      </div>
      <Link
        className="btn-floating btn-large waves-effect waves-light red z-depth-3"
        style={{ position: 'fixed', bottom: '25px', right: '25px' }}
        to="/pokemon/add"
      >
        <i className="material-icons">add</i>
      </Link>
      {selectedPokemonIds.length === 2 && (
        <Link
          className="btn-floating btn-large waves-effect waves-light blue z-depth-3"
          style={{ position: 'fixed', bottom: '25px', right: '175px' }}
          to="/pokemons/compare"
        >
          <i className="material-icons">compare</i>
        </Link>
      )}
      <button
        className="btn-floating btn-large waves-effect waves-light green z-depth-3"
        style={{ position: 'fixed', bottom: '25px', right: '100px' }}
        onClick={() => {
          import('xlsx').then(({ utils, writeFile }) => {
            const worksheet = utils.json_to_sheet(pokemons);
            const workbook = utils.book_new();
            utils.book_append_sheet(workbook, worksheet, 'Pokémons');
            writeFile(workbook, 'pokemons.xlsx');
          });
        }}
      >
        <i className="material-icons">download</i>
      </button>
    </div>
  );
}

export default PokemonList;
