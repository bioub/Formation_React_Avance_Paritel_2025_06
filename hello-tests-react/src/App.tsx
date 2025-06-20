import { useCallback, useMemo, useState } from 'react';
import './App.css';
import Select from './Select';

function App() {
  const [item, setItem] = useState('Item 2');
  // const select2ApiRef = useRef(null);
  // const [now, setNow] = useState(new Date());

  // useEffect(() => {
  //   setInterval(() => {
  //     // setNow(new Date());
  //   }, 1000);
  // }, []);

  const ITEMS = useMemo(() => ['Item 1', 'Item 2', 'Item 3'], []);
  // const handleChange = useMemo(
  //   () => (item) => {
  //     setItem(item);
  //     select2ApiRef.current?.open();
  //   },
  //   [],
  // );
  // en shorthand
  const handleChange = useCallback(
    (item: string) => {
      setItem(item);
      // select2ApiRef.current?.open();
    },
    [],
  );

  const renderItem = useCallback(
    (it: string) => {
      return it === item ? <b>{it}</b> : it;
    },
    [item],
  );

  return (
    <>
      <h2>Demo Select (Rappels React !!!)</h2>
      <Select
        items={ITEMS}
        value={item}
        onChange={handleChange}
        renderItem={renderItem}
      />
      {/* <Select
        ref={select2ApiRef}
        items={['Item 1', 'Item 2', 'Item 3']}
        value={item}
        onChange={(item) => setItem(item)}
        renderItem={(it) => (it === item ? <b>{it}</b> : it)}
      /> */}
    </>
  );
}

export default App;
