import { forwardRef, ReactNode, use, useEffect, useImperativeHandle, useRef, useState } from 'react';
import styles from './Select.module.css';

type SelectProps = {
  readonly items: string[];
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly renderItem?: (item: string) => ReactNode;
};

export interface SelectRef {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

// React.createElement(Select, {});

/**
 * Select component for choosing an item from a list.
 */
const Select = forwardRef<SelectRef, SelectProps>(
  function Select({ items, value, onChange, renderItem }: SelectProps, ref ): ReactNode {
  // console.log('SELECT');

  // useEffect(() => {
  //   console.log('Effect');
  // }, []);
  
  const [menuOpen, setMenuOpen] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => setMenuOpen(true),
    close: () => setMenuOpen(false),
    toggle: () => setMenuOpen(prev => !prev)
  }));

  // useEffect(() => {
  //   // const menuEl = document.getElementById('menu');
  //   console.log('Menu Element:', hostRef.current);
  // });

  useEffect(() => {
    window.addEventListener('click', (event) => {
      const hostEl = hostRef.current;
      if (hostEl && !hostEl.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    });
  }, []);

  return (
    <div className={styles.Select} ref={hostRef}>
      <div className={styles.selected} onClick={() => setMenuOpen(!menuOpen)}>
        {value}
      </div>
      {menuOpen && (
        <div id="menu" className={styles.menu}>
          {items.map(item => (
            <div key={item} className={styles.menuItem} onClick={(event) => {
              event.stopPropagation();
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
});

export default Select;