import type { ReactNode } from 'react';

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

function List<T>({ items, renderItem }: ListProps<T>) {
  return <>{items.map((item) => renderItem(item))}</>;
}

export default List;

// Usage example:
// List({ items: ['Item 1', 'Item 2'], renderItem: (item) => <div key={item}>{item}</div> });
// List<string>({ items: ['Item 1', 'Item 2'], renderItem: (item) => <div key={item}>{item}</div> });

// Avec React on ne peut pas préciser le type générique en JSX
// Par contre l'inférence de type fonctionne bien