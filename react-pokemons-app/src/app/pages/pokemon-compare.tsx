import { useEffect, useState } from "react";
import PokemonCardDetails from "../components/pokemon-card-details";
import { Pokemon } from "../models/pokemon";
import Loader from "../components/loader";
import { getPokemon } from "../services/pokemon-service";

function PokemonCompare() {
  const [pokemon1, setPokemon1] = useState<Pokemon | undefined>(undefined);
  const [pokemon2, setPokemon2] = useState<Pokemon | undefined>(undefined);
  
  useEffect(() => {
    getPokemon(1).then((pokemon) => setPokemon1(pokemon));
    getPokemon(2).then((pokemon) => setPokemon2(pokemon));
  }, []);

  if (!pokemon1 || !pokemon2) {
    return <Loader />;
  }

  return (
    <div className="row">
      <div className="col s6">
        <PokemonCardDetails pokemon={pokemon1} />
      </div>
      <div className="col s6">
        <PokemonCardDetails pokemon={pokemon2} />
      </div>
    </div>
  );
}

export default PokemonCompare;