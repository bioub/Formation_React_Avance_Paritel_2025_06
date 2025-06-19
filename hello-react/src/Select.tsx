import {
  forwardRef,
  memo,
  ReactNode,
  use,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import styles from './Select.module.css';
import type { MouseEvent as ReactMouseEvent } from 'react';

type SelectProps = {
  readonly items: string[];
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly renderItem?: (item: string) => ReactNode;
};

function useWindowClick(callback: (event: MouseEvent) => void): void {
  const callbackRef = useRef<((event: MouseEvent) => void) | null>(null);

  // Store the callback in a ref to avoid re-adding the event listener
  if (callbackRef.current === null) {
    callbackRef.current = callback;
  }

  useEffect(() => {
    window.addEventListener('click', callbackRef.current!);
    return () => {
      window.removeEventListener('click', callbackRef.current!);
    };
  }, []);
}

export interface SelectRef {
  open: () => void;
  close: () => void;
  toggle: () => void;
}

// React.createElement(Select, {});

/**
 * Select component for choosing an item from a list.
 */
const Select = forwardRef<SelectRef, SelectProps>(function Select(
  { items, value, onChange, renderItem }: SelectProps,
  ref,
): ReactNode {
  console.log('SELECT');

  // useEffect(() => {
  //   console.log('Effect');
  // }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => setMenuOpen(true),
    close: () => setMenuOpen(false),
    toggle: () => setMenuOpen((prev) => !prev),
  }));

  // useEffect(() => {
  //   // const menuEl = document.getElementById('menu');
  //   console.log('Menu Element:', hostRef.current);
  // });

  useWindowClick((event: MouseEvent) => {
    const hostEl = hostRef.current;
    if (hostEl && !hostEl.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  });

  const handleClickItem = (event: ReactMouseEvent) => {
    event.stopPropagation();
    onChange((event.currentTarget as HTMLElement).dataset.value || '');
    setMenuOpen(false);
  };

  return (
    <div className={styles.Select} ref={hostRef}>
      <div className={styles.selected} onClick={() => setMenuOpen(!menuOpen)}>
        {value}
      </div>
      {menuOpen && (
        <div id="menu" className={styles.menu}>
          {items.map((item) => (
            <div
              key={item}
              className={styles.menuItem}
              onClick={handleClickItem}
              data-value={item}
            >
              {renderItem ? renderItem(item) : item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

export default memo(Select);

// export default memo(Select, (prevProps, nextProps) => {
//   // Only re-render if the value or items change
//   return (
//     prevProps.value === nextProps.value &&
//     prevProps.items === nextProps.items
//   );
// });