import { memo, useCallback, useMemo, useRef, useState } from 'react';

function Exercise4() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([{ text: value, id: Math.random() }, ...todos]);
  }

  // Pour ne pas recréer la fonction handleDelete à chaque render
  // Solution 1: useRef
  // const handleDeleteRef = useRef();
  // if (!handleDeleteRef.current) {
  //   handleDeleteRef.current = function handleDelete(todo) {
  //     setTodos(todos.filter((t) => t.id !== todo.id));
  //   };
  // }

  // Solution 2: useMemo
  // const handleDelete = useMemo(() => {
  //   return function handleDelete(todo) {
  //     setTodos(todos.filter((t) => t.id !== todo.id));
  //   };
  // }, [todos]);

  // Solution 3 : useCallback
  // const handleDelete = useCallback(function handleDelete(todo) {
  //   setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
  // }, []);

  // Solution 4: ajouter un 2e paramètre à memo
  function handleDelete(todo) {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
  }

  // Solution 5 à venir: utiliser React compiler (en RC)

  console.log('render Exercise4');
  return (
    <div className="Exercise4">
      <h2>Exercice (fr)</h2>
      <p>
        Remarquer dans la console du navigateur que saisir dans le champs
        provoque un render du composant <code>Exercise4</code> mais aussi du
        composant <code>TodosList</code> qui n'est pas concerné par l'update.
      </p>
      <p>
        Utiliser <code>memo</code> ou sur le composant <code>TodosList</code>{' '}
        pour qu'il ne soit rendu que lorsque ses props sont modifiées. Attention
        il faudra s'assurer que sa prop <code>onDelete</code> ne soit pas recréé
        entre 2 render de <code>Exercise4</code> en utilisant{' '}
        <code>useCallback</code>.
      </p>
      <h2>Exercise (en)</h2>
      <p>
        Notice in the browser console that when we type into the field,{' '}
        <code>Exercise4</code> compoennt renders but the same happens to{' '}
        <code>TodosList</code>
        which is not concerned by the update.
      </p>
      <p>
        Use <code>memo</code> on component <code>TodosList</code> so it is
        rendered only when its props are modified. Be aware that its prop{' '}
        <code>onDelete</code> should not be create again between two renders of{' '}
        <code>Exercise4</code> by using <code>useCallback</code>.
      </p>
      <div className="box">
        <form onSubmit={handleSubmit}>
          <input value={value} onChange={(e) => setValue(e.target.value)} />
          <button>+</button>
        </form>
        <TodosList todos={todos} onDelete={handleDelete} />
      </div>
    </div>
  );
}

const TodosList = memo(function TodosList(props) {
  console.log('render TodosList');

  // fake 1s delay to simulate a slow component
  const begin = performance.now();
  while (performance.now() - begin < 50) {
    // do nothing, just wait
  }

  return (
    <div className="TodosList">
      {props.todos.map((t) => (
        <div key={t.id}>
          {t.text}
          <button onClick={() => props.onDelete(t)}>-</button>
        </div>
      ))}
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.todos === nextProps.todos;
});

export default Exercise4;
