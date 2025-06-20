import { useEffect, useState } from "react";
import PokemonCardDetails from "../components/pokemon-card-details";
import { Pokemon } from "../models/pokemon";
import Loader from "../components/loader";
import { getPokemon } from "../services/pokemon-service";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { pokemonsSelectedIdsSelector } from "../store/selectors";

function PokemonCompare() {
    const selectedPokemonIds = useAppSelector(pokemonsSelectedIdsSelector);
  
  const navigate = useNavigate();

  const [pokemons, setPokemons] = useState<(Pokemon | undefined)[]>([]);

  useEffect(() => {
    if (selectedPokemonIds.length === 2) {
      Promise.all(selectedPokemonIds.map(id => getPokemon(id))).then((pokemons) => {
        setPokemons(pokemons);
      });
    }
  }, [selectedPokemonIds]);

  if (selectedPokemonIds.length !== 2) {
    navigate("/pokemons");
    return null;
  }

  if (!pokemons.length) {
    return <Loader />;
  }

  if (pokemons[0] === undefined || pokemons[1] === undefined) {
    return (
      <div className="container">
        <h1 className="center">Pokémon not found</h1>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col s6">
        <PokemonCardDetails pokemon={pokemons[0]} />
      </div>
      <div className="col s6">
        <PokemonCardDetails pokemon={pokemons[1]} />
      </div>
    </div>
  );
}

export default PokemonCompare;