import { useRef, useState } from 'react';
import './App.css';
import Select from './Select';

function App() {
  const [item, setItem] = useState('Item 2');
  const select2ApiRef = useRef(null);

  return (
    <>
      <h2>Demo Select (Rappels React !!!)</h2>
      <Select
        items={['Item 1', 'Item 2', 'Item 3']}
        value={item}
        onChange={(item) => {
          setItem(item);
          select2ApiRef.current?.open();
        }}
        renderItem={(it) => (it === item ? <b>{it}</b> : it)}
      />
      <Select
        ref={select2ApiRef}
        items={['Item 1', 'Item 2', 'Item 3']}
        value={item}
        onChange={(item) => setItem(item)}
        renderItem={(it) => (it === item ? <b>{it}</b> : it)}
      />
    </>
  );
}

export default App;
