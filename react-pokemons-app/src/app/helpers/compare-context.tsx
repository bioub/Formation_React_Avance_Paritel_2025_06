import { createContext, PropsWithChildren, useContext, useState } from "react";

export interface CompareContext {
  selectedPokemonIds: number[];
  togglePokemonId: (id: number) => void;
}

export const CompareContext = createContext<CompareContext>({
  selectedPokemonIds: [],
  togglePokemonId: () => {
    throw new Error("CompareContext was not provided");
  },
});

type Props = PropsWithChildren<{}>;

export function useCompare() {
  return useContext(CompareContext);
}

function CompareProvider({ children }: Props) {
  const [selectedPokemonIds, setSelectedPokemonIds] = useState<number[]>([]);

  function togglePokemonId(id: number) {
    setSelectedPokemonIds((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((pid) => pid !== id);
      } else if (prevIds.length < 2) {
        return [...prevIds, id];
      } else {
        return prevIds;
      }
    });
  }

  return (
    <CompareContext.Provider value={{ selectedPokemonIds, togglePokemonId }}>
      {children}
    </CompareContext.Provider>
  );
}

export default CompareProvider;