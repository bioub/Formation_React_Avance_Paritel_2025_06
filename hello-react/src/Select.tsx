import { ReactNode, useEffect, useState } from 'react';
import styles from './Select.module.css';

type SelectProps = {
  readonly items: string[];
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly renderItem?: (item: string) => ReactNode;
};

// React.createElement(Select, {});

/**
 * Select component for choosing an item from a list.
 */
function Select({ items, value, onChange, renderItem }: SelectProps ): ReactNode {
  console.log('SELECT');

  useEffect(() => {
    console.log('Effect');
    
  }, []);
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.Select}>
      <div className={styles.selected} onClick={() => setMenuOpen(!menuOpen)}>
        {value}
      </div>
      {menuOpen && (
        <div className={styles.menu}>
          {items.map(item => (
            <div key={item} className={styles.menuItem} onClick={() => {
              onChange(item);
              setMenuOpen(false);
            }}>
              {renderItem ? renderItem(item) : item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select;