import { useAppDispatch, useAppSelector } from '../store/hooks';
import { pokemonsFilterSelector } from '../store/selectors';
import { setFilter } from '../store/slices';

function PokemonSearch() {
  const term = useAppSelector(pokemonsFilterSelector);
  const dispatch = useAppDispatch();

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const term = event.target.value;
    dispatch(setFilter(term));
  }

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-content">
            <div className="input-field">
              <input
                type="text"
                placeholder="Rechercher un pokémon"
                value={term}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonSearch;
