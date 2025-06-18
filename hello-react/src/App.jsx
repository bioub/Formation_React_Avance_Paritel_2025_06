import { useState } from 'react'
import './App.css'
import Select from './Select'

function App() {
  const [item, setItem] = useState('Item 2')

  return (
    <>
      <h2>Demo Select (Rappels React !!!)</h2>
      <Select items={['Item 1', 'Item 2', 'Item 3']} value={item} onChange={(item) => setItem(item)} />
    </>
  )
}

export default App
