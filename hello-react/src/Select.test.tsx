import { test } from 'vitest';
import { createRoot } from 'react-dom/client';
import Select from './Select';

test('Select works', () => {
  createRoot(document.getElementById('root')!).render(
    <Select
      value="Item 2"
      items={['Item 1', 'Item 2', 'Item 3']}
      onChange={() => {}}
    />,
  );
});
