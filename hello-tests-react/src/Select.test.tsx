import { expect, test, vi,  } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Select from './Select';

test('Select renders Item 2', () => {
  render(
    <Select
      value="Item 2"
      items={['Item 1', 'Item 2', 'Item 3']}
      onChange={() => {}}
    />,
  );

  expect(screen.getByText('Item 2')).toBeInTheDocument();
});

test('Select renders menu', () => {
  render(
    <Select
      value="Item 2"
      items={['Item 1', 'Item 2', 'Item 3']}
      onChange={() => {}}
    />,
  );

  fireEvent.click(screen.getByText('Item 2'))

  expect(screen.getByText('Item 1')).toBeInTheDocument();
});

test('Select renders menu', () => {
  const onChange = vi.fn();

  render(
    <Select
      value="Item 2"
      items={['Item 1', 'Item 2', 'Item 3']}
      onChange={onChange}
    />,
  );

  fireEvent.click(screen.getByText('Item 2'))
  fireEvent.click(screen.getByText('Item 1'))

  expect(onChange).toHaveBeenCalledWith('Item 1');
});


// test('Select renders Item 2', () => {
//   const rootEl = document.createElement('div');
//   rootEl.id = 'root';
//   document.body.appendChild(rootEl);

//   act(() => {
//     createRoot(rootEl).render(
//       <Select
//         value="Item 2"
//         items={['Item 1', 'Item 2', 'Item 3']}
//         onChange={() => {}}
//       />,
//     );
//   })

//   expect(rootEl.textContent).toContain('Item 2');
// });


