import { useState } from 'react';
import styles from './Select.module.css';

// React.createElement(Select, {});

function Select(props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.Select}>
      <div className={styles.selected} onClick={() => setMenuOpen(!menuOpen)}>
        {props.value}
      </div>
      {menuOpen && (
        <div className={styles.menu}>
          {props.items.map(item => (
            <div key={item} className={styles.menuItem} onClick={() => {
              props.onChange(item);
              setMenuOpen(false);
            }}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select;